import { redis } from 'bun';
import { Abyass } from 'abyass';
import { Elysia, t } from 'elysia';
import { CustomBase64 } from 'abyass/utils';

import { key } from '../utils/redis';

const MAX_AGE = 86400 / 12;
const htmlFile = Bun.file('public/core.html');

const appRoute = new Elysia().get(
    '/',
    async ({ query, set, redirect }) => {
        try {
            const cacheKey = key(query.v);
            let encryptedString = await redis.get(cacheKey);

            if (!encryptedString) {
                const abyass = new Abyass(query.v);
                await abyass.extract();

                const videoObject = abyass.getVideoObject();

                if (videoObject.ads) {
                    videoObject.ads.pop = [];
                }

                if (videoObject.tracker) {
                    videoObject.tracker.url = null;
                }

                encryptedString = CustomBase64.encode(JSON.stringify(videoObject)) + '_';

                await redis.set(cacheKey, encryptedString);
                await redis.expire(cacheKey, MAX_AGE);
            }

            let htmlCore = await htmlFile.text();

            set.headers['cache-control'] = `public, max-age=${MAX_AGE}`;

            return htmlCore.replace('[[DATA]]', encryptedString);
        } catch (error) {
            return redirect(`https://abysscdn.com/?v=${query.v}`);
        }
    },
    {
        query: t.Object({
            v: t.String(),
        }),
    },
);

export default appRoute;
