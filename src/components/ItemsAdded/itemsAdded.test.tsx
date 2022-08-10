import { render, screen } from '@testing-library/react'

import ItemsAdded from '.'

describe('<ItemsAdded />', () => {
  it('should render the heading', () => {
    const { container } = render(<ItemsAdded />)

    expect(
      screen.getByRole('heading', { name: /ItemsAdded/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
