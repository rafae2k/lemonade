import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 /* ====  RESET ==== */
 ${({ theme }) => css`
   *,
   *::after,
   *::before {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   html {
     font-size: 62.5%;
     font-family: ${theme.fonts.fontFamily.sans};
     min-height: 100vh;
     background-color: ${theme.colors.background};
     color: ${theme.colors.text.body};
   }
   ul {
     list-style: none;
   }
   a {
     text-decoration: none;
   }
   img {
     width: 100%;
     height: auto;
   }
 `}
`

export default GlobalStyle
