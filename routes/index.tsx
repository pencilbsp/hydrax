import { Elysia, t } from "elysia";
import { Html } from "@elysiajs/html";

import redis, { key } from "../utils/redis";

const MAX_AGE = 86400 / 12;
const PROXY = process.env["PROXY"];
const TEMPLATE_PATH = "public/core.html";
const VALID_METADATA = /JSON\.parse\(atob\("([^"]+)"\)\)/;

declare global {
    interface RequestInit {
        proxy?: string; // Thêm hỗ trợ proxy vào type của fetch
    }
}

const appRoute = new Elysia();

appRoute.get(
    "/",
    async ({ query, set, redirect }) => {
        try {
            return redirect(`https://abysscdn.com/?v=${query.v}`)
            let encryptedString = await redis.get(key(query.v));
            if (!encryptedString) {
                const response = await fetch(`https://abysscdn.com/?v=${query.v}`, { proxy: PROXY });

                if (!response.ok) throw new Error(response.statusText);

                const html = await response.text();

                if (!VALID_METADATA.test(html)) throw new Error("File not found.");

                encryptedString = html.match(VALID_METADATA)![1];
                await redis.setex(key(query.v), MAX_AGE, encryptedString);
            }

            const htmlFile = Bun.file(TEMPLATE_PATH);
            let htmlCore = await htmlFile.text();

            set.headers["cache-control"] = `public, max-age=${MAX_AGE}`;

            // const hours = new Date().getHours();

            // if (hours > 0 && hours < 6) {
            // htmlCore = htmlCore.replace(
            //     "<!-- [[ADS]] -->",
            //     '<script data-cfasync="false" async type="text/javascript" src="//wr.brandonketting.com/rvbeiCXzz5rleLaq/83817"></script>'
            // );
            // } else {
            //     htmlCore.replace("<!-- [[ADS]] -->", "");
            // }

            return htmlCore.replace("[[DATA]]", encryptedString);
        } catch (error) {
            set.headers["cache-control"] = `private, max-age=60}`;
            return (
                <body>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6S6Q1BPHGP"></script>
                    <script>
                        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-6S6Q1BPHGP');`}
                    </script>
                    <h1>Hihi</h1>
                    <p>{error.message}</p>
                </body>
            );
        }
    },
    {
        query: t.Object({
            v: t.Optional(t.String()),
        }),
    }
);

export default appRoute;
