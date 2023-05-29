import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...pagePropsRest } = pageProps

  return (
    <SessionProvider session={session}>
      <Component {...pagePropsRest} />
    </SessionProvider>
  )
}
