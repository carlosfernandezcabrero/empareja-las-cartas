import { Github } from '@components/icons/github'

export function Footer() {
  return (
    <footer className="pt-32 pb-8 text-lg font-medium text-gray-700">
      <p className="text-center">Hecha por Carlos Fernandez Cabrero 🚀</p>
      <ul className="mt-2 flex items-center justify-center">
        <li>
          <a
            href="https://github.com/carlosfernandezcabrero/Y2K38"
            className="flex flex-col items-center"
          >
            <Github />
            <span className="font-medium text-lg">GitHub</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}
