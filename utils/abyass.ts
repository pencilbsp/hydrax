import { JSDOM } from "jsdom";
// import { Deobfuscator } from "deobfuscator";
import { dirname, join } from "node:path";
import { existsSync, statSync } from "node:fs";
import { readdir, rm, unlink, mkdir } from "node:fs/promises";

import { generateKey } from "./utils";
import { CryptoHelper } from "./crypto";
import { Semaphore } from "./semaphore";
import { SimpleVideo, VideoObject } from "./video";

const PROXY = process.env["PROXY"];

export interface Config {
    resolution: string;
    outputFile?: string;
    header?: Map<string, string>;
    connections?: number;
}

class Abyass {
    private html: string;
    public encryptedString: string;
    private videoObject: VideoObject;
    private cryptoHelper: CryptoHelper;
    private static readonly SEGMENT_SIZE = 2097152;
    public readonly DEFAULT_CONCURRENT_DOWNLOAD_LIMIT = 4;
    public static readonly VALID_METADATA = /JSON\.parse\(atob\(["']([^"]+)["']\)\)/;
    public static readonly DECRYPTION_KEY = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=";
    constructor(private readonly videoId: string) {
        this.videoId = videoId;
        this.cryptoHelper = new CryptoHelper();
    }

    private async fetchVideoResponse() {
        const response = await fetch(`https://abysscdn.com/?v=${this.videoId}`, { proxy: PROXY });
        if (!response.ok) {
            throw new Error(`Failed to fetch video response: ${response.statusText}`);
        }

        this.html = await response.text();
    }

    private async extractEncryptedString() {
        if (!this.html) {
            throw new Error("HTML content not fetched");
        }

        // console.log(this.html);

        const {
            window: { document },
        } = new JSDOM(this.html);

        const script = Array.from(document.querySelectorAll("script")).find(({ textContent }) =>
            textContent.includes("SoTrym")
        );

        // const valid =
        //     /(.*?)(window\[\w+\(\d+\).*?)(async\(\)=>{.*?;)(if\(!window.*?){(var\s\w=\w;)(.*?SoTrym.*?}}\)\(\))(.*?;)/;

        // if (!valid.test(script.textContent)) {
        //     throw new Error("Encrypted string not found");
        // }

        // const va = script.textContent.match(/\(atob,([\w]\[[\w]\(\d+\)\])\)/)[1];

        // var encryptedString = "";

        // const patchedScript = script.textContent.replace(valid, `$1($3$5encryptedString=${va};})();`);

        // eval(patchedScript);

        // ---------------

        // const deobfuscator = new Deobfuscator();
        // const content = await deobfuscator.deobfuscateSource(script.textContent);

        // if (!Abyass.VALID_METADATA.test(content)) {
        //     throw new Error("Encrypted string not found");
        // }

        // ---------------

        const vRegex = /((?:(?:[()]|)(\w)\(\d+\)\+){16,}.*?),/;
        const fRegex = /(function \w\(\){for.*?((?:(?:[()]|)(\w)\(\d+\)\+){16,}.*?),)/;

        const functionContent = script.textContent.match(fRegex)[1];

        var encryptedString = "";
        if (functionContent) {
            let initFunction = script.textContent.slice(0, script.textContent.search(fRegex)) + ";";

            const [, hashedValue, functionName] = functionContent.match(vRegex);

            const nextRegex = new RegExp(`(var\\s${functionName}=\\w),`);
            initFunction += functionContent.match(nextRegex)[1] + `;encryptedString=${hashedValue}`;

            eval(initFunction);
        } else {
            throw new Error("Encrypted string not found");
        }

        this.encryptedString = encryptedString;
    }

    private getSegmentUrl() {
        return `https://${this.videoObject.domain}/${this.videoObject.id}`;
    }

    private generateRanges(size: number, step: number = Abyass.SEGMENT_SIZE): Array<[number, number]> {
        const ranges: Array<[number, number]> = [];

        // if the size is less than or equal to step size return a single range
        if (size <= step) {
            ranges.push([0, size - 1]);
            return ranges;
        }

        let start = 0;
        while (start < size) {
            const end = Math.min(start + step - 1, size - 1); // trừ 1 để tránh overlap
            ranges.push([start, end]);
            start = end + 1; // bắt đầu từ vị trí tiếp theo
        }

        return ranges;
    }

    private async generateSegmentsBody(simpleVideo: SimpleVideo): Promise<Record<number, string>> {
        const fragmentList: Record<number, string> = {};
        await this.cryptoHelper.expandKey(generateKey(simpleVideo.slug));

        const ranges = this.generateRanges(simpleVideo.size);

        for (const [index, range] of ranges.entries()) {
            const body = { ...simpleVideo, range: { start: range[0], end: range[1] } };
            const encryptedBody = await this.cryptoHelper.encrypt(JSON.stringify(body));
            fragmentList[index] = encryptedBody;
        }

        return fragmentList;
    }

    private async *requestSegment(url: string, body: string, chunkSize: number = 65536) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ hash: body }),
            headers: { "content-type": "application/json" },
        });

        if (!response.ok) {
            throw new Error(`Failed to request segment: ${response.statusText}`);
        }

        if (!response.body) {
            throw new Error("Response body is null");
        }

        const reader = response.body.getReader();

        let buffer = new Uint8Array(0); // Buffer tạm thời để lưu các chunk

        // Đọc các chunk từ stream và yield mỗi chunk có kích thước tùy chỉnh
        while (true) {
            const { done, value } = await reader.read();

            if (done) break; // Khi không còn dữ liệu nữa, kết thúc

            // Nối phần dữ liệu mới vào buffer
            buffer = new Uint8Array([...buffer, ...value]);

            // Nếu buffer đủ kích thước chunkSize, yield ra chunk đó
            while (buffer.length >= chunkSize) {
                const chunk = buffer.slice(0, chunkSize);
                buffer = buffer.slice(chunkSize); // Cắt buffer còn lại
                yield chunk;
            }
        }

        // Yield phần còn lại của buffer nếu có
        if (buffer.length > 0) {
            yield buffer;
        }
    }

    private async mergeSegmentsIntoMp4File(segmentFolderPath: string, output: string): Promise<void> {
        const files = await readdir(segmentFolderPath);
        const segmentFiles = files
            .filter((file) => file.startsWith("segment_"))
            .sort((a, b) => {
                const numA = parseInt(a.replace("segment_", ""));
                const numB = parseInt(b.replace("segment_", ""));
                return numA - numB;
            });

        const outputFile = Bun.file(output);
        const writer = outputFile.writer();

        for (const file of segmentFiles) {
            const segmentFile = Bun.file(join(segmentFolderPath, file));
            const data = await segmentFile.arrayBuffer();
            writer.write(data);
        }

        await writer.end();

        try {
            await rm(segmentFolderPath, { recursive: true, force: true });
        } catch (error) {
            console.error("Failed to delete folder: ", segmentFolderPath);
        }
    }

    private async initializeDownloadTempDir(
        config: Config,
        simpleVideo: SimpleVideo,
        totalSegments: number
    ): Promise<{ path: string; remainingSegments: number[] }> {
        const tempFolderName = `temp_${simpleVideo.slug}_${simpleVideo.label}`;
        const tempFolder = join(dirname(config.outputFile || process.cwd()), tempFolderName);

        if (existsSync(tempFolder) && statSync(tempFolder).isDirectory()) {
            const existingSegments: number[] = [];
            const files = await readdir(tempFolder);

            for (const file of files) {
                const filePath = join(tempFolder, file);
                if (
                    statSync(filePath).isFile() &&
                    /segment_\d+/.test(file) &&
                    statSync(filePath).size < Abyass.SEGMENT_SIZE
                ) {
                    await unlink(filePath);
                } else {
                    const num = parseInt(file.replace("segment_", ""));
                    if (!isNaN(num)) {
                        existingSegments.push(num);
                    }
                }
            }

            const allSegmentNames = Array.from({ length: totalSegments }, (_, i) => i);
            const missingSegmentNames = allSegmentNames.filter((num) => !existingSegments.includes(num));

            return {
                path: tempFolder,
                remainingSegments: missingSegmentNames,
            };
        } else {
            await mkdir(tempFolder, { recursive: true });
        }

        return {
            path: tempFolder,
            remainingSegments: [],
        };
    }

    async downloadVideo(config: Config): Promise<void> {
        const simpleVideo = SimpleVideo.fromVideoObject(this.videoObject, config.resolution);
        const segmentBodies = await this.generateSegmentsBody(simpleVideo);

        const segmentUrl = this.getSegmentUrl();

        await this.cryptoHelper.expandKey(generateKey(simpleVideo.size));

        const tempDir = await this.initializeDownloadTempDir(config, simpleVideo, Object.keys(segmentBodies).length);

        const segmentsToDownload =
            tempDir.remainingSegments.length > 0
                ? Object.entries(segmentBodies).filter(([index]) => tempDir.remainingSegments.includes(Number(index)))
                : Object.entries(segmentBodies);

        const semaphore = new Semaphore(config.connections || this.DEFAULT_CONCURRENT_DOWNLOAD_LIMIT);
        // const totalSegments = segmentsToDownload.length;
        // const mediaSize = segmentsToDownload.length * Abyass.SEGMENT_SIZE;

        let downloadedSegments = 0;
        let totalBytesDownloaded = 0;

        // const startTime = Date.now();

        const downloadSegmentTask = async (index: number, body: string): Promise<void> => {
            await semaphore.acquire();
            try {
                let isHeader = true;
                const file = Bun.file(join(tempDir.path, `segment_${index}`));
                const writer = file.writer();

                const chunks = this.requestSegment(segmentUrl, body); // Gọi async generator để nhận chunks

                for await (const chunk of chunks) {
                    const array = isHeader
                        ? await (() => {
                              isHeader = false;
                              return this.cryptoHelper.decrypt(chunk);
                          })()
                        : chunk;

                    writer.write(array);
                    totalBytesDownloaded += array instanceof Uint8Array ? array.byteLength : array.length;
                }

                await writer.end();
                downloadedSegments++;
            } finally {
                semaphore.release();
            }
        };

        const downloadPromises = segmentsToDownload.map(([index, body]) => downloadSegmentTask(Number(index), body));

        // Progress monitoring
        // const progressInterval = setInterval(() => {
        //     this.displayProgressBar(mediaSize, totalSegments, totalBytesDownloaded, downloadedSegments, startTime);
        // }, 1000);

        await Promise.all(downloadPromises); // Đợi tất cả các tác vụ hoàn thành
        // clearInterval(progressInterval);

        if (config.outputFile) {
            await this.mergeSegmentsIntoMp4File(tempDir.path, config.outputFile);
        }
    }

    getVideoObject() {
        return this.videoObject;
    }

    async init() {
        await this.fetchVideoResponse();
        await this.extractEncryptedString();
        this.videoObject = CryptoHelper.decryptString(this.encryptedString, Abyass.DECRYPTION_KEY);
        console.log(this.videoObject);
    }
}

export default Abyass;
