import { IoSearchOutline as SearchIcon } from 'react-icons/io5'
import { BsArrowRightShort as ArrowRightIcon } from 'react-icons/bs'
import { v4 as uuid } from 'uuid'

import { useEffect, useState } from 'react'
import SearchItem from 'components/SearchItem'
import { useArtistAutocomplete } from 'services/api/getArtists'
import SearchContainer from 'components/SearchContainer'

const SearchInput = () => {
  const [input, setInput] = useState('')

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const { data, isLoading, hasNextPage, fetchNextPage } =
    useArtistAutocomplete(input)

  useEffect(() => {
    const onscroll = (e) => {
      let fetching = false

      const { scrollTop, scrollHeight, clientHeight } = e.target

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
    <div className="flex flex-col items-center gap-4">
      {/* SEARCH RESULTS CARD */}
      <SearchContainer isLoading={data === undefined && isLoading}>
        {data !== undefined &&
          data.pages.map((page) =>
            page.items.map((artist) => (
              <SearchItem type="artist" artist={artist} key={uuid()} />
            ))
          )}
      </SearchContainer>

      {/* SEARCH INPUT */}
      <div className="flex items-center justify-between w-full max-w-6xl gap-2 px-4 transition-colors rounded-full bg-red-light focus-within:bg-black">
        <SearchIcon className="ml-4 text-4xl text-white" />

        <input
          className="w-full h-20 px-4 py-4 text-2xl font-bold text-white placeholder-white bg-transparent rounded-lg focus:outline-none group placeholder:font-thin sm:text-4xl"
          type="text"
          placeholder="Search for your favorite artist show..."
          value={input}
          onChange={handleInputChange}
        />

        <a
          href="#"
          className="p-2 transition-all bg-white border border-white rounded-full hover:bg-transparent hover:border-white"
        >
          <ArrowRightIcon className="text-4xl text-black hover:text-white " />
        </a>
      </div>
    </div>
  )
}

export default SearchInput
