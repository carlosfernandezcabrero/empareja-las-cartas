import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function DialogFooter({ children }: Props) {
  return (
    <footer className="mt-14 flex items-center justify-center gap-x-4">
      {children}
    </footer>
  )
}
