import { Dialog, Transition } from '@headlessui/react'
import { modalState } from 'atoms/modal'
import { useCreatePlaylist } from 'hooks/useCreatePlaylist'
import { useState } from 'react'
import { IoCloseOutline as CloseIcon } from 'react-icons/io5'
import { useRecoilState } from 'recoil'

const PlaylistNameModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState)
  const createPlaylist = useCreatePlaylist()
  const [playlistName, setPlaylistName] = useState('')

  return (
    <Transition.Root show={isModalOpen}>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="fixed inset-0 p-4 bg-white/40 backdrop-blur-sm pt-[30vh]"
      >
        <Transition.Child
          enter="transition-all duration-200 ease-in"
          enterFrom="opacity-0 scale-90 translate-y-4"
          enterTo="opacity-100 scale-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-90 translate-y-4"
        >
          <div className="relative max-w-md p-6 m-auto bg-white shadow-2xl ring-2 ring-gray-300/20 rounded-2xl">
            <Dialog.Title className="mb-12 text-3xl font-bold sm:text-4xl">
              Give your playlist a name! 👻
            </Dialog.Title>
            <button onClick={() => setIsModalOpen(false)}>
              <CloseIcon className="absolute text-3xl text-black transition-colors cursor-pointer right-4 top-6 hover:text-gray-500" />
            </button>
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                placeholder="My playlist amazing name..."
                className="w-full p-4 rounded-full ring-2 ring-gray-300 "
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
              />
              <button
                className="h-full p-4 px-4 m-auto text-xl font-bold text-white transition-all bg-green-500 rounded-full placeholder:font-thin hover:bg-green-600 sm:text-xl"
                onClick={() => {
                  createPlaylist(playlistName)
                  setIsModalOpen(false)
                  setPlaylistName('')
                }}
              >
                Create
              </button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default PlaylistNameModal
