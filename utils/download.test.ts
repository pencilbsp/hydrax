import { unlink } from 'fs/promises';
import { describe, test, expect } from 'bun:test';

import Abyass, { Config } from './abyass';

describe('Abyass', () => {
    test(
        'should download a video',
        async () => {
            const abyass = new Abyass('J3kEPbb7V');
            await abyass.init();

            const metadata = abyass.getVideoObject();

            expect(metadata).toBeObject();
            expect(metadata.id).toBeString();

            const config: Config = { resolution: '720p', outputFile: './download.mp4' };

            await abyass.downloadVideo(config);

            if (config.outputFile) {
                const file = Bun.file(config.outputFile);
                const existing = await file.exists();

                expect(existing).toBeTruthy();
                await unlink(config.outputFile);
            }
        },
        { timeout: 60 * 1000 },
    );
});
