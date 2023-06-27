import { useEffect, useRef, useState } from 'react'

interface ReturnObject {
  time: number
  setTime: (time: number) => void
  startTimer: () => void
  clearTimer: () => void
  restartTimer: () => void
}

export function useTimer(): ReturnObject {
  const [time, setTime] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timer>()

  useEffect(() => startTimer(), [])

  useEffect(() => {
    return () => clearTimer()
  }, [timerRef])

  function startTimer() {
    timerRef.current = setInterval(
      () => setTime((actualTime) => actualTime + 1_000),
      1_000
    )
  }

  const clearTimer = () => clearInterval(timerRef.current)
  const restartTimer = () => setTime(0)

  return {
    time,
    setTime,
    startTimer,
    clearTimer,
    restartTimer
  }
}
