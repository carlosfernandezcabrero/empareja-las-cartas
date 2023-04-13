import { useSelectedCards } from '@/hooks/hooks/useSelectedCards'
import { useEffect } from 'react'
import { Card } from './card'

interface Props {
  images: string[]
  pairedCards: string[]
  handleGuessCard: (cardA: string, cardB: string) => void
}

export function CardsPanel({ images, pairedCards, handleGuessCard }: Props) {
  const { selectedCards, itFailed, addSelectedCard, resetSelectedCards } =
    useSelectedCards(handleGuessCard)

  useEffect(() => {
    if (pairedCards.length === 0) resetSelectedCards()
  }, [pairedCards])

  return (
    <section className="flex justify-center">
      <div className="columns-4 gap-x-[15px] sm:columns-5 sm:gap-x-[28px]">
        {images.map((image) => {
          const isPaired = pairedCards.includes(image)
          const isSelected = selectedCards.includes(image)
          const isFlipped = isSelected || isPaired
          const imageUrl = isFlipped ? image.substring(2) : 'search.svg'

          return (
            <Card
              key={image}
              url={`/images/${imageUrl}`}
              setSelected={() => addSelectedCard(image)}
              isFlipped={isFlipped}
              isDisabled={isSelected || selectedCards.length === 2}
              isCorrect={isPaired}
              isNotCorrect={itFailed && isSelected}
              isNotHighlighted={itFailed && !isSelected}
            />
          )
        })}
      </div>
    </section>
  )
}
