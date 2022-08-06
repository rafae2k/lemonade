import SearchInput from 'components/SearchInput'
import SignInWithSpotify from 'components/SignInWithSpotify'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen px-4 bg-red-brand">
      <div className="absolute top-5 right-5">
        <SignInWithSpotify />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="font-bold text-white text-8xl">Spotlist</h1>
        <h2 className="text-2xl font-thin text-center text-white ">
          Create a playlist based on the setlist of your favorite artists shows
        </h2>
      </div>

      <div className="absolute w-full px-4 bottom-20 sm:bottom-10">
        <SearchInput />
      </div>
    </div>
  )
}

export default Home
