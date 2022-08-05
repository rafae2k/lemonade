import { IoSearchOutline as SearchIcon } from 'react-icons/io5'
import { BsArrowRightShort as ArrowRightIcon } from 'react-icons/bs'
import { FiPlus as PlusIcon } from 'react-icons/fi'

import { useState } from 'react'
import SearchItem from 'components/SearchItem'
import { useArtistAutocomplete } from 'services/api/setlist'

const SearchInput = () => {
  const [input, setInput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // const { data } = useArtistAutocomplete(input)

  // console.log(data)

  return (
    <div className="flex flex-col items-center gap-4">
      {/* SEARCH RESULTS CARD */}
      {/* <div className="flex flex-col w-full max-w-4xl gap-2 p-2 overflow-y-scroll bg-white rounded-3xl sm:p-8 max-h-[calc(100vh-10rem)] sm:gap-4"> */}
      {/* SEARCH ITEM */}
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
          <SearchItem key={i} />
        ))} */}
      {/* </div> */}

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
