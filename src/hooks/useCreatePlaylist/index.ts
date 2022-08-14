import AsyncRetry from 'async-retry'
import { queryState } from 'atoms/query'
import { setlistsState } from 'atoms/setlists'
import useSpotify from 'hooks/useSpotify'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRecoilState } from 'recoil'

export const useCreatePlaylist = () => {
  const spotify = useSpotify()
  const [, setQuery] = useRecoilState(queryState)
  const [setlists, setSetlists] = useRecoilState(setlistsState)
  const { data: session } = useSession()

  const createPlaylist = async (playlistName: string) => {
    setQuery('')

    const {
      body: { id }
    } = await spotify.createPlaylist(playlistName, {
      description: `My ${playlistName} setlist created with Lemonade app 🦆 (https://spotlist-eta.vercel.app)`,
      public: true
    })

    const totalTracks: number[] = []
    const trackIds: string[] = []

    setlists.map(async (a) => {
      a.sets.set.map(async (s) => {
        totalTracks.push(s.song.length)

        s.song.map(async (s) => {
          const {
            body: { tracks: items }
          } = await spotify.searchTracks(
            `track:${s.name} artist:${a.artist.name}`,
            {
              market: session?.user?.profile.country
            }
          )

          const trackId = items?.items[0]?.uri

          if (trackId) {
            trackIds.push(trackId)
          }
        })
      })
    })

    const totalLength = totalTracks.reduce((a, b) => a + b, 0)

    try {
      toast.promise(
        AsyncRetry(
          async () => await spotify.addTracksToPlaylist(id, trackIds),
          {
            retries: 3
          }
        ),
        {
          loading: 'Oh you got a great taste, creating your setlist... 🤩',
          success: `Your setlist was created successfully! with ${totalLength} songs 🎉`,
          error: 'Something went wrong, try again... 😞'
        }
      )
    } catch (error) {
      return
    }

    setSetlists([])
  }

  return createPlaylist
}
