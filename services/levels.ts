import levelsJSON from '@/data/levels.json' assert { type: 'json' }
import type { LevelProperties } from '@/types'

const levels = levelsJSON as Record<string, LevelProperties>

export function getLevels() {
  return levels
}

export function getLevelById(id: string) {
  return levels[id]
}
