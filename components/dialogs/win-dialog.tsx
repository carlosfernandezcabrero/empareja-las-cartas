import { getTimeFormatted } from '@/utils/dates'
import { DialogContainer } from '@components/dialog/dialog-container'
import { DialogFooter } from '@components/dialog/dialog-footer'
import { DialogHeader } from '@components/dialog/dialog-header'
import { DialogTitle } from '@components/dialog/dialog-title'
import { Button } from '@components/html-components/button'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { TwitterButton } from '../common/twitter-button'

interface Props {
  timeTaken: number
  tryAgainAction: () => void
}

const messageTwitter = `¡He completado el juego!

¿Tu también quieres jugar?
Empieza ya ⬇️

`

export function WinDialog({ timeTaken, tryAgainAction }: Props) {
  const timeTakenFormatted = getTimeFormatted(timeTaken)
  const { data: sessionData } = useSession()

  useEffect(() => {
    fetch('/api/save-score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: sessionData?.user?.name,
        data: {
          avatar: sessionData?.user?.image,
          score: timeTaken
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
