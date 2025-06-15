import Redis from 'ioredis';

export const redisUrl = process.env.REDIS_URL;

const redis = new Redis(redisUrl);

export const REDIS_KEY = 'HYDRAX';

export function key(...params: string[]) {
    const keys = [REDIS_KEY, ...params];
    return keys.join('_');
}

export default redis;
