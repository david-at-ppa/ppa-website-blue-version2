import { render, screen, within } from '@testing-library/react'
import MainLayout from '@/app/(main)/layout'

vi.mock('next/navigation', () => ({
  usePathname: () => '/home-variation3-red',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}))

describe('Home variation chrome', () => {
  it('applies the red palette wrapper on the variation route', () => {
    const { container } = render(<MainLayout>variation content</MainLayout>)
    const ambient = container.querySelector('[data-palette="variation3-red"]')
    expect(ambient).toBeInTheDocument()
    expect(ambient?.textContent).toContain('variation content')
  })

  it('points header chrome back to the variation home route', () => {
    const { container } = render(<MainLayout>variation content</MainLayout>)
    expect(screen.getByRole('link', { name: /prime path advisory/i })).toHaveAttribute(
      'href',
      '/home-variation3-red'
    )

    const header = container.querySelector('header')!
    const headerCta = within(header).getByRole('link', { name: /book a call/i })
    expect(headerCta).toHaveAttribute('href', '/home-variation3-red#assessment')
  })

  it('uses a black header surface on the variation route', () => {
    const { container } = render(<MainLayout>variation content</MainLayout>)
    const header = container.querySelector('header')
    expect(header).toBeInTheDocument()
    expect(header?.className).toMatch(/heritage-surface-navy/)
  })

  it('uses red heritage CTAs in the header and footer', () => {
    const { container } = render(<MainLayout>variation content</MainLayout>)

    const header = container.querySelector('header')!
    const headerCta = within(header).getByRole('link', { name: /book a call/i })
    expect(headerCta.className).toMatch(/bg-\[var\(--heritage-green\)\]/)
    expect(headerCta.className).toMatch(/text-\[var\(--heritage-green-foreground\)\]/)

    const footer = container.querySelector('footer')!
    const footerCta = within(footer).getByRole('link', { name: /book a call/i })
    expect(footerCta.className).toMatch(/bg-\[var\(--heritage-green\)\]/)
    expect(footerCta.className).toMatch(/text-\[var\(--heritage-green-foreground\)\]/)
  })

  it('uses a dark footer surface on the variation route', () => {
    const { container } = render(<MainLayout>variation content</MainLayout>)
    const footer = container.querySelector('footer')
    expect(footer?.className).toMatch(/heritage-surface-navy/)
  })
})
