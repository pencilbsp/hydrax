import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

import appRoute from "./routes";
import thumbRoute from "./routes/thumb";
import streamRoute from "./routes/stream";

const PORT = Number(process.env.PORT || 5001);

const app = new Elysia()
    .use(html())
    .use(staticPlugin({ prefix: "/" }))
    .use(appRoute)
    .use(thumbRoute)
    .use(streamRoute)
    .listen(PORT);

export default app.fetch;

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
