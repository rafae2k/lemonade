import { Bars, useLoading } from '@agney/react-loading'
import { Transition } from '@headlessui/react'
import { queryState } from 'atoms/query'
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
    <Transition
      show={!!query}
      enter="transition-all duration-300 ease-in"
      enterFrom="opacity-0 scale-90 translate-y-4"
      enterTo="opacity-100 scale-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-90 translate-y-4"
    >
      <div
        id="search-container"
        className={`flex flex-col overflow-y-auto w-full max-w-4xl gap-2 p-2 bg-white rounded-3xl sm:p-8 max-h-[65vh] sm:gap-4 scrollbar-hide
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
    </Transition>
  )
}

export default SearchContainer
