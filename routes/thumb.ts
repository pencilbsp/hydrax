import { Elysia, t } from "elysia";
import { HYDRAX_CDN, IMAGE_CDN } from "../config";

const thumbRoute = new Elysia({ prefix: "/t" }).get(
    "/:vid/:name",
    async ({ params: { vid, name }, headers }) => {
        const thumbUrl = IMAGE_CDN + "/image/" + vid + "/" + name;
        return fetch(thumbUrl, { headers: { referer: HYDRAX_CDN + "/", "user-agent": headers["user-agent"] } });
    },
    {
        params: t.Object({
            vid: t.String(),
            name: t.String(),
        }),
    }
);

export default thumbRoute;
