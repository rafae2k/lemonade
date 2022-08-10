import { render, screen } from '@testing-library/react'

import CreatePlaylistButton from '.'

describe('<CreatePlaylistButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<CreatePlaylistButton />)

    expect(
      screen.getByRole('heading', { name: /CreatePlaylistButton/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
