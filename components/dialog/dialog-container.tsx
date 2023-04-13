import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  size?: string
}

const styles: Record<string, string> = {
  default: 'max-w-xl mx-auto',
  small: 'max-w-lg mx-auto'
}

export function DialogContainer({ children, size = 'default' }: Props) {
  return (
    <section className="absolute left-0 top-0 w-full h-full bg-gray-900/25 px-2">
      <div
        className={`${styles[size]} border-2 border-black bg-white relative top-16 rounded-xl px-5 py-10 shadow-md`}
      >
        {children}
      </div>
    </section>
  )
}
