import { Twitter } from '@components/icons/twitter'
import Link from 'next/link'

interface Props {
  message: string
  text: string
  size?: string
}

const STYLES: Record<string, string> = {
  default: 'text-lg',
  small: 'text-base'
}

export function TwitterButton({ message, text, size = 'default' }: Props) {
  const twitterShareUrl = encodeURI(
    `https://twitter.com/intent/tweet?url=https://empareja-las-cartas.vercel.app?text=${text}&text=${message}`
  )

  return (
    <Link
      href={twitterShareUrl}
      target="_blank"
      rel="noreferrer"
      className={`${STYLES[size]} bg-[#1DA1F2] flex items-center gap-x-2 rounded-full px-6 py-1.5 text-white font-medium shadow-sm hover:brightness-90`}
    >
      {size === 'default' && <Twitter width="w-6" height="h-6" />}
      {size === 'small' && <Twitter width="w-5" height="h-5" />}
      <span className="flex-1">Compartir en Twitter</span>
    </Link>
  )
}
