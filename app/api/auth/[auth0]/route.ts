import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0'

export const GET = handleAuth({
  login: handleLogin({ returnTo: '/game' }),
  logout: handleLogout({ returnTo: '/menu/signin' })
})
