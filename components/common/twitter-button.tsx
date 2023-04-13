import { Twitter } from '@components/icons/twitter'
import { useRouter } from 'next/router'

interface Props {
  message: string
  subText: string
  size?: string
}

const STYLES: Record<string, string> = {
  default: 'text-lg',
  small: 'text-base'
}

export function TwitterButton({ message, subText, size = 'default' }: Props) {
  const router = useRouter()

  function handleClick() {
    const urlOgImagePage = new URL('/', window.location.origin)
    urlOgImagePage.searchParams.set('text', subText)

    const urlTwitter = new URL('https://twitter.com/intent/tweet')
    urlTwitter.searchParams.set('text', message)
    urlTwitter.searchParams.set('url', urlOgImagePage.toString())

    router.push(urlTwitter)
  }

  return (
    <button
      onClick={handleClick}
      className={`${STYLES[size]} bg-[#1DA1F2] flex items-center gap-x-2 rounded-full px-6 py-1.5 text-white font-medium shadow-sm hover:brightness-90`}
    >
      {size === 'default' && <Twitter width="w-6" height="h-6" />}
      {size === 'small' && <Twitter width="w-5" height="h-5" />}
      <span className="flex-1">Compartir en Twitter</span>
    </button>
  )
}
