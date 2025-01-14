import { Elysia, t } from "elysia";
import { Html } from "@elysiajs/html";

import redis, { key } from "../utils/redis";

const TEMPLATE_PATH = "public/core.html";
const VALID_METADATA = /JSON\.parse\(atob\("([^"]+)"\)\)/;
const MAX_AGE = 86400 / 12;

const appRoute = new Elysia();

appRoute.get(
    "/",
    async ({ query, set }) => {
        try {
            let encryptedString = await redis.get(key(query.v));
            if (!encryptedString) {
                const response = await fetch(`https://abysscdn.com/?v=${query.v}`);
                if (!response.ok) throw new Error();

                const html = await response.text();

                if (!VALID_METADATA.test(html)) throw new Error();

                encryptedString = html.match(VALID_METADATA)![1];
                await redis.setex(key(query.v), MAX_AGE, encryptedString);
            }

            const htmlFile = Bun.file(TEMPLATE_PATH);
            let htmlCore = await htmlFile.text();

            set.headers["cache-control"] = `public, max-age=${MAX_AGE}`;

            const hours = new Date().getHours();

            if (hours > 0 && hours < 6) {
                htmlCore = htmlCore.replace(
                    "<!-- [[ADS]] -->",
                    '<script data-cfasync="false" async type="text/javascript" src="//wr.brandonketting.com/rvbeiCXzz5rleLaq/83817"></script>'
                );
            } else {
                htmlCore.replace("<!-- [[ADS]] -->", "");
            }

            return htmlCore.replace("[[DATA]]", encryptedString);
        } catch (_) {
            set.headers["cache-control"] = `private, max-age=60}`;
            return (
                <body>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6S6Q1BPHGP"></script>
                    <script>
                        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-6S6Q1BPHGP');`}
                    </script>
                    <h1>Hihi</h1>
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
