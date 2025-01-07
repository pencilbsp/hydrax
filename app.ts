import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

import appRoute from "./routes";
import thumbRoute from "./routes/thumb";
import streamRoute from "./routes/stream";

const app = new Elysia()
    .use(html())
    .use(staticPlugin({ prefix: "/" }))
    .use(appRoute)
    .use(thumbRoute)
    .use(streamRoute)
    .listen(5001);

export default app.fetch;

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
