import { setlistsState } from 'atoms/setlists'
import classNames from 'classnames'
import { FiPlus as PlusIcon } from 'react-icons/fi'
import { IoCloseOutline as CloseIcon } from 'react-icons/io5'
import { useRecoilState } from 'recoil'
import { Setlist } from 'services/api/getSetlists'

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

  const containerClass =
    'flex items-center gap-4 p-2 transition-colors duration-300 hover:bg-gray-100 rounded-xl sm:p-4'

  return (
    <div className={classNames(containerClass, 'justify-between')}>
      <div className="flex flex-col items-center justify-center w-20 h-20 p-2 text-center bg-green-300 shrink-0 sm:w-20 sm:h-20 rounded-xl">
        <p
          className="text-sm leading-none text-center sm:text-base sm:leading-tight"
          dangerouslySetInnerHTML={{
            __html: setlist?.eventDate.replaceAll('-', ' ') as string
          }}
        />
      </div>

      <div className="w-full overflow-hidden">
        <h3 className="overflow-hidden text-2xl font-bold text-ellipsis sm:text-4xl">
          {`${setlist?.artist?.name} ${
            setlist?.tour?.name ? `- ${setlist?.tour?.name}` : ''
          }`}
        </h3>

        <p className="overflow-hidden text-sm text-ellipsis sm:text-base">
          at {setlist?.venue.name}, {setlist?.venue.city.name} -{' '}
          {setlist?.venue.city.state} - {setlist?.venue.city.country.code}
        </p>
      </div>

      {setlists.includes(setlist as Setlist) ? (
        <button
          className="flex flex-col items-center justify-center"
          onClick={() => handleRemoveSetlist(setlist as Setlist)}
        >
          <CloseIcon className="text-3xl transition-all duration-300 hover:text-white hover:bg-black hover:rounded-full" />
          <p>Remove</p>
        </button>
      ) : (
        <button
          className="flex flex-col items-center justify-center"
          onClick={() => handleAddSetlist(setlist as Setlist)}
        >
          <PlusIcon className="text-3xl transition-all duration-300 hover:text-white hover:bg-black hover:rounded-full" />
          <p>Add</p>
        </button>
      )}
      {/* </button> */}
    </div>
  )
}

export default SearchItem
