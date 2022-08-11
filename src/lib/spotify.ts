import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private'
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
