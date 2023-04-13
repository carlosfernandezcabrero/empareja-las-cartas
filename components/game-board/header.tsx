import { getTimeFormatted } from '@/utils/dates'

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
  let timeCounterState: string

  if (timeLeftInMilliseconds >= 61_000) {
    timeCounterState = 'default'
  } else if (timeLeftInMilliseconds < 31_000) {
    timeCounterState = 'danger'
  } else {
    timeCounterState = 'warning'
  }

  return (
    <header className="mb-12 flex justify-around sm:justify-center sm:gap-x-24">
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
    </header>
  )
}
