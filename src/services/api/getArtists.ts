import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
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

  const fetchArtists = async (value: string, offset: number) => {
    const res: any = await spotify.searchArtists(value, {
      limit: 10,
      offset
    })
    return res.body.artists as ArtistsResponse
  }

  const options = {
    enabled: !!debouncedValue,
    retry: false
  }

  const { isLoading, data, error, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['get-artist-autocomplete', debouncedValue],
      async (offset) => await fetchArtists(debouncedValue, offset.pageParam),
      {
        ...options,
        getNextPageParam: (lastPage) => {
          const offset = lastPage.offset + 20
          if (lastPage.total > offset) {
            return offset
          }
          return undefined
        }
      }
    )

  return { isLoading, data, refetch, error, fetchNextPage, hasNextPage }
}
