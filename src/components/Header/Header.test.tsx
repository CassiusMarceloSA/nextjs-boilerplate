import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('Should render the heading', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { name: /Header/i })).toBeInTheDocument()
  })
})
