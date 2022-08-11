import { Disclosure } from '@headlessui/react'
import { setlistsState } from 'atoms/setlists'
import Animation from 'components/Animation'
import { FiChevronUp as ChevronUpIcon } from 'react-icons/fi'
import {
  IoAddOutline as PlusIcon,
  IoCloseOutline as CloseIcon
} from 'react-icons/io5'
import { useRecoilState } from 'recoil'
import { Setlist } from 'services/api/getSetlists'
import { v4 as uuid } from 'uuid'

type SearchItemProps = {
  setlist?: Setlist
}

const SearchItem = ({ setlist }: SearchItemProps) => {
  const [setlists, setSetlists] = useRecoilState(setlistsState)

  const handleRemoveSetlist = (set: Setlist) => {
    setSetlists((v) => v.filter((s) => s.id !== set.id))
  }

  const handleAddSetlist = (set: Setlist) => {
    setSetlists((v) => [...v, set])
  }

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center justify-between gap-4 p-2 transition-colors duration-300 hover:bg-gray-100 rounded-xl sm:p-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center justify-center w-20 h-20 p-2 text-center bg-green-300 shrink-0 sm:w-20 sm:h-20 rounded-xl">
                <p
                  className="text-sm leading-none text-center sm:text-base sm:leading-tight"
                  dangerouslySetInnerHTML={{
                    __html: setlist?.eventDate.replaceAll(
                      '-',
                      '<br/>'
                    ) as string
                  }}
                />
              </div>

              <div className="flex flex-col items-center justify-center w-full overflow-hidden text-start">
                <h3 className="self-start overflow-hidden text-2xl font-bold text-ellipsis sm:text-4xl">
                  {`${setlist?.artist?.name} ${
                    setlist?.tour?.name ? `- ${setlist?.tour?.name}` : ''
                  }`}
                </h3>

                <p className="self-start overflow-hidden text-sm text-ellipsis sm:text-base">
                  at {setlist?.venue.name}, {setlist?.venue.city.name} -{' '}
                  {setlist?.venue.city.state} -{' '}
                  {setlist?.venue.city.country.code}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              {setlists.includes(setlist as Setlist) ? (
                <div
                  className="flex flex-col items-center justify-center w-14"
                  onClick={() => handleRemoveSetlist(setlist as Setlist)}
                >
                  <CloseIcon className="text-3xl transition-all duration-300 hover:text-white hover:bg-black hover:rounded-full" />
                  <p>Remove</p>
                </div>
              ) : (
                <div
                  className="flex flex-col items-center justify-center w-14"
                  onClick={() => handleAddSetlist(setlist as Setlist)}
                >
                  <PlusIcon className="text-3xl transition-all duration-300 hover:text-white hover:bg-black hover:rounded-full" />
                  <p>Add</p>
                </div>
              )}

              <ChevronUpIcon
                className={`${
                  open ? 'rotate-180 transform ' : ''
                } text-black transition-transform duration-300 text-2xl w-10 h-10`}
              />
            </div>
          </Disclosure.Button>

          <Animation>
            <Disclosure.Panel className="px-4 pt-4 pb-2 overflow-x-auto text-sm text-gray-500 divide-y-2 divide-black scrollbar-hide divide-solid">
              <ol className="flex flex-col flex-wrap max-h-32">
                {setlist?.sets.set.map((set) =>
                  set.song.map((song, i) => (
                    <li
                      key={uuid()}
                      className="ml-4 overflow-hidden max-w-[10rem] text-ellipsis"
                    >
                      {i + 1}. {song.name}
                    </li>
                  ))
                )}
              </ol>
            </Disclosure.Panel>
          </Animation>
        </>
      )}
    </Disclosure>
  )
}

export default SearchItem
