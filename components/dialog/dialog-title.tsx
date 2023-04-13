import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  accent?: string
}

const styles: Record<string, string> = {
  default: 'text-sky-700',
  danger: 'text-red-600',
  success: 'text-green-600'
}

export function DialogTitle({ children, accent = 'default' }: Props) {
  return (
    <h1 className={`text-4xl tracking-tight font-bold ${styles[accent]}`}>
      {children}
    </h1>
  )
}
