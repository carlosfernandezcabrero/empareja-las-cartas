/* eslint-disable @next/next/no-html-link-for-pages */
import { getTimeFormatted } from '@/utils/dates'
import { useUser } from '@auth0/nextjs-auth0/client'
import Image from 'next/image'

interface Props {
  timeConsumed: number
  errors: number
}

export function Header({ timeConsumed, errors }: Props) {
  const { user, isLoading } = useUser()

  return (
    <header className="mb-12 mt-6">
      {!isLoading && (
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-x-4">
          <Image
            src={user?.picture as string}
            width={60}
            height={60}
            alt="Avatar"
            className="rounded-full"
          />
          <div className="mt-1 sm:mt-0">
            <p className="text-color-body text-xl text-black">{user?.name}</p>
            <a
              href="/api/auth/logout"
              className="bg-red-500 text-white rounded-md px-1.5 text-base font-medium hover:bg-red-600"
            >
              Cerrar Sesión
            </a>
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
