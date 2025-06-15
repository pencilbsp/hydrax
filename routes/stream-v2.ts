import { Elysia, t } from 'elysia';

import { HYDRAX_CDN } from '../config';
import { hexToString } from '../utils/crypto';

const prefix = '/s2' as const;
const referer = `${HYDRAX_CDN}/`;

const streamV2Route = new Elysia({ prefix }).get(
    '/:id/:name',
    async ({ query, request, headers }) => {
        const url = new URL(request.url);
        url.port = '443';
        url.protocol = 'https';
        url.host = hexToString(query.h);
        url.searchParams.delete('h');
        url.pathname = url.pathname.replace(prefix, '');

        const response = await fetch(url.toString(), {
            headers: { referer, range: headers['range'] },
        });

        const location = response.headers.get('location');

        if (location) {
            const url = new URL(location);
            const response = await fetch(url, {
                headers: { referer, range: headers['range'] },
            });

            return response;
        }

        return response;
    },
    {
        query: t.Object({
            h: t.String(),
        }),
    },
);

export default streamV2Route;
