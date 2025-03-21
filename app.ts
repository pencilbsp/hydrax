import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";

import appRoute from "./routes";
import thumbRoute from "./routes/thumb";
import proxyRoute from "./routes/proxy";
import streamRoute from "./routes/stream";
import tunnelRoute from "./routes/tunnel";

const PORT = Number(process.env.PORT || 5001);

const app = new Elysia()
    .use(html())
    .use(staticPlugin({ prefix: "/" }))
    .use(appRoute)
    .use(proxyRoute)
    .use(thumbRoute)
    .use(tunnelRoute)
    .use(streamRoute)
    .listen(PORT);

export default app.fetch;

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
