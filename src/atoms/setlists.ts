import { atom } from 'recoil'
import { Setlist } from 'services/api/getSetlists'

export const setlistsState = atom({
  key: 'setlists',
  default: [] as Setlist[]
})
