export const REDIS_KEY = 'HYDRAX';

export function key(...params: string[]) {
    const keys = [REDIS_KEY, ...params];
    return keys.join('_');
}
