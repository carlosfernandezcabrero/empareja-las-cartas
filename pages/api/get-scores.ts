import { LEADERBOARD_TABLE_NAME } from '@/constants'
import redis from '@/lib/upstash'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const keys = await redis.zrange(LEADERBOARD_TABLE_NAME, 0, -1, {
    withScores: true,
    rev: true
  })

  const users: Record<string, any> = {}
  for (let i = 0; i < keys.length; i += 2) {
    const user = keys[i] as string
    const score = keys[i + 1]
    const avatar = await redis.get(user)

    users[user] = {
      score,
      avatar
    }
  }

  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=60')
  return res.json(users)
}
