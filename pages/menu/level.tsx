import { getLevels } from '@/services/levels'
import { NavigationButton } from '@components/common/navigation-button'
import { PreviousPageButton } from '@components/common/previous-page-button'
import { DialogContainer } from '@components/dialog/dialog-container'
import { DialogDescription } from '@components/dialog/dialog-description'
import { DialogFooter } from '@components/dialog/dialog-footer'
import { DialogHeader } from '@components/dialog/dialog-header'
import { DialogItem } from '@components/dialog/dialog-item'
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
          <DialogDescription>
            Escoga el nivel de dificultad con el que jugar
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-y-4">
          {Object.entries(levels).map(([key, { name }]) => (
            <Link key={key} href={`/game?levelId=${key}`}>
              <DialogItem>{name}</DialogItem>
            </Link>
          ))}
        </div>

        <DialogFooter>
          <NavigationButton url="/menu/signin">
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
