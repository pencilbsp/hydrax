import { Elysia, t } from "elysia";

const VALID_METADATA = /JSON\.parse\(atob\("([^"]+)"\)\)/;

const appRoute = new Elysia({ prefix: "/" });

appRoute.get(
    "/",
    async ({ query, set }) => {
        try {
            const response = await fetch(`https://abysscdn.com/?v=${query.v}`);
            if (!response.ok) throw new Error();

            const html = await response.text();

            if (!VALID_METADATA.test(html)) throw new Error();

            const encryptedString = html.match(VALID_METADATA)![1];

            const htmlCoreFile = Bun.file("public/core.html");
            const htmlCore = await htmlCoreFile.text();

            return htmlCore.replace("[[DATA]]", encryptedString);
        } catch (error) {
            set.status = 500;
            return "E::500";
        }
    },
    {
        query: t.Object({
            v: t.String(),
        }),
    }
);

export default appRoute;
