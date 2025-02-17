import { Elysia, t } from "elysia";
import { HYDRAX_CDN } from "../config";

const thumbRoute = new Elysia({ prefix: "/t" });

thumbRoute.get(
    "/:vid/:fileName",
    async ({ params: { vid, fileName } }) => {
        const thumbUrl = "https://cdn.freeimagecdn.net/" + vid + "/" + fileName;
        return fetch(thumbUrl, { headers: { referer: `${HYDRAX_CDN}/` } });
    },
    {
        params: t.Object({
            vid: t.String(),
            fileName: t.String(),
        }),
    }
);

export default thumbRoute;
