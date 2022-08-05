import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    height: 100vh;
    background: ${colors.background};
    color: ${colors.text};
  `}
`
