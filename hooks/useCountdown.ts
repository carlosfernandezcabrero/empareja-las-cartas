import { useEffect, useRef, useState } from 'react'

interface ReturnObject {
  time: number
  resetTimer: () => void
  setTime: (time: number) => void
  clearTimer: () => void
  resetAndStartTimer: () => void
  startTimer: () => void
}

export function useCountdown(initialTimeInMilliseconds: number): ReturnObject {
  const [time, setTime] = useState<number>(initialTimeInMilliseconds)
  const timerRef = useRef<NodeJS.Timer>()

  useEffect(() => startTimer(), [])

  useEffect(() => {
    if (time < 0) clearInterval(timerRef.current)
  }, [time])

  useEffect(() => {
    return () => clearTimer()
  }, [timerRef])

  function startTimer() {
    timerRef.current = setInterval(
      () => setTime((actualTime) => actualTime - 1_000),
      1_000
    )
  }

  function resetTimer() {
    setTime(initialTimeInMilliseconds)
  }

  function clearTimer() {
    clearInterval(timerRef.current)
  }

  function resetAndStartTimer() {
    resetTimer()
    startTimer()
  }

  return {
    time,
    resetTimer,
    setTime,
    clearTimer,
    resetAndStartTimer,
    startTimer
  }
}
