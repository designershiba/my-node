import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    const component =  render(<Home />)

    expect(component).toMatchSnapshot();
  })
})