import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'

export function usePairedCards(numImages: number, clearTimer: () => void) {
  const [pairedCards, setPairedCards] = useState<string[]>([])

  useEffect(() => {
    if (pairedCards.length === numImages) {
      clearTimer()
      void confetti({
        particleCount: 300 as number
      })
    }
  }, [pairedCards])

  const addPairedCard = (cardA: string, cardB: string) =>
    setPairedCards([...pairedCards, cardA, cardB])
  const resetPairedCards = () => setPairedCards([])

  return { pairedCards, addPairedCard, resetPairedCards }
}
