import { render, screen } from '@testing-library/react'

import SearchItem from '.'

describe('<SearchItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<SearchItem />)

    expect(
      screen.getByRole('heading', { name: /SearchItem/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
