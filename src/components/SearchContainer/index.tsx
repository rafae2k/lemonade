import { Bars, useLoading } from '@agney/react-loading'
import { useEffect, useRef } from 'react'

type SearchContainerProps = {
  children: React.ReactNode
  isLoading: boolean
}

const SearchContainer = ({ children, isLoading }: SearchContainerProps) => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width="50" />
  })

  return (
    <div
      id="search-container"
      className={`flex flex-col w-full max-w-4xl gap-2 p-2 overflow-y-scroll bg-white rounded-3xl sm:p-8 max-h-[calc(100vh-10rem)] sm:gap-4
      ${!children ? 'hidden' : ''} ${isLoading ? 'justify-center' : ''}`}
    >
      {isLoading ? indicatorEl : children}
    </div>
  )
}

export default SearchContainer
