import { render, screen, within } from '@testing-library/react'
import HomeVariation3Red, { metadata } from '@/app/(main)/home-variation3-red/page'

describe('Home variation 3 (red theme)', () => {
  it('renders the same hero as the main home page', () => {
    render(<HomeVariation3Red />)
    expect(
      screen.getByRole('heading', {
        name: /you earn \$1m\+\. your cpa files\. nobody plans\./i,
        level: 1,
      })
    ).toBeInTheDocument()
  })

  it('routes hero and bottom CTAs through the variation assessment link', () => {
    render(<HomeVariation3Red />)

    const hero = screen
      .getByRole('heading', {
        name: /you earn \$1m\+\. your cpa files\. nobody plans\./i,
        level: 1,
      })
      .closest('section')!
    const heroCta = within(hero).getByRole('link', {
      name: /book your free strategy call/i,
    })
    expect(heroCta).toHaveAttribute('href', '/home-variation3-red#assessment')

    const bottomCta = screen.getByRole('link', {
      name: /book your free strategy call →/i,
    })
    expect(bottomCta).toHaveAttribute('href', '/home-variation3-red#assessment')
  })

  it('exports preview metadata distinct from the main home page', () => {
    expect(metadata.title).toBe('Tax Strategy for $1M+ Earners (Red Theme Preview)')
    expect(typeof metadata.description).toBe('string')
    expect((metadata.description as string).length).toBeGreaterThan(0)
  })
})
