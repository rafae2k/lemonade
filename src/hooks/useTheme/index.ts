import { ThemeContext } from 'context/ThemeContext'
import { useContext } from 'react'
import { darkTheme, lightTheme } from 'styles/theme'

export const useTheme = (): [string, () => void] => {
  const { theme, toggle } = useContext(ThemeContext)

  return [theme === 'light' ? lightTheme.title : darkTheme.title, toggle]
}
