import { Elysia, t } from "elysia";
import { Html } from "@elysiajs/html";

import redis, { key } from "../utils/redis";

const TEMPLATE_PATH = "public/core.html";
const VALID_METADATA = /JSON\.parse\(atob\("([^"]+)"\)\)/;
const MAX_AGE = 86400 / 12;

const appRoute = new Elysia();

appRoute.get(
    "/",
    async ({ query, error, set }) => {
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
            const htmlCore = await htmlFile.text();

            set.headers["cache-control"] = `public, max-age=${MAX_AGE}`;
            return htmlCore.replace("[[DATA]]", encryptedString);
        } catch (_) {
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
            v: t.String(),
        }),
    }
);

export default appRoute;
