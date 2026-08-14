import '@testing-library/jest-dom'

class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

vi.mock('next/font/google', () => {
  const font = (opts: { variable?: string } = {}) => ({
    className: 'mock-font',
    variable: opts.variable ?? '--font-mock',
    style: { fontFamily: 'mock' },
  })
  return {
    Oswald: font,
    Inter: font,
    JetBrains_Mono: font,
    Fraunces: font,
  }
})

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}))
