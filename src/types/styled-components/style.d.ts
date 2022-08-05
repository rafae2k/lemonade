import 'styled-components'
import { common } from 'styles/theme'

export type ThemeColors = {
  title: 'dark' | 'light'
  colors: {
    background: string
    text: {
      heading: string
      body: string
      link: string
    }
    primary: Colors
    secondary: Colors
    semantic: {
      success: string
      warning: string
      error: string
      promo: string
    }
  }
}

export type Colors = {
  brand: string
  100: string
  90: string
  80: string
  50: string
  20: string
  10: string
}

export type NeutralColors = Colors & {
  white: string
  black: string
}

export type Theme = typeof common

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
