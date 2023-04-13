import Link from 'next/link'

interface Props {
  children: React.ReactNode
  url: string
  type?: string
  form?: string
}

const stylesColors: Record<string, string> = {
  default:
    'border-2 border-indigo-600 bg-indigo-600 hover:border-indigo-800 hover:bg-indigo-800 text-white',
  secondary: 'border-2 border-indigo-600 text-indigo-600'
}

const stylesForm: Record<string, string> = {
  default: 'rounded-full p-0.5',
  block: 'rounded-md p-2'
}

export function NavigationButton({
  children,
  url,
  type = 'default',
  form = 'default'
}: Props) {
  return (
    <Link
      href={url}
      className={`shadow-md active:press-animation ${stylesColors[type]} ${stylesForm[form]}`}
    >
      {children}
    </Link>
  )
}
