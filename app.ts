import { Elysia, t } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

import appRoute from './routes'

const app = new Elysia()
    .use(html())
    .use(staticPlugin({ prefix: "/" }))
    .use(appRoute)
    .listen(5001)

export default app.fetch

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)