import { Elysia, t } from "elysia";
import { HYDRAX_CDN } from "../config";

const referer = `${HYDRAX_CDN}/`;
const streamRoute = new Elysia({ prefix: "/stream" });

streamRoute.get(
    "/:domain/:vid/:fileName",
    async ({ params: { vid, fileName, domain }, headers }) => {
        const thumbUrl = `https://${domain.replaceAll("_", ".")}/${vid}/${fileName}`;
        const response = await fetch(thumbUrl, { redirect: "manual", headers: { referer, origin: HYDRAX_CDN } });
        const location = response.headers.get("location");

        if (location) {
            const url = new URL(location);
            const response = await fetch(url, { headers: { ...headers, referer, host: url.host } });
            return response;
        }

        return response;
    },
    {
        params: t.Object({
            vid: t.String(),
            domain: t.String(),
            fileName: t.String(),
        }),
    }
);

export default streamRoute;
