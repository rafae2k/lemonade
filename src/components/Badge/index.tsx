import { setlistsState } from 'atoms/setlists'
import { useRecoilState } from 'recoil'
import { Setlist } from 'services/api/getSetlists'

type BadgeProps = {
  set: Setlist
}

const Badge = ({ set }: BadgeProps) => {
  const [setlists, setSetlists] = useRecoilState(setlistsState)

  return (
    <button
      className="px-2 py-1 h-8 bg-white rounded-full max-w-[10rem] shrink-0 overflow-hidden whitespace-nowrap text-ellipsis hover:opacity-80 duration-300 transition-opacity "
      onClick={() => setSetlists(setlists.filter((s) => s.id !== set.id))}
    >{`${set?.artist?.name} ${
      set?.tour?.name ? `- ${set?.tour?.name}` : ''
    }`}</button>
  )
}

export default Badge
