import { getTimeFormatted } from '@/utils/dates'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

interface Props {
  timeConsumed: number
  errors: number
}

export function Header({ timeConsumed, errors }: Props) {
  const { data: sessionData } = useSession()
  const user = sessionData?.user

  const handleLogout = () => {
    signOut({ callbackUrl: '/menu/signin' })
  }

  return (
    <header className="mb-12 mt-6">
      {sessionData && (
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-x-4">
          <Image
            src={user?.image as string}
            width={60}
            height={60}
            alt="Avatar"
            className="rounded-full"
          />
          <div className="mt-1 sm:mt-0">
            <p className="text-color-body text-xl text-black">{user?.name}</p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white rounded-md px-1.5 text-base font-medium hover:bg-red-600"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-around sm:justify-center sm:gap-x-24">
        <div className="text-center">
          <p className="text-color-body text-xl font-bold">Tiempo</p>
          <p className="text-color-body">{getTimeFormatted(timeConsumed)}</p>
        </div>
        <div className="text-center">
          <p className="text-color-body text-xl font-bold">Errores</p>
          <p className="text-color-body">{errors}</p>
        </div>
      </div>
    </header>
  )
}
