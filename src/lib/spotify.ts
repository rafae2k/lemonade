import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'ugc-image-upload',
  'user-follow-modify',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-read-email',
  'user-read-private',
  'user-follow-modify',
  'user-follow-read'
].join(',')

const params = {
  scope: scopes
}

const queryParamsString = new URLSearchParams(params).toString()

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString}`

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
})

export default spotifyApi
