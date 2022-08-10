import { Transition } from '@headlessui/react'
import { setlistsState } from 'atoms/setlists'
import { useCreatePlaylist } from 'hooks/useCreatePlaylist'
import { useRecoilValue } from 'recoil'

const CreatePlaylistButton = () => {
  const setlists = useRecoilValue(setlistsState)
  const createPlaylist = useCreatePlaylist()

  return (
    <Transition
      show={setlists.length > 0}
      enter="transition-all duration-300 ease-in"
      enterFrom="opacity-0 scale-90 translate-y-4"
      enterTo="opacity-100 scale-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-90 translate-y-4"
    >
      <button
        className="min-h-full p-2 px-4 transition-all bg-green-500 rounded-full hover:bg-green-600"
        onClick={() => createPlaylist()}
      >
        <p className="w-20 text-base font-bold text-white sm:text-xl">
          Create Playlist
        </p>
      </button>
    </Transition>
  )
}

export default CreatePlaylistButton
