import Badge from 'components/Badge'
import { Setlist } from 'services/api/getSetlists'
import { v4 as uuid } from 'uuid'

type ItemsAddedProps = {
  setlists: Setlist[]
}

const ItemsAdded = ({ setlists }: ItemsAddedProps) => {
  return (
    <div className="flex items-center w-full max-w-4xl gap-2 ml-10 overflow-x-hidden sm:ml-20">
      <p className="text-white">Added:</p>
      <div className="flex items-center gap-2 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        {setlists.map((set) => (
          <Badge set={set} key={uuid()} />
        ))}
      </div>
    </div>
  )
}

export default ItemsAdded
