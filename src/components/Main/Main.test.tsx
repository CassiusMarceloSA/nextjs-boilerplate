import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    render(<Main title="NextJS Boilerplate" description="Help developers" />)

    expect(
      screen.getByRole('heading', { name: /NextJS Boilerplate/i })
    ).toBeInTheDocument()
  })
})
