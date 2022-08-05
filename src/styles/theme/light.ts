import { ThemeColors } from 'types/styled-components/style'

const light: ThemeColors = {
  title: 'light',
  colors: {
    background: '#fff',
    text: {
      body: '#666666',
      heading: '#111111',
      link: '#115D8C'
    },
    primary: {
      brand: '#C81A78',
      100: '',
      90: '',
      80: '#B6116E',
      50: '#C81A78',
      20: '#D14B8F',
      10: ''
    },
    secondary: {
      brand: '',
      100: '',
      90: '',
      80: '',
      50: '#7EBC43',
      20: '',
      10: ''
    },
    semantic: {
      promo: '#F79552',
      success: '#2F9E51',
      warning: '#EED86F',
      error: '#E88DA6'
    }
  }
} as const

export { light }
