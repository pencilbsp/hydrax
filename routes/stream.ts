import { Elysia, t } from 'elysia';

import { HYDRAX_CDN } from '../config';

const referer = `${HYDRAX_CDN}/`;
const streamRoute = new Elysia({ prefix: '/s' }).get(
    '/:domain/:vid/:name',
    async ({ params: { vid, name, domain }, headers }) => {
        const fileUrl = `https://${domain.replace(/_/g, '.')}/${vid}/${name}`;

        const response = await fetch(fileUrl, {
            redirect: 'manual',
            headers: { referer, range: headers['range'] },
        });

        const location = response.headers.get('location');

        if (location) {
            const url = new URL(location);
            const response = await fetch(url, {
                headers: { ...headers, referer, host: url.host },
            });
            return response;
        }

        return response;
    },
    {
        params: t.Object({
            vid: t.String(),
            domain: t.String(),
            name: t.String(),
        }),
    },
);

export default streamRoute;
