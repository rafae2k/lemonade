import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useDebounce from 'hooks/useDebounce'

const INTERNAL_SETLIST_BASE_URL = '/api'

const api = axios.create({
  baseURL: INTERNAL_SETLIST_BASE_URL
})

export type Set = {
  song: Array<{
    name: string
    info: 'acoustic'
  }>
}

type Artist = {
  name: string
}

export type Setlist = {
  id: string
  artist: Artist
  eventDate: string
  sets: {
    set: Set[]
  }
  tour: {
    name: string
  }
  venue: {
    city: {
      name: string
      state: string
      country: {
        code: string
      }
    }
    name: string
  }
}

export type SetlistResponse = {
  itemsPerPage: number
  page: number
  setlist: Setlist[]
  total: number
}

const getSetlists = async (artistName: string, page = 1) => {
  const res = await api.get<SetlistResponse>(
    `/setlist?artistName=${artistName}&page=${page}`
  )
  return res.data
}

export const useGetSetlists = (artistName: string) => {
  const debouncedValue = useDebounce(artistName, 500)

  const { isLoading, data, error, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['get-setlists', debouncedValue],
      async (page) => await getSetlists(debouncedValue, page.pageParam),
      {
        enabled: !!debouncedValue,
        retry: false,
        getNextPageParam: (lastPage) => {
          const offset = lastPage.page * lastPage.itemsPerPage
          if (lastPage.total > offset) {
            return lastPage.page + 1
          }
          return undefined
        }
      }
    )

  return { isLoading, data, refetch, error, fetchNextPage, hasNextPage }
}
