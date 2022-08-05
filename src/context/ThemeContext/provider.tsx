import { ReactNode, useCallback, useMemo, useState } from 'react'
import { ThemeContext, ThemeContextProps } from './context'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'styles/theme'

type StyledThemeProviderProps = {
  children?: ReactNode
}

export const StyledThemeProvider: React.FC<StyledThemeProviderProps> = ({
  children
}) => {
  const [theme, setTheme] = useState('light')

  const toggle = useCallback(() => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'))
  }, [])

  const values = useMemo<ThemeContextProps>(
    () => ({
      theme,
      toggle
    }),
    [toggle, theme]
  )

  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
