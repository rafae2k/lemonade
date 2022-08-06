import { useQuery } from '@tanstack/react-query'
import useDebounce from 'hooks/useDebounce'
import useSpotify from 'hooks/useSpotify'

export type Artist = {
  name: string
  id: string
  images: Array<{
    url: string
    height: number
    width: number
  }>
  genres: Array<string>
}

export type ArtistsResponse = {
  items: Artist[]
  limit: number
  next: string
  offset: number
  total: number
}

export type ArtistSearchResponse = {
  body: ArtistsResponse
  statusCode: number
}

export const useArtistAutocomplete = (input: string) => {
  const spotify = useSpotify()
  const debouncedValue = useDebounce(input, 500)

  const { isLoading, data, error, refetch } = useQuery<ArtistsResponse, Error>(
    ['get-artist-autocomplete', debouncedValue],
    async () => {
      const res: any = await spotify.searchArtists(debouncedValue)
      return res.body.artists as ArtistsResponse
    },
    {
      enabled: !!debouncedValue,
      retry: false
    }
  )

  return { isLoading, data, refetch, error }
}
