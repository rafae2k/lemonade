import { atom } from 'recoil'

export const artistsState = atom({
  key: 'artists',
  default: [] as string[]
})
