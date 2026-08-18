import { render } from '@testing-library/react'
import { HeritageAssessmentHashScroll } from '@/components/heritage/heritage-assessment-hash-scroll'

vi.mock('next/navigation', () => ({
  usePathname: () => '/home-variation3-red',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}))

describe('HeritageAssessmentHashScroll on home variations', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn().mockReturnValue({ matches: false })
  })

  it('scrolls to the assessment section when the variation route has an assessment hash', () => {
    const scrollIntoView = vi.fn()
    const assessment = document.createElement('div')
    assessment.id = 'assessment'
    assessment.scrollIntoView = scrollIntoView
    document.body.appendChild(assessment)
    window.location.hash = '#assessment'

    render(<HeritageAssessmentHashScroll />)

    expect(scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    })
  })
})
