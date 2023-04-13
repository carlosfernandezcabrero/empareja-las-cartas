import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  type?: 'default' | 'center'
}

const styles = {
  default: 'text-left',
  center: 'text-center'
}

export function DialogHeader({ children, type = 'default' }: Props) {
  return <header className={`mb-7 ${styles[type]}`}>{children}</header>
}
