import Redis from "ioredis";

export const redisUrl = process.env.REDIS_URL;

export default new Redis(redisUrl);
