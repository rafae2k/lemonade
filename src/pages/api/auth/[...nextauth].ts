import spotifyApi, { LOGIN_URL } from 'lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { Account, NextAuthOptions, User } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

const refreshAccessToken = async (token: Account) => {
  try {
    // @ts-ignore
    spotifyApi.setRefreshToken(token.refreshToken as string)

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken()

    // @ts-ignore
    spotifyApi.setAccessToken(refreshedToken.access_token)

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken
    }
  } catch (error) {
    return {
      ...token,
      error
    }
  }
}

const options: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: LOGIN_URL
    })
  ],
  secret: process.env.JWT_SECRET as string,
  callbacks: {
    async jwt(token) {
      if (token.account && token.user) {
        spotifyApi.setAccessToken(token.account.access_token as string)

        const expiresAt = token.account.expires_at * 1000

        return {
          accessToken: token.account.access_token,
          accessTokenExpires: token.account.expires_at,
          refreshToken: token.account.refresh_token,
          user: {
            ...token.user,
            profile: token.profile
          }
        }
      }

      if (
        token.token.expires_at === null ||
        Date.now() < token.token.expires_at
      ) {
        return token
      }

      return await refreshAccessToken(token.token)
    },

    async session({ session, token }) {
      session.user = token.user
      session.accessToken = token.accessToken
      session.error = token.error

      return session
    }
  }
}

const SpotifyAuth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default SpotifyAuth

type AuthToken = {
  accessToken: string
  accessTokenExpires: number | null
  refreshToken: string | null
  user: {
    id: string
    name: string
    email: string
    image: string
  }
  iat: number
  exp: number
  jti: string
}

type AccountAuth = {
  provider: 'spotify'
  type: 'oauth'
  providerAccountId: string
  access_token: string
  token_type: 'Bearer'
  expires_at: number
  refresh_token: string
  scope: string
}

type JWTResponse = {
  token: AuthToken
  user: User
  account: AccountAuth
}
