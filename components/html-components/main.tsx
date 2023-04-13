interface Props {
  children: React.ReactNode
}

export function Main({ children }: Props) {
  return (
    <main role="main" className="px-4">
      {children}
    </main>
  )
}
