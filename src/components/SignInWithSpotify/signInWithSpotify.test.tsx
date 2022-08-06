import { render, screen } from '@testing-library/react'
import SignInWithSpotify from '.'

describe('<SignInWithSpotify />', () => {
  it('should render the heading', () => {
    const { container } = render(<SignInWithSpotify />)

    expect(
      screen.getByRole('heading', { name: /SignInWithSpotify/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
