import Redis from "ioredis";

export const redisUrl = process.env.REDIS_URL;

const redis = new Redis(redisUrl);

export default redis;
