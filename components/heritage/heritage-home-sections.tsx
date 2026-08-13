import { ClientLogosSection } from '@/components/sections/client-logos-section'
import { HeritageServicesSection } from '@/components/heritage/heritage-services-section'
import { HomeCtaSection } from '@/components/sections/home-cta-section'
import { HERITAGE_CLIENT_LOGOS, HERITAGE_ASSESSMENT_LINK, HERITAGE_ASSESSMENT_ID } from '@/lib/heritage-content'

/** Heritage homepage sections - guarantee and founder omitted. */
export function HeritageHomeSections() {
  return (
    <>
      <ClientLogosSection
        animated={false}
        logos={HERITAGE_CLIENT_LOGOS}
        eyebrow="Where our clients work"
        heading="We plan for the people these companies pay the most"
        className="border-t-0 pt-10 pb-16 lg:pt-12"
      />
      <HeritageServicesSection />
      <HomeCtaSection
        ctaHref={HERITAGE_ASSESSMENT_LINK}
        ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
      />
    </>
  )
}
