import { getTimeFormatted } from '@/utils/dates'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

interface Props {
  timeLeftInMilliseconds: number
  levelName: string
}

const TIME_LEFT_STYLES: Record<string, string> = {
  default: 'text-color-body',
  warning: 'text-red-600 font-bold',
  danger: 'text-red-600 font-bold blink-animation'
}

export function Header({ timeLeftInMilliseconds, levelName }: Props) {
  const { data: sessionData } = useSession()

  let timeCounterState: string
  if (timeLeftInMilliseconds >= 61_000) {
    timeCounterState = 'default'
  } else if (timeLeftInMilliseconds < 31_000) {
    timeCounterState = 'danger'
  } else {
    timeCounterState = 'warning'
  }

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
            {/* <p className="text-gray-600 text-lg font-bold text-center sm:text-left">
              # Posición: 12
            </p> */}
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
          <p className="text-color-body text-xl font-bold">Nivel</p>
          <p className="text-color-body">{levelName}</p>
        </div>

        <div className="text-center">
          <p className="text-color-body text-xl font-bold">Tiempo</p>
          <p className={TIME_LEFT_STYLES[timeCounterState]}>
            {timeLeftInMilliseconds < 0
              ? '--:--'
              : getTimeFormatted(timeLeftInMilliseconds)}
          </p>
        </div>
      </div>
    </header>
  )
}
