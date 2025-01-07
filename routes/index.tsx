import { Elysia, t } from "elysia";

import redis from "../utils/redis";

const TEMPLATE_PATH = "public/core.html";
const VALID_METADATA = /JSON\.parse\(atob\("([^"]+)"\)\)/;

const appRoute = new Elysia();

appRoute.get(
    "/",
    async ({ query, error }) => {
        try {
            let encryptedString = await redis.get(query.v);
            if (!encryptedString) {
                const response = await fetch(`https://abysscdn.com/?v=${query.v}`);
                if (!response.ok) throw new Error();

                const html = await response.text();

                if (!VALID_METADATA.test(html)) throw new Error();

                encryptedString = html.match(VALID_METADATA)![1];
                await redis.setex(query.v, 86400, encryptedString);
            }

            const htmlFile = Bun.file(TEMPLATE_PATH);
            const htmlCore = await htmlFile.text();

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
