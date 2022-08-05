import { DefaultTheme } from 'styled-components'
import { common } from './common'

import { dark as colorsDark } from './dark'
import { light as colorsLight } from './light'

export const darkTheme = { ...common, ...colorsDark } as DefaultTheme
export const lightTheme = { ...common, ...colorsLight } as DefaultTheme
export * from './common'
