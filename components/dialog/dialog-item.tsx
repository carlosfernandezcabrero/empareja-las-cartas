interface DialogItemProps {
  children: React.ReactNode
}

export function DialogItem({ children }: DialogItemProps) {
  return (
    <span className="border-2 border-gray-900 w-full rounded-xl text-center px-4 py-1.5 hover:bg-indigo-100 active:press-animation cursor-pointer flex items-center gap-x-2 justify-center">
      {children}
    </span>
  )
}
