import { Readable } from "stream";
import { Elysia, t } from "elysia";

import { HYDRAX_CDN, USER_AGENT } from "../config";

export default new Elysia({ prefix: "/tunnel" }).get(
    "/",
    async ({ request, params, query }) => {
        const url = "https:" + query.d;

        const response = await fetch(url, {
            method: request.method,
            body: request.body,
            headers: {
                origin: HYDRAX_CDN,
                "user-agent": USER_AGENT,
            },
        });

        return Readable.from(response.body as any);
    },
    {
        query: t.Object({
            d: t.String(),
        }),
    }
);
