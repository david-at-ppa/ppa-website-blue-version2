import { render } from '@testing-library/react'
import { TrackingScripts } from '@/components/tracking-scripts'

vi.mock('next/script', () => ({
  default: ({ id, children, src }: { id?: string; children?: string; src?: string }) => (
    <script id={id} src={src}>{children}</script>
  ),
}))

describe('TrackingScripts', () => {
  it('renders Meta Pixel script with placeholder ID', () => {
    const { container } = render(<TrackingScripts />)
    const scripts = container.querySelectorAll('script')
    const pixel = Array.from(scripts).find(s => s.textContent?.includes('META_PIXEL_ID'))
    expect(pixel).toBeInTheDocument()
  })

  it('renders GA4 script with placeholder measurement ID', () => {
    const { container } = render(<TrackingScripts />)
    const scripts = container.querySelectorAll('script')
    const ga4 = Array.from(scripts).find(
      s => s.src?.includes('GA4_MEASUREMENT_ID') || s.textContent?.includes('GA4_MEASUREMENT_ID')
    )
    expect(ga4).toBeInTheDocument()
  })

  it('renders Hyros script with placeholder snippet ID', () => {
    const { container } = render(<TrackingScripts />)
    const scripts = container.querySelectorAll('script')
    const hyros = Array.from(scripts).find(
      s => s.src?.includes('HYROS_SNIPPET_ID') || s.textContent?.includes('HYROS_SNIPPET_ID')
    )
    expect(hyros).toBeInTheDocument()
  })

  it('all three placeholder tracking scripts are present', () => {
    const { container } = render(<TrackingScripts />)
    const allContent = Array.from(container.querySelectorAll('script'))
      .map(s => (s.src ?? '') + (s.textContent ?? ''))
      .join('\n')
    expect(allContent).toContain('META_PIXEL_ID')
    expect(allContent).toContain('GA4_MEASUREMENT_ID')
    expect(allContent).toContain('HYROS_SNIPPET_ID')
  })
})
