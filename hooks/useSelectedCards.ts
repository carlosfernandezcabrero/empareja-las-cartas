import { useEffect, useState } from 'react'

type handlesGuessCardType = (cardA: string, cardB: string) => void

export function useSelectedCards(handleGuessCard: handlesGuessCardType) {
  const [selectedCards, setSelectedCards] = useState<string[]>([])
  const [itFailed, setItFailed] = useState(false)

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards
      const firstCardUrl = firstCard.substring(2)
      const secondCardUrl = secondCard.substring(2)

      if (firstCardUrl !== secondCardUrl) {
        setItFailed(true)

        const timeoutId = setTimeout(() => {
          resetSelectedCards()
          setItFailed(false)
          clearTimeout(timeoutId)
        }, 1_200)

        return
      }

      handleGuessCard(firstCard, secondCard)
      resetSelectedCards()
    }
  }, [selectedCards])

  const resetSelectedCards = () => setSelectedCards([])
  const addSelectedCard = (card: string) =>
    setSelectedCards([...selectedCards, card])

  return { selectedCards, itFailed, resetSelectedCards, addSelectedCard }
}
