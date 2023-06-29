import { getImages } from '@/services/images'
import type { GameImages } from '@/types'
import { WinDialog } from '@components/dialogs/win-dialog'
import { CardsPanel } from '@components/game-board/cards-panel'
import { Header as BoardHeader } from '@components/game-board/header'
import { LayoutWithHeaderAndPreloadImages } from '@components/layouts/layout-with-header-and-preload-images'
import { usePairedCards } from '@hooks/usePairedCards'
import { useTimer } from '@hooks/useTimer'
import { useEffect, useState } from 'react'

export default function Game({ images, originalImages }: GameImages) {
  const timer = useTimer()
  const { pairedCards, addPairedCard, resetPairedCards } = usePairedCards(
    images.length,
    timer.clearTimer
  )

  const [errors, setErrors] = useState<number>(0)
  const [currentImages, setCurrentImages] = useState<string[]>([])

  useEffect(() => {
    setCurrentImages(images)
  }, [])

  function resetGame() {
    resetPairedCards()
    const { images } = getImages()
    setCurrentImages(images)
    timer.restartTimer()
    timer.startTimer()
    setErrors(0)
  }

  return (
    <LayoutWithHeaderAndPreloadImages images={originalImages}>
      <BoardHeader timeConsumed={timer.time} errors={errors} />

      <CardsPanel
        handleGuessCard={addPairedCard}
        images={currentImages}
        pairedCards={pairedCards}
        setErrors={setErrors}
      />

      {pairedCards.length === currentImages.length && (
        <WinDialog
          timeTaken={timer.time}
          tryAgainAction={resetGame}
          errors={errors}
        />
      )}
    </LayoutWithHeaderAndPreloadImages>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      ...getImages()
    }
  }
}
