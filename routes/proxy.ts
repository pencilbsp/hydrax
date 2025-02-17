import { Readable } from "stream";
import { Elysia, t } from "elysia";

import { HYDRAX_CDN, USER_AGENT } from "../config";

export default new Elysia({ prefix: "/p" }).all(
    "/*",
    async ({ request, params, query }) => {
        const domain = atob(query.d.replaceAll("_", "/").replaceAll("-", "+"));
        const response = await fetch(`https:${domain}/${params["*"]}`, {
            method: request.method,
            body: request.body,
            headers: {
                origin: HYDRAX_CDN,
                "user-agent": USER_AGENT,
                "content-type": "application/json",
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
