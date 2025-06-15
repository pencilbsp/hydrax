import { Elysia, t } from 'elysia';
import { Html } from '@elysiajs/html';

import Abyass from '../utils/abyass';
import redis, { key } from '../utils/redis';

const MAX_AGE = 86400 / 12;
const TEMPLATE_PATH = 'public/core.html';

declare global {
    interface RequestInit {
        proxy?: string; // Thêm hỗ trợ proxy vào type của fetch
    }
}

const appRoute = new Elysia();

appRoute.get(
    '/',
    async ({ query, set, redirect }) => {
        try {
            // return redirect(`https://abysscdn.com/?v=${query.v}`)
            let encryptedString = await redis.get(key(query.v));
            if (!encryptedString) {
                // const response = await fetch(`https://abysscdn.com/?v=${query.v}`, { proxy: PROXY });

                // if (!response.ok) throw new Error(response.statusText);

                // const html = await response.text();

                // if (!VALID_METADATA.test(html)) throw new Error("File not found.");

                // encryptedString = html.match(VALID_METADATA)![1];
                const abyass = new Abyass(query.v);
                await abyass.init();

                encryptedString = abyass.downgradeEncryptedString() + '_';

                await redis.setex(key(query.v), MAX_AGE, encryptedString);
            }

            const htmlFile = Bun.file(TEMPLATE_PATH);
            let htmlCore = await htmlFile.text();

            set.headers['cache-control'] = `public, max-age=${MAX_AGE}`;

            // const hours = new Date().getHours();

            // if (hours > 0 && hours < 6) {
            // htmlCore = htmlCore.replace(
            //     "<!-- [[ADS]] -->",
            //     '<script data-cfasync="false" async type="text/javascript" src="//wr.brandonketting.com/rvbeiCXzz5rleLaq/83817"></script>'
            // );
            // } else {
            //     htmlCore.replace("<!-- [[ADS]] -->", "");
            // }

            return htmlCore.replace('[[DATA]]', encryptedString);
        } catch (error) {
            console.log(error);
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
