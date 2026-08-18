import { HERITAGE_ASSESSMENT_ID, HERITAGE_ASSESSMENT_LINK } from '@/lib/heritage-content'

export type HomeVariationConfig = {
  palette: string
  path: string
  headerOnDark: boolean
  footerOnDark: boolean
}

export type MainChromeConfig = {
  palette?: string
  homeHref: string
  ctaHref: string
  headerOnDark: boolean
  footerOnDark: boolean
  headerCtaVariant: 'heritage' | 'heritage-on-dark'
  footerCtaVariant: 'heritage' | 'heritage-on-dark'
}

export const HOME_VARIATIONS: Record<string, HomeVariationConfig> = {
  '/home-variation3-red': {
    palette: 'variation3-red',
    path: '/home-variation3-red',
    headerOnDark: true,
    footerOnDark: true,
  },
}

export function getHomeVariationConfig(pathname: string): HomeVariationConfig | null {
  return HOME_VARIATIONS[pathname] ?? null
}

export function getHomeVariationAssessmentLink(path: string): string {
  return `${path}#${HERITAGE_ASSESSMENT_ID}`
}

export function isHomeVariationPath(pathname: string): boolean {
  return pathname in HOME_VARIATIONS
}

export function resolveMainChromeConfig(pathname: string): MainChromeConfig {
  const variation = getHomeVariationConfig(pathname)

  if (!variation) {
    return {
      homeHref: '/',
      ctaHref: HERITAGE_ASSESSMENT_LINK,
      headerOnDark: true,
      footerOnDark: true,
      headerCtaVariant: 'heritage-on-dark',
      footerCtaVariant: 'heritage-on-dark',
    }
  }

  return {
    palette: variation.palette,
    homeHref: variation.path,
    ctaHref: getHomeVariationAssessmentLink(variation.path),
    headerOnDark: variation.headerOnDark,
    footerOnDark: variation.footerOnDark,
    headerCtaVariant: 'heritage',
    footerCtaVariant: 'heritage',
  }
}
