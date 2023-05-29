import { NavigationButton } from '@/components/common/navigation-button'
import { PreviousPageButton } from '@/components/common/previous-page-button'
import { DialogContainer } from '@/components/dialog/dialog-container'
import { DialogDescription } from '@/components/dialog/dialog-description'
import { DialogFooter } from '@/components/dialog/dialog-footer'
import { DialogHeader } from '@/components/dialog/dialog-header'
import { DialogItem } from '@/components/dialog/dialog-item'
import { DialogTitle } from '@/components/dialog/dialog-title'
import { GitHub } from '@/components/icons/github'
import { CleanLayout } from '@/components/layouts/clean-layout'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function SignIn() {
  const handleSignIn = () => signIn()

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
          <button onClick={handleSignIn}>
            <DialogItem>
              <GitHub width="w-6" height="h-6" />
              GitHub
            </DialogItem>
          </button>
          <Link href="/menu/level">
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
