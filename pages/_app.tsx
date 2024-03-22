import '@/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...pagePropsRest } = pageProps

  return (
    <UserProvider>
      <Component {...pagePropsRest} />
    </UserProvider>
  )
}
