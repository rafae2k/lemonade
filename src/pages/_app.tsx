import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globalStyles'
import { StyledThemeProvider } from 'context/ThemeContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </StyledThemeProvider>
  )
}

export default MyApp
