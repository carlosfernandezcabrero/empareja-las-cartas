import { TwitterButton } from '@components/common/twitter-button'
import { HomeIcon } from '@components/icons/home'
import { useRouter } from 'next/router'

const messageTwitter = `¡Juega a emparejar las cartas mientras que entrenas tu memoria! 🃏🧠

Empieza ya ⬇️

`

export function Header() {
  const router = useRouter()

  function handleClickHome(): void {
    router.push('/menu')
  }

  return (
    <header className="text-center pt-8 pb-4 flex justify-center items-center px-6 flex-col gap-y-4 gap-x-10 lg:flex-row">
      <div className="flex-1 flex items-center justify-start">
        <button
          className="text-gray-900 bg-sky-100 hover:bg-sky-300 border-2 active:press-animation border-black rounded-md p-2"
          onClick={handleClickHome}
        >
          <HomeIcon width="w-9" height="h-9" />
        </button>
      </div>
      <h1 className="text-5xl text-[#112d4e] font-semibold tracking-tight">
        Empareja las cartas
      </h1>
      <div className="flex-1 flex justify-end">
        <TwitterButton
          message={messageTwitter}
          text="Pon a prueba tu memoria"
        />
      </div>
    </header>
  )
}
