import { ClientLogosSection } from '@/components/sections/client-logos-section'
import { HeritageServicesSection } from '@/components/heritage/heritage-services-section'
import { HomeCtaSection } from '@/components/sections/home-cta-section'
import { HERITAGE_CLIENT_LOGOS, HERITAGE_CLIENT_LOGOS_INTRO, HERITAGE_ASSESSMENT_LINK, HERITAGE_ASSESSMENT_ID } from '@/lib/heritage-content'

/** Heritage homepage sections - guarantee and founder omitted. */
export function HeritageHomeSections({ assessmentLink }: { assessmentLink?: string }) {
  const ctaHref = assessmentLink ?? HERITAGE_ASSESSMENT_LINK

  return (
    <>
      <ClientLogosSection
        animated={false}
        logos={HERITAGE_CLIENT_LOGOS}
        eyebrow={HERITAGE_CLIENT_LOGOS_INTRO.eyebrow}
        heading={HERITAGE_CLIENT_LOGOS_INTRO.heading}
        subtext={HERITAGE_CLIENT_LOGOS_INTRO.subtext}
        className="pt-10 pb-16 lg:pt-12"
      />
      <HeritageServicesSection />
      <HomeCtaSection ctaHref={ctaHref} ctaScrollTarget={HERITAGE_ASSESSMENT_ID} />
    </>
  )
}
