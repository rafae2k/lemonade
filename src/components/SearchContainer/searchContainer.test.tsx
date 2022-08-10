import { render, screen } from '@testing-library/react'

import SearchContainer from '.'

describe('<SearchContainer />', () => {
  it('should render the heading', () => {
    const { container } = render(<SearchContainer />)

    expect(
      screen.getByRole('heading', { name: /SearchContainer/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
