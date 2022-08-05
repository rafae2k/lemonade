import { render, screen } from '@testing-library/react'

describe('useTheme', () => {
  it('should test useTheme', () => {
    render(<div>test</div>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
})
