import { NavigationButton } from '@components/common/navigation-button'
import { NextPageButton } from '@components/common/next-page-button'
import { DialogContainer } from '@components/dialog/dialog-container'
import { DialogFooter } from '@components/dialog/dialog-footer'
import { DialogHeader } from '@components/dialog/dialog-header'
import { DialogTitle } from '@components/dialog/dialog-title'
import { CleanLayout } from '@components/layouts/clean-layout'
import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'

export default function Welcome({ text }: { text: string }) {
  const ogImageUrl = `https://empareja-las-cartas-og-image.carlos-fernandez-cabrero.workers.dev/?text=${text}`

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@carlosfdez_dev" />
        <meta name="twitter:creator" content="@carlosfdez_dev" />
        <meta
          name="twitter:title"
          content="Empareja las cartas - Juego para entrenar la memoria"
        />
        <meta
          name="twitter:description"
          content="¡Pásatelo bien jugando mientras que entrenas la memoria a traves de un divertido juego de emparejar cartas!"
        />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>

      <CleanLayout>
        <DialogContainer>
          <DialogHeader>
            <DialogTitle>¡Bienvenido!</DialogTitle>
          </DialogHeader>

          <div>
            <h2 className="font-semibold mb-2">¿Como se juega?</h2>
            <p>
              Se trata de dar la vuelta a las cartas y recordar donde esta cada
              una para emparejarlas. Si la pareja es correcta, las cartas se
              quedan descubiertas. Si no, se vuelven a tapar. Tenga en cuenta
              que dependiendo de el nivel de dificultad que elija tendrá mas o
              menos tiempo para emparejar todas las cartas. Solo podrá ganar si
              empareja todas las cartas antes de que se acabe el tiempo.
            </p>
          </div>

          <DialogFooter>
            <NavigationButton url="/menu/level">
              <NextPageButton />
            </NavigationButton>
          </DialogFooter>
        </DialogContainer>
      </CleanLayout>
    </>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { text } = query
  const textValue = text ?? ''

  return {
    props: {
      text: textValue
    }
  }
}
