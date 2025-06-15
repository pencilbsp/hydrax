import { Readable } from 'stream';
import { Elysia, t } from 'elysia';

import { HYDRAX_CDN, USER_AGENT } from '../config';
import { hexToString } from '../utils/crypto';

const prefix = '/p2' as const;

export default new Elysia({ prefix }).post(
    '/:id',
    async ({ request, headers, query }) => {
        const url = new URL(request.url);

        url.protocol = 'https';
        url.host = hexToString(query.h);
        url.searchParams.delete('h');
        url.pathname = url.pathname.replace(prefix, '');

        const response = await fetch(url.toString(), {
            body: request.body,
            method: request.method,
            headers: {
                origin: HYDRAX_CDN,
                'content-type': 'application/json',
                'user-agent': headers['user-agent'] || USER_AGENT,
            },
        });

        return Readable.from(response.body as any);
    },
    {
        query: t.Object({
            h: t.String(),
        }),
    },
);
