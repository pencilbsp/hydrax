import { Source } from './utils/video';
import Abyass, { type Config } from './utils/abyass';

let videoId: string;
let filePath: string;
let needDownload = true;
let resolutionArg: string | null = null;

const args = process.argv.slice(2);
if (args.length === 0) {
    console.log('ℹ️ Usage: abyass [...options] <video_id> -o <output_file>');
    process.exit(0);
}

function getHighestSource(sources: Source[]): Source | null {
    if (sources.length === 0) return null;
    return sources.reduce((max, curr) => (curr.res_id > max.res_id ? curr : max));
}

function formatBytes(bytes: number): string {
    const kb = 1024;
    const mb = kb * 1024;
    const gb = mb * 1024;

    if (bytes >= gb) {
        return (bytes / gb).toFixed(2) + ' GB';
    } else if (bytes >= mb) {
        return (bytes / mb).toFixed(2) + ' MB';
    } else if (bytes >= kb) {
        return (bytes / kb).toFixed(2) + ' KB';
    }
    return bytes + ' B';
}

for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const value = args[i + 1];

    if (arg === '-o' && value) {
        filePath = value;
        i++;
        continue;
    }

    if ((arg === '-r' || arg === '--resolution') && value) {
        resolutionArg = value;
        i++;
        continue;
    }

    if (arg === '-l' || arg === '--list') {
        needDownload = false;
        continue;
    }

    videoId = arg;
}

async function main() {
    const abyass = new Abyass(videoId);
    await abyass.init();

    const metadata = abyass.getVideoObject();

    if (!needDownload) {
        console.table(
            metadata.sources.map((src) => ({
                label: src.label,
                red_id: src.res_id,
                size: formatBytes(src.size),
                codec: src.codec,
                status: src.status,
                type: src.type,
            })),
        );
        process.exit(0);
    }

    // 2) Chọn source theo resolutionArg
    let chosen: Source | null = null;
    if (resolutionArg) {
        if (resolutionArg.endsWith('p')) {
            // tìm theo label, ví dụ "720p"
            chosen = metadata.sources.find((s) => s.label === resolutionArg) ?? null;
        } else {
            // tìm theo res_id
            const id = parseInt(resolutionArg, 10);
            if (!isNaN(id)) {
                chosen = metadata.sources.find((s) => s.res_id === id) ?? null;
            }
        }
        if (!chosen) {
            console.log(`❌ Source with resolution "${resolutionArg}" not found`);
            process.exit(1);
        }
    } else {
        // mặc định lấy chất lượng cao nhất
        chosen = getHighestSource(metadata.sources);
    }

    const config: Config = { resolution: chosen.label, outputFile: filePath };
    await abyass.downloadVideo(config, (percent, done, total) => {
        process.stdout.write(`\rDownloading: ${percent.toFixed(2)}% (${done}/${total} bytes)`);
    });

    console.log('\n✅ Video has been saved', filePath);
}

try {
    await main();
} catch (error) {
    console.error(error);
}
