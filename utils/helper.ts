export function hexToString(str: string) {
    return Buffer.from(str, 'hex').toString('utf8');
}