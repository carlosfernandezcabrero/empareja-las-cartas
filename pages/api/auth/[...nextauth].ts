import NextAuth from 'next-auth'
import Auth0Provider from 'next-auth/providers/auth0'

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID as string,
      clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
      issuer: process.env.AUTH0_ISSUER
    })
  ]
}
export default NextAuth(authOptions)
