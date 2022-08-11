import { Transition } from '@headlessui/react'
import { modalState } from 'atoms/modal'
import { queryState } from 'atoms/query'
import { setlistsState } from 'atoms/setlists'
import { BsArrowRightShort as ArrowRightIcon } from 'react-icons/bs'
import { IoSearchOutline as SearchIcon } from 'react-icons/io5'
import { useRecoilState, useRecoilValue } from 'recoil'

const SearchInput = () => {
  const [query, setQuery] = useRecoilState(queryState)
  const [, setIsModalOpen] = useRecoilState(modalState)
  const setlists = useRecoilValue(setlistsState)

  return (
    <div className="flex items-center justify-between w-full max-w-6xl gap-2 px-4 transition-colors rounded-full bg-red-light focus-within:bg-black">
      <SearchIcon className="ml-4 text-4xl text-white" />

      <input
        className="w-full h-20 px-4 py-4 text-2xl font-bold text-white placeholder-white transition-all bg-transparent rounded-lg focus:outline-none group placeholder:font-thin sm:text-4xl"
        type="text"
        placeholder="Search for your favorite artist show..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Transition
        show={setlists.length > 0}
        enter="transition-all duration-200 ease-in"
        enterFrom="opacity-0 scale-90 translate-y-4"
        enterTo="opacity-100 scale-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-90 translate-y-4"
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="p-2 transition-all bg-white border border-white rounded-full hover:bg-transparent hover:border-white"
        >
          <ArrowRightIcon className="text-4xl text-black hover:text-white " />
        </button>
      </Transition>
    </div>
  )
}

export default SearchInput
