import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    const mainText = screen.getByText('You are in home page')
    expect(mainText).toBeInTheDocument();
  })
})