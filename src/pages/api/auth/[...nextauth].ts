import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

const options = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.displayName,
          email: profile.email,
          picture: profile.photos[0].value,
          raw: profile
        }
      }
    })
  ]
}

const SpotifyAuth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default SpotifyAuth
