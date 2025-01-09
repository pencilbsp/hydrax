import { Elysia, t } from "elysia";

import redis, { key } from "../utils/redis";

const TEMPLATE_PATH = "public/core.html";
const VALID_METADATA = /JSON\.parse\(atob\("([^"]+)"\)\)/;
const MAX_AGE = 86400 / 4;

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
            return error(500);
        }
    },
    {
        query: t.Object({
            v: t.String(),
        }),
    }
);

export default appRoute;
