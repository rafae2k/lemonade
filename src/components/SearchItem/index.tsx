import { FiPlus as PlusIcon } from 'react-icons/fi'

const SearchItem = () => (
  <div className="flex items-center justify-between gap-4 p-2 transition-colors duration-300 hover:bg-gray-100 rounded-xl sm:p-4">
    <div className="flex flex-col items-center justify-center w-16 h-16 p-2 text-center bg-green-300 sm:w-20 sm:h-20 rounded-xl">
      <p className="text-sm leading-none sm:text-base sm:leading-tight">16</p>
      <p className="text-sm leading-none sm:text-base sm:leading-tight">Nov</p>
      <p className="text-sm leading-none sm:text-base sm:leading-tight">2022</p>
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
)

export default SearchItem
