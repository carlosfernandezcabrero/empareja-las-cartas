import { getLevels } from '@/services/levels'
import { NavigationButton } from '@components/common/navigation-button'
import { PreviousPageButton } from '@components/common/previous-page-button'
import { DialogContainer } from '@components/dialog/dialog-container'
import { DialogFooter } from '@components/dialog/dialog-footer'
import { DialogHeader } from '@components/dialog/dialog-header'
import { DialogTitle } from '@components/dialog/dialog-title'
import { CleanLayout } from '@components/layouts/clean-layout'
import type { LevelProperties } from '@types'
import Link from 'next/link'

interface Props {
  levels: Record<string, LevelProperties>
}

export default function Level({ levels }: Props) {
  return (
    <CleanLayout>
      <DialogContainer>
        <DialogHeader>
          <DialogTitle>Nivel de dificultad</DialogTitle>
          <p className="mt-1.5">
            Escoga el nivel de dificultad con el que jugar
          </p>
        </DialogHeader>

        <div className="flex flex-col items-center gap-y-4">
          {Object.entries(levels).map(([key, { name }]) => (
            <Link
              key={key}
              href={`/game?levelId=${key}`}
              className="border-2 border-gray-900 w-full rounded-xl text-center px-4 py-1.5 hover:bg-indigo-100 active:press-animation"
            >
              {name}
            </Link>
          ))}
        </div>

        <DialogFooter>
          <NavigationButton url="/menu">
            <PreviousPageButton />
          </NavigationButton>
        </DialogFooter>
      </DialogContainer>
    </CleanLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      levels: getLevels()
    }
  }
}
