export const ONE_SECOND = 1_000

export const getTimeFormatted = (time: number): string =>
  new Intl.DateTimeFormat('es-ES', {
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date(time))

export const minutesToMilliseconds = (minutes: number): number =>
  minutes * 60 * ONE_SECOND
