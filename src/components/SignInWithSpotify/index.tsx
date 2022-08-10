import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { BsSpotify as SpotifyIcon } from 'react-icons/bs'
import { IoCloseOutline as CloseIcon } from 'react-icons/io5'

const SignInWithSpotify = () => {
  const { data, status } = useSession()

  if (status === 'unauthenticated' || status === 'loading') {
    return (
      <button
        className="flex items-center justify-center p-4 transition-colors bg-green-500 rounded-full hover:bg-green-600"
        onClick={() => signIn('spotify')}
      >
        <SpotifyIcon className="mr-2 text-2xl text-white" />
        <p className="text-sm font-medium text-white">
          {status === 'loading' ? 'Loading...' : 'Login with Spotify'}
        </p>
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
        <p className="ml-2 mr-2 overflow-hidden text-base font-medium text-white max-w-[10rem] text-ellipsis">
          {data.user.name}
        </p>
        <CloseIcon className="text-2xl text-white" />
      </button>
    )
  }

  return <></>
}

export default SignInWithSpotify
