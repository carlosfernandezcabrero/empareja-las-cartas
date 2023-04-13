interface Props {
  children: React.ReactNode
  tryAgainAction: () => void
}

export function Button({ children, tryAgainAction }: Props) {
  return (
    <button
      className="font-medium py-2 px-4 rounded text-lg bg-indigo-600 hover:bg-indigo-800 text-white active:press-animation"
      onClick={tryAgainAction}
    >
      {children}
    </button>
  )
}
