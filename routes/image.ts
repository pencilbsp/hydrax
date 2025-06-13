import { Elysia, t } from "elysia";
import { hexToString } from "../utils/crypto";
import { HYDRAX_CDN, IMAGE_CDN } from "../config";

const cdn = new URL(IMAGE_CDN);

const imageRoute = new Elysia({ prefix: "/image" }).get(
    "/:name",
    async ({ request, query, headers }) => {
        const url = new URL(request.url);
        url.protocol = "https";

        url.host = query.h ? hexToString(query.h) : cdn.host;
        url.searchParams.delete("h");

        return fetch(url, { headers: { referer: `${HYDRAX_CDN}/`, "user-agent": headers["user-agent"] } });
    },
    {
        query: t.Object({
            h: t.Optional(t.String()),
        }),
    }
);

export default imageRoute;
