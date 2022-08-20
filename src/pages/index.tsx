import { setlistsState } from 'atoms/setlists'
import ItemsAdded from 'components/ItemsAdded'
import PlaylistNameModal from 'components/PlaylistNameModal'
import SearchContainer from 'components/SearchContainer'
import SearchInput from 'components/SearchInput'
import SignInWithSpotify from 'components/SignInWithSpotify'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useRecoilValue } from 'recoil'

import RafoLogo from '../../public/rafo-logo.svg'

const Home: NextPage = () => {
  const [random, setIsRandom] = useState(0)

  const l = ['🦆', '❤️']

  useEffect(() => {
    const getRandom = () => {
      const random = Math.floor(Math.random() * l.length)
      return random
    }

    setIsRandom(getRandom())
  }, [l.length])

  const setlists = useRecoilValue(setlistsState)

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-x-hidden overflow-y-hidden bg-red-brand ">
      <PlaylistNameModal />

      <div>
        <Toaster />
      </div>

      <div className="absolute top-5 right-5">
        <SignInWithSpotify />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-5xl font-bold text-white sm:text-7xl">
          Lemonade 🍋
        </h1>
        <h2 className="text-2xl font-thin text-center text-white ">
          Create a playlist based on the setlist of your favorite artist&apos;s
          shows
        </h2>
      </div>

      <div className="absolute flex flex-col items-center w-full gap-4 px-4 bottom-20 sm:bottom-10">
        <SearchContainer />

        {setlists.length > 0 && <ItemsAdded setlists={setlists} />}

        <div className="flex items-center justify-center w-full gap-2">
          <SearchInput />
        </div>
      </div>
      <footer className="absolute bottom-0 flex items-center gap-2 text-xs font-thin text-white right-5">
        {`Made with ${l[random]}  by`}
        <a href="https://github.com/rafae2k">
          <Image src={RafoLogo} alt="Rafo logo" height={30} width={30} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Home
