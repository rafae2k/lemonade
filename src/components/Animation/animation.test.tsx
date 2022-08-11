import { render, screen } from '@testing-library/react'

import Animation from '.'

describe('<Animation />', () => {
  it('should render the heading', () => {
    const { container } = render(<Animation />)

    expect(
      screen.getByRole('heading', { name: /Animation/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
