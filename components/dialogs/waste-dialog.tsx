import { DialogContainer } from '@components/dialog/dialog-container'
import { DialogFooter } from '@components/dialog/dialog-footer'
import { DialogHeader } from '@components/dialog/dialog-header'
import { DialogTitle } from '@components/dialog/dialog-title'
import { Button } from '@components/html-components/button'

interface Props {
  tryAgainAction: () => void
}

export function WasteDialog({ tryAgainAction }: Props) {
  return (
    <DialogContainer size="small">
      <DialogHeader type="center">
        <DialogTitle accent="danger">¡Has perdido!</DialogTitle>
      </DialogHeader>

      <DialogFooter>
        <Button tryAgainAction={tryAgainAction}>Volver a jugar</Button>
      </DialogFooter>
    </DialogContainer>
  )
}
