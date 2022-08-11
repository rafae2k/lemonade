import { Bars, useLoading } from '@agney/react-loading'
import { Transition } from '@headlessui/react'
import { queryState } from 'atoms/query'
import Animation from 'components/Animation'
import SearchItem from 'components/SearchItem'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useGetSetlists } from 'services/api/getSetlists'
import { v4 as uuid } from 'uuid'

const SearchContainer = () => {
  const { indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width="50" />
  })
  const query = useRecoilValue(queryState)
  const { data, isLoading, hasNextPage, fetchNextPage } = useGetSetlists(query)

  // Infinite Scroll Effect
  useEffect(() => {
    const onscroll = (e: Event) => {
      let fetching = false

      const { scrollTop, scrollHeight, clientHeight } = e.target as Element

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        if (hasNextPage) {
          fetching = true
          fetchNextPage()
          fetching = false
        }
      }
    }

    document
      .getElementById('search-container')
      ?.addEventListener('scroll', onscroll)

    return () => {
      document
        .getElementById('search-container')
        ?.removeEventListener('scroll', onscroll)
    }
  }, [])

  return (
    <Animation show={!!query}>
      <div
        id="search-container"
        className={`flex flex-col overflow-y-auto gap-2 m-2 max-w-[72rem] bg-white rounded-3xl sm:p-8 max-h-[65vh] sm:gap-4 scrollbar-hide
      ${isLoading ? 'justify-center items-center' : ''}
      ${
        !isLoading && query && data === undefined
          ? 'justify-center items-center'
          : ''
      }`}
      >
        {isLoading && !!query
          ? indicatorEl
          : data !== undefined &&
            data.pages.map((page) =>
              page.setlist.map((setlist) => (
                <SearchItem setlist={setlist} key={uuid()} />
              ))
            )}
        {!isLoading && query && (
          <h3 className="overflow-hidden text-center w-60">
            Nothing found... Are you sure you typed your favorite artist name
            correctly? 😭
          </h3>
        )}
      </div>
    </Animation>
  )
}

export default SearchContainer
