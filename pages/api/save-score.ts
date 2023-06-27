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

  await redis.set(username, avatar)
  await redis.zadd('leaderboard', { score: score, member: username })

  return res.send('OK')
}
