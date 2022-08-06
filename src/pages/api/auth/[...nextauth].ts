import spotifyApi, { LOGIN_URL } from 'lib/spotify'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { Account, NextAuthOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

const refreshAccessToken = async (token: Account) => {
  try {
    // @ts-ignore
    spotifyApi.setAccessToken(token.access_token)
    // @ts-ignore
    spotifyApi.setRefreshToken(token.refresh_token as string)

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken()

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refresh_token
    }
  } catch (error) {
    console.error(error)
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
    async jwt({ token, user, account }) {
      if (account && user) {
        spotifyApi.setAccessToken(account.access_token as string)

        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user
        }
      }

      if (Date.now() < token.accessTokenExpires) {
        return token
      }

      return refreshAccessToken(account)
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
