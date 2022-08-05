import TestComponent from 'components/TestComponent'
import type { NextPage } from 'next'
import * as S from '../styles/pages/index.styles'

const Home: NextPage = () => {
  return (
    <S.Container>
      <TestComponent />
    </S.Container>
  )
}

export default Home
