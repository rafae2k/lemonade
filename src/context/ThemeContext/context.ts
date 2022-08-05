import { createContext } from 'react'

export type ThemeContextProps = {
  theme: string
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggle: () => undefined
})
