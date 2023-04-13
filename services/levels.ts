import levels from '@/data/levels'

export function getLevels() {
  return levels
}

export function getLevelById(id: string) {
  return levels[id]
}
