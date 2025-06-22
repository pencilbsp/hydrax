import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { staticPlugin } from '@elysiajs/static';

import appRoute from './routes';
import thumbRoute from './routes/thumb';
import proxyRoute from './routes/proxy';
import imageRoute from './routes/image';
import streamRoute from './routes/stream';
import tunnelRoute from './routes/tunnel';
import proxyV2Route from './routes/proxy-v2';
import streamV2Route from './routes/stream-v2';

const PORT = Number(process.env.PORT || 5001);

const app = new Elysia({ serve: { idleTimeout: 255 } })
    .use(html())
    .use(staticPlugin({ prefix: '/' }))
    .use(appRoute)
    .use(proxyV2Route)
    .use(proxyRoute)
    .use(thumbRoute)
    .use(imageRoute)
    .use(tunnelRoute)
    .use(streamRoute)
    .use(streamV2Route)
    .listen(PORT);

export default app.fetch;

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
