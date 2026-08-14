import { render } from '@testing-library/react'
import { TrackingScripts } from '@/components/tracking-scripts'

vi.mock('next/script', () => ({
  default: ({ id, children, src }: { id?: string; children?: string; src?: string }) => (
    <script id={id} src={src}>
      {children}
    </script>
  ),
}))

function setGlobalPrivacyControl(value: boolean | undefined) {
  Object.defineProperty(navigator, 'globalPrivacyControl', {
    value,
    configurable: true,
  })
}

describe('TrackingScripts', () => {
  afterEach(() => {
    setGlobalPrivacyControl(undefined)
  })

  it('renders no tracking scripts when the browser sends Global Privacy Control', () => {
    setGlobalPrivacyControl(true)
    const { container } = render(<TrackingScripts />)
    expect(container.querySelectorAll('script')).toHaveLength(0)
  })

  it('renders Meta Pixel script with the configured pixel ID', () => {
    const { container } = render(<TrackingScripts />)
    const scripts = container.querySelectorAll('script')
    const pixel = Array.from(scripts).find((s) => s.textContent?.includes('560364541162966'))
    expect(pixel).toBeInTheDocument()
  })

  it('renders GA4 script with placeholder measurement ID', () => {
    const { container } = render(<TrackingScripts />)
    const scripts = container.querySelectorAll('script')
    const ga4 = Array.from(scripts).find(
      (s) => s.src?.includes('GA4_MEASUREMENT_ID') || s.textContent?.includes('GA4_MEASUREMENT_ID')
    )
    expect(ga4).toBeInTheDocument()
  })

  it('renders Hyros attribution script', () => {
    const { container } = render(<TrackingScripts />)
    const scripts = container.querySelectorAll('script')
    const hyros = Array.from(scripts).find((s) => s.textContent?.includes('hyros.com'))
    expect(hyros).toBeInTheDocument()
  })

  it('renders Meta, GA4, and Hyros tracking scripts', () => {
    const { container } = render(<TrackingScripts />)
    const allContent = Array.from(container.querySelectorAll('script'))
      .map((s) => (s.src ?? '') + (s.textContent ?? ''))
      .join('\n')
    expect(allContent).toContain('560364541162966')
    expect(allContent).toContain('GA4_MEASUREMENT_ID')
    expect(allContent).toContain('hyros.com')
  })
})
