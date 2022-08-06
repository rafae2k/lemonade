import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { BsSpotify as SpotifyIcon } from 'react-icons/bs'
import { IoCloseOutline as CloseIcon } from 'react-icons/io5'

const SignInWithSpotify = () => {
  const { data, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'unauthenticated') {
    return (
      <button
        className="flex items-center justify-center p-4 transition-colors bg-green-500 rounded-full hover:bg-green-600"
        onClick={() => signIn('spotify')}
      >
        <SpotifyIcon className="mr-2 text-2xl text-white" />
        <p className="text-sm font-medium text-white">Login with Spotify</p>
      </button>
    )
  }

  if (status === 'authenticated' && data.user) {
    return (
      <button
        onClick={() => signOut()}
        className="flex items-center justify-center p-2 transition-colors bg-green-500 rounded-full hover:bg-green-600"
      >
        <Image
          width={40}
          height={40}
          src={data.user.image as string}
          alt=""
          className="rounded-full"
        />
        <p className="ml-2 text-base font-medium text-white">{data.user.id}</p>
        <CloseIcon className="text-2xl text-white" />
      </button>
    )
  }

  return <></>
}

export default SignInWithSpotify
