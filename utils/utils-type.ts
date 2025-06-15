import { DOMAIN } from '../config';

function stringToHex(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return hex;
}

export const makeUrl = (a: string, prefix?: string) => {
    try {
        let urlString = a;
        if (urlString.startsWith('//')) {
            urlString = window.location.protocol + urlString;
        }

        const url = new URL(urlString);

        if (prefix) {
            url.pathname = prefix + url.pathname;
        }

        url.searchParams.set('h', stringToHex(url.host));
        url.host = new URL(DOMAIN).host;
        return url.toString();
    } catch {
        return a;
    }
};
