import { Readable } from 'stream';
import { Elysia, t } from 'elysia';

import { hexToString } from '../utils/helper';
import { HYDRAX_CDN, USER_AGENT } from '../config';

export default new Elysia({ prefix: '/tunnel' })
    .get(
        '/',
        async ({ query, headers }) => {
            const url = 'https:' + query.d;

            const response = await fetch(url, {
                headers: {
                    origin: HYDRAX_CDN,
                    'user-agent': headers['user-agent'] || USER_AGENT,
                },
            });

            return Readable.from(response.body as any);
        },
        {
            query: t.Object({
                d: t.String(),
            }),
        },
    )
    .get(
        '/list',
        async ({ query, request, headers }) => {
            const url = new URL(request.url);
            url.protocol = 'https';
            url.host = hexToString(query.h);
            url.searchParams.delete('h');

            const response = await fetch(url, {
                headers: {
                    origin: HYDRAX_CDN,
                    'user-agent': headers['user-agent'],
                },
            });

            const json = await response.json();
            return json;
        },
        {
            query: t.Object({
                h: t.String(),
            }),
        },
    );
