import { useCountdown } from '@/hooks/hooks/useCountdown'
import { usePairedCards } from '@/hooks/hooks/usePairedCards'
import { getImages } from '@/services/images'
import { getLevelById } from '@/services/levels'
import { WasteDialog } from '@components/dialogs/waste-dialog'
import { WinDialog } from '@components/dialogs/win-dialog'
import { CardsPanel } from '@components/game-board/cards-panel'
import { Header as BoardHeader } from '@components/game-board/header'
import { LayoutWithHeaderAndPreloadImages } from '@components/layouts/layout-with-header-and-preload-images'
import type { LevelPropertiesWithImages } from '@types'
import type { GetServerSidePropsContext } from 'next'

export default function Game({
  timeLeft,
  images,
  originalImages,
  name
}: LevelPropertiesWithImages) {
  const timer = useCountdown(timeLeft)
  const { pairedCards, addPairedCard, resetPairedCards } = usePairedCards(
    images.length,
    timer.clearTimer
  )

  function resetGame() {
    resetPairedCards()
    timer.resetAndStartTimer()
  }

  return (
    <LayoutWithHeaderAndPreloadImages images={originalImages}>
      <BoardHeader timeLeftInMilliseconds={timer.time} levelName={name} />

      <CardsPanel
        handleGuessCard={addPairedCard}
        images={images}
        pairedCards={pairedCards}
      />

      {pairedCards.length === images.length && (
        <WinDialog
          timeTaken={timeLeft - timer.time}
          tryAgainAction={resetGame}
        />
      )}
      {timer.time < 0 && <WasteDialog tryAgainAction={resetGame} />}
    </LayoutWithHeaderAndPreloadImages>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  return {
    props: {
      ...getLevelById(query.levelId as string),
      ...getImages()
    }
  }
}
