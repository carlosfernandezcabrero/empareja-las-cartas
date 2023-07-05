import { LEADERBOARD_TABLE_NAME } from '@/constants'
import redis from '@/lib/upstash'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { username, data } = req.body
  const { avatar, score } = data

  const oldScore = await redis.zscore(LEADERBOARD_TABLE_NAME, username)
  const userFromRedis = await redis.get(username)

  if (!userFromRedis) {
    await redis.set(username, avatar)
  }
  if (!oldScore || score > oldScore) {
    await redis.zadd(LEADERBOARD_TABLE_NAME, { score, member: username })
  }

  return res.send('OK')
}
