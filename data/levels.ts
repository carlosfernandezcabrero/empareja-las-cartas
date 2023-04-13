import type { LevelProperties } from '@/types'

const levels: Record<string, LevelProperties> = {
  prueba: {
    name: 'Prueba',
    timeLeft: 300000
  },
  facil: {
    name: 'Fácil',
    timeLeft: 180000
  },
  intermedio: {
    name: 'Intermedio',
    timeLeft: 120000
  },
  dificil: {
    name: 'Difícil',
    timeLeft: 90000
  },
  extremo: {
    name: 'Extremo',
    timeLeft: 70000
  }
}

export default levels
