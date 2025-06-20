import { JSDOM } from 'jsdom';
import { Deobfuscator } from 'synchrony';
import { dirname, join } from 'node:path';
import { existsSync, statSync } from 'node:fs';
import { readdir, rm, unlink, mkdir } from 'node:fs/promises';

import { generateKey } from './utils';
import { makeUrl } from './utils-type';
import { HYDRAX_CDN } from '../config';
import { Semaphore } from './semaphore';
import { CryptoHelper } from './crypto';
import { SimpleVideo, VideoObject } from './video';

const PROXY = process.env['PROXY'];

export interface Config {
    resolution: string;
    outputFile?: string;
    header?: Map<string, string>;
    connections?: number;
}

class Abyass {
    public version = 1;
    private html: string;
    public encryptedString: string;
    private videoObject: VideoObject;
    private cryptoHelper: CryptoHelper;
    private static readonly SEGMENT_SIZE = 2097152;
    public readonly DEFAULT_CONCURRENT_DOWNLOAD_LIMIT = 4;
    public static readonly VALID_METADATA = /JSON\.parse\((?:window\.|)atob\(["']([^"]+)["']\)\)/;
    public static readonly DECRYPTION_KEY = 'RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=';
    constructor(private readonly videoId: string) {
        this.videoId = videoId;
        this.cryptoHelper = new CryptoHelper();
    }

    private async fetchVideoResponse() {
        const response = await fetch(`https://abysscdn.com/?v=${this.videoId}`, {
            proxy: PROXY,
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch video response: ${response.statusText}`);
        }

        this.html = await response.text();
    }

    private async extractEncryptedString() {
        if (!this.html) {
            throw new Error('HTML content not fetched');
        }

        if (Abyass.VALID_METADATA.test(this.html)) {
            this.encryptedString = this.html.match(Abyass.VALID_METADATA)[1];
            return;
        }

        // console.log(this.html);

        const {
            window: { document },
        } = new JSDOM(this.html);

        const scripts = Array.from(document.querySelectorAll('script'));
        const maxLength = Math.max(...scripts.map(({ textContent }) => textContent.length));

        const script = Array.from(document.querySelectorAll('script')).find(
            ({ textContent }) => textContent.length === maxLength,
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

        const deobfuscator = new Deobfuscator();
        let content = await deobfuscator.deobfuscateSource(script.textContent);
        content = content.replace(/\n/g, ' ');
        content = content.replace(/\s\s+/g, ' ');

        if (/\s\w\s=\s["'](.{24,}_)["';,]/.test(content)) {
            this.encryptedString = content.match(/\s\w\s=\s["'](.{24,}_)["';,]/)[1];

            const xxx =
                /((?:var|let|const)\s\w\s=\sJSON\.parse.*?)((?:var|let|const)\s\w)(\s=\s{\swidth:.*?};\s;\s;\s;)/;
            if (xxx.test(content)) {
                let script = content.match(xxx)[0];

                script = script.replace('window.atob', 'CryptoHelper.b64');
                script = script.replace(xxx, '$1videoObject$3');
                let videoObject = {};
                eval(script);

                this.videoObject = videoObject as any;
            }
            return;
        }

        // ---------------

        const vaRegex = /(function\s\w\(\w,\w\){var.*?,\w\)})/;
        const vRegex = /((?:(?:[()]|)(\w)\(\d+\)\+){16,}.*?),/;
        const vbRegex = /(function\s\w\(\)\{var\s\w=\[".*?}\)\(\)})/;
        const fRegex = /(function \w\(\){for.*?((?:(?:[()]|)(\w)\(\d+\)\+){16,}.*?),)/;

        const functionContent = script.textContent.match(fRegex)[1];

        var encryptedString = '';
        if (functionContent) {
            let initFunction = script.textContent.slice(0, script.textContent.search(fRegex)) + ';';

            const [, hashedValue, functionName] = functionContent.match(vRegex);

            const nextRegex = new RegExp(`(var\\s${functionName}=\\w),`);
            initFunction += functionContent.match(nextRegex)[1] + `;encryptedString=${hashedValue}`;

            if (!vbRegex.test(initFunction) && vbRegex.test(script.textContent)) {
                const vb = script.textContent.match(vbRegex)[1];
                initFunction = vb + ';' + initFunction;
            }

            if (!vaRegex.test(initFunction) && vaRegex.test(script.textContent)) {
                const va = script.textContent.match(vaRegex)[1];
                initFunction = va + ';' + initFunction;
            }

            // console.log(script.textContent);
            // console.log("-----------------------");
            // console.log(initFunction);
            eval(initFunction);
        } else {
            throw new Error('Encrypted string not found');
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
            const body = {
                ...simpleVideo,
                range: { start: range[0], end: range[1] },
            };
            const encryptedBody = await this.cryptoHelper.encrypt(JSON.stringify(body));
            fragmentList[index] = encryptedBody;
        }

        return fragmentList;
    }

    private async *requestSegment(url: string, body: string, chunkSize: number = 65536) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ hash: body }),
            headers: { 'content-type': 'application/json', origin: HYDRAX_CDN },
        });

        if (!response.ok) {
            throw new Error(`Failed to request segment: ${response.statusText}`);
        }

        if (!response.body) {
            throw new Error('Response body is null');
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
            .filter((file) => file.startsWith('segment_'))
            .sort((a, b) => {
                const numA = parseInt(a.replace('segment_', ''));
                const numB = parseInt(b.replace('segment_', ''));
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
            console.error('Failed to delete folder: ', segmentFolderPath);
        }
    }

    private async initializeDownloadTempDir(
        config: Config,
        simpleVideo: SimpleVideo,
        totalSegments: number,
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
                    const num = parseInt(file.replace('segment_', ''));
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

    // Trong Config bạn không cần thay đổi, callback ta truyền ngoài
    // Thay đổi signature của downloadVideo:
    async downloadVideo(
        config: Config,
        onProgress?: (percent: number, downloadedBytes: number, totalBytes: number) => void,
    ): Promise<void> {
        const simpleVideo = SimpleVideo.fromVideoObject(this.videoObject, config.resolution);
        const totalBytes = simpleVideo.size; // tổng số bytes của video

        const segmentBodies = await this.generateSegmentsBody(simpleVideo);
        const segmentUrl = this.getSegmentUrl();
        await this.cryptoHelper.expandKey(generateKey(simpleVideo.size));

        const tempDir = await this.initializeDownloadTempDir(config, simpleVideo, Object.keys(segmentBodies).length);

        const segmentsToDownload =
            tempDir.remainingSegments.length > 0
                ? Object.entries(segmentBodies).filter(([idx]) => tempDir.remainingSegments.includes(Number(idx)))
                : Object.entries(segmentBodies);

        const semaphore = new Semaphore(config.connections || this.DEFAULT_CONCURRENT_DOWNLOAD_LIMIT);

        let downloadedBytes = 0;

        const downloadSegmentTask = async (index: number, body: string): Promise<void> => {
            await semaphore.acquire();
            try {
                let isHeader = true;
                const file = Bun.file(join(tempDir.path, `segment_${index}`));
                const writer = file.writer();

                for await (const chunk of this.requestSegment(segmentUrl, body)) {
                    const data = isHeader
                        ? await (async () => {
                              isHeader = false;
                              return this.cryptoHelper.decrypt(chunk);
                          })()
                        : chunk;

                    writer.write(data);
                    // cập nhật progress
                    downloadedBytes += typeof data === 'string' ? data.length : data.byteLength;
                    if (onProgress) {
                        const percent = Math.min(100, (downloadedBytes / totalBytes) * 100);
                        onProgress(percent, downloadedBytes, totalBytes);
                    }
                }

                await writer.end();
            } finally {
                semaphore.release();
            }
        };

        // chạy download
        await Promise.all(segmentsToDownload.map(([idx, body]) => downloadSegmentTask(Number(idx), body)));

        // sau khi xong merge file
        if (config.outputFile) {
            await this.mergeSegmentsIntoMp4File(tempDir.path, config.outputFile);
        }
    }

    getVideoObject() {
        return this.videoObject;
    }

    getVersion() {
        return this.version;
    }

    downgradeEncryptedString() {
        this.videoObject.tracker = {};
        this.videoObject.image = this.videoObject.image ? makeUrl(this.videoObject.image) : this.videoObject.image;

        if (this.version > 1) {
            return CryptoHelper.encryptString(this.videoObject, Abyass.DECRYPTION_KEY);
        } else {
            return this.encryptedString;
        }
    }

    async init() {
        await this.fetchVideoResponse();
        await this.extractEncryptedString();
        const parseOjb = CryptoHelper.decryptString(this.encryptedString, Abyass.DECRYPTION_KEY);
        if (!this.videoObject) {
            this.videoObject = parseOjb;
        } else {
            this.version = 2;
            this.videoObject.sources = parseOjb.sources;
        }

        if (this.videoObject.ads) {
            this.videoObject.ads = { pop: [] };
        }

        if (this.videoObject.tracker) {
            this.videoObject.tracker = {};
        }
    }
}

export default Abyass;
