import { render, screen } from '@testing-library/react'

import PlaylistNameModal from '.'

describe('<PlaylistNameModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<PlaylistNameModal />)

    expect(
      screen.getByRole('heading', { name: /PlaylistNameModal/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
