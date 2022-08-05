import { ThemeColors } from 'types/styled-components/style'

const dark: ThemeColors = {
  title: 'dark',
  colors: {
    background: '#1B6921',
    text: {
      body: '#fff',
      heading: '#fff',
      link: '#fff'
    },
    primary: {
      brand: '',
      100: '',
      90: '',
      80: '',
      50: '',
      20: '',
      10: ''
    },
    secondary: {
      brand: '',
      100: '',
      90: '',
      80: '',
      50: '',
      20: '',
      10: ''
    },
    semantic: {
      promo: '',
      success: '#1B6921',
      warning: '#AE7C21',
      error: '#770B23'
    }
  }
} as const

export { dark }
