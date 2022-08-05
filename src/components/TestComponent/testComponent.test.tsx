import { render, screen } from '@testing-library/react'
import TestComponent from '.'

describe('<TestComponent />', () => {
  it('should render the heading', () => {
    const { container } = render(<TestComponent />)

    expect(
      screen.getByRole('heading', { name: /TestComponent/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
