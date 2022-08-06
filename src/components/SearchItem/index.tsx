import classNames from 'classnames'
import Image from 'next/image'
import { FiPlus as PlusIcon } from 'react-icons/fi'
import { Artist } from 'services/api/getArtists'

type SearchItemProps = {
  type: 'artist' | 'setlist'
  artist?: Artist
}

const SearchItem = ({ type, artist }: SearchItemProps) => {
  const containerClass =
    'flex items-center gap-4 p-2 transition-colors duration-300 hover:bg-gray-100 rounded-xl sm:p-4'

  return (
    <>
      {type === 'artist' ? (
        <div className={containerClass}>
          <div className="relative block w-20 h-20 overflow-hidden rounded-xl shrink-0">
            <Image
              src={
                artist?.images[0]?.url ||
                'https://www.whosampled.com/static/images/redesign/misc/no_artist_image.png'
              }
              alt={artist?.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="ml-4 overflow-hidden text-2xl font-bold w-fit text-ellipsis sm:text-4xl">
            {artist?.name}
          </h1>
        </div>
      ) : (
        <div className={classNames(containerClass, 'justify-between')}>
          <div className="flex flex-col items-center justify-center w-20 h-20 p-2 text-center bg-green-300 shrink-0 sm:w-20 sm:h-20 rounded-xl">
            <p className="text-sm leading-none sm:text-base sm:leading-tight">
              16
            </p>
            <p className="text-sm leading-none sm:text-base sm:leading-tight">
              Nov
            </p>
            <p className="text-sm leading-none sm:text-base sm:leading-tight">
              2022
            </p>
          </div>
          <div className="w-full overflow-hidden">
            <h3 className="overflow-hidden text-2xl font-bold text-ellipsis sm:text-4xl">
              Red Hot Chili Peppers
            </h3>
            <p className="overflow-hidden text-sm text-ellipsis sm:text-base">
              at Allegiant Stadium, Las Vegas, NV, USA
            </p>
          </div>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <PlusIcon className="text-3xl " />
            <p>Add</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SearchItem
