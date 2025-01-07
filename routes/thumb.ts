import { Elysia, t } from "elysia";

const thumbRoute = new Elysia({ prefix: "/thumb" });

thumbRoute.get(
    "/:vid/:fileName",
    async ({ params: { vid, fileName } }) => {
        const thumbUrl = "https://cdn.freeimagecdn.net/" + vid + "/" + fileName;
        const response = await fetch(thumbUrl, { headers: { referer: "https://abysscdn.com/" } });
        return response;
    },
    {
        params: t.Object({
            vid: t.String(),
            fileName: t.String(),
        }),
    }
);

export default thumbRoute;
