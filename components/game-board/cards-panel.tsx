import { useSelectedCards } from '@hooks/useSelectedCards'
import { useEffect, type Dispatch, type SetStateAction } from 'react'
import { Card } from './card'

interface Props {
  images: string[]
  pairedCards: string[]
  handleGuessCard: (cardA: string, cardB: string) => void
  setErrors: Dispatch<SetStateAction<number>>
}

export function CardsPanel({
  images,
  pairedCards,
  handleGuessCard,
  setErrors
}: Props) {
  const { selectedCards, itFailed, addSelectedCard, resetSelectedCards } =
    useSelectedCards(handleGuessCard)

  useEffect(() => {
    if (pairedCards.length === 0) resetSelectedCards()
  }, [pairedCards])

  useEffect(() => {
    if (itFailed) setErrors((errors) => errors + 1)
  }, [itFailed])

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
