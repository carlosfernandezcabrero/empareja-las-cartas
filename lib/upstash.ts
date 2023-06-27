import { Redis } from '@upstash/redis'

declare global {
  var redis: Redis
}

const redis = global.redis || Redis.fromEnv()

if (process.env.NODE_ENV === 'development') global.redis = redis

export default redis
