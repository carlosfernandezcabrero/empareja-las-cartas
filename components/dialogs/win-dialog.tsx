import { getTimeFormatted } from '@/utils/dates'
import { calculatePointers } from '@/utils/leaderboard'
import { useUser } from '@auth0/nextjs-auth0/client'
import { DialogContainer } from '@components/dialog/dialog-container'
import { DialogFooter } from '@components/dialog/dialog-footer'
import { DialogHeader } from '@components/dialog/dialog-header'
import { DialogTitle } from '@components/dialog/dialog-title'
import { Button } from '@components/html-components/button'
import { useEffect } from 'react'
import { TwitterButton } from '../common/twitter-button'

interface Props {
  timeTaken: number
  errors: number
  tryAgainAction: () => void
}

const messageTwitter = `¡He completado el juego!

¿Tu también quieres jugar?
Empieza ya ⬇️

`

export function WinDialog({ timeTaken, errors, tryAgainAction }: Props) {
  const timeTakenFormatted = getTimeFormatted(timeTaken)
  const { user } = useUser()

  useEffect(() => {
    if (timeTaken === 0) return

    fetch('/api/save-score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user?.name,
        data: {
          avatar: user?.picture,
          score: calculatePointers(timeTaken, errors)
        }
      })
    })
  }, [timeTaken])

  return (
    <DialogContainer size="small">
      <DialogHeader type="center">
        <DialogTitle accent="success">¡Felicidades!</DialogTitle>
      </DialogHeader>
      <div className="text-center">
        <p>Tiempo tardado en resolver el nivel</p>
        <p className="text-5xl font-bold text-[#444]">{timeTakenFormatted}</p>
        <div className="flex justify-center mt-7">
          <TwitterButton
            size="small"
            message={messageTwitter}
            text={`Tiempo tardado: ${timeTakenFormatted}`}
          />
        </div>
      </div>
      <DialogFooter>
        <Button tryAgainAction={tryAgainAction}>Volver a jugar</Button>
      </DialogFooter>
    </DialogContainer>
  )
}
