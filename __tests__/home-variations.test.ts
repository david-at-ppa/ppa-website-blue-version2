import { HERITAGE_ASSESSMENT_LINK } from '@/lib/heritage-content'
import {
  getHomeVariationAssessmentLink,
  getHomeVariationConfig,
  isHomeVariationPath,
  resolveMainChromeConfig,
} from '@/lib/home-variations'

describe('home variation registry', () => {
  it('recognizes the red variation path', () => {
    expect(isHomeVariationPath('/home-variation3-red')).toBe(true)
  })

  it('does not treat standard routes as home variations', () => {
    expect(isHomeVariationPath('/about-us')).toBe(false)
    expect(isHomeVariationPath('/')).toBe(false)
  })

  it('returns red variation config with black header and dark footer', () => {
    expect(getHomeVariationConfig('/home-variation3-red')).toEqual({
      palette: 'variation3-red',
      path: '/home-variation3-red',
      headerOnDark: true,
      footerOnDark: true,
    })
  })

  it('returns null for non-variation routes', () => {
    expect(getHomeVariationConfig('/faqs')).toBeNull()
  })

  it('builds assessment links scoped to the variation route', () => {
    expect(getHomeVariationAssessmentLink('/home-variation3-red')).toBe(
      '/home-variation3-red#assessment'
    )
  })
})

describe('resolveMainChromeConfig', () => {
  it('uses default heritage chrome on the main home route', () => {
    expect(resolveMainChromeConfig('/')).toEqual({
      homeHref: '/',
      ctaHref: HERITAGE_ASSESSMENT_LINK,
      headerOnDark: true,
      footerOnDark: true,
      headerCtaVariant: 'heritage-on-dark',
      footerCtaVariant: 'heritage-on-dark',
    })
  })

  it('applies red variation chrome on the variation route', () => {
    expect(resolveMainChromeConfig('/home-variation3-red')).toEqual({
      palette: 'variation3-red',
      homeHref: '/home-variation3-red',
      ctaHref: '/home-variation3-red#assessment',
      headerOnDark: true,
      footerOnDark: true,
      headerCtaVariant: 'heritage',
      footerCtaVariant: 'heritage',
    })
  })
})
