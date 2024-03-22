/* eslint-disable @next/next/no-html-link-for-pages */
import { useUser } from '@auth0/nextjs-auth0/client'
import { NavigationButton } from '@components/common/navigation-button'
import { PreviousPageButton } from '@components/common/previous-page-button'
import { DialogContainer } from '@components/dialog/dialog-container'
import { DialogDescription } from '@components/dialog/dialog-description'
import { DialogFooter } from '@components/dialog/dialog-footer'
import { DialogHeader } from '@components/dialog/dialog-header'
import { DialogItem } from '@components/dialog/dialog-item'
import { DialogTitle } from '@components/dialog/dialog-title'
import { CleanLayout } from '@components/layouts/clean-layout'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SignIn() {
  const { push } = useRouter()
  const { user, isLoading } = useUser()

  useEffect(() => {
    if (user && !isLoading) push('/game')
  }, [isLoading, user])

  return (
    <CleanLayout>
      <DialogContainer>
        <DialogHeader>
          <DialogTitle>Iniciar Sesión</DialogTitle>
          <DialogDescription>
            Elige si quieres iniciar sesión para guardar sus puntuaciones
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-y-4">
          <a href="/api/auth/login">
            <DialogItem>Continuar</DialogItem>
          </a>
          <Link href="/game">
            <DialogItem>No iniciar sesión</DialogItem>
          </Link>
        </div>

        <DialogFooter>
          <NavigationButton url="/">
            <PreviousPageButton />
          </NavigationButton>
        </DialogFooter>
      </DialogContainer>
    </CleanLayout>
  )
}
