import { StatsSection } from '@/components/sections/stats-section'
import { ClientLogosSection } from '@/components/sections/client-logos-section'
import { ProcessSection } from '@/components/sections/process-section'
import { HomeCtaSection } from '@/components/sections/home-cta-section'
import { HERITAGE_CLIENT_LOGOS, HERITAGE_ASSESSMENT_LINK, HERITAGE_ASSESSMENT_ID, HERITAGE_STATS } from '@/lib/heritage-content'

/** Heritage homepage sections — guarantee and founder omitted. */
export function HeritageHomeSections() {
  return (
    <>
      <StatsSection stats={HERITAGE_STATS} />
      <ClientLogosSection animated={false} logos={HERITAGE_CLIENT_LOGOS} />
      <ProcessSection />
      <HomeCtaSection
        ctaHref={HERITAGE_ASSESSMENT_LINK}
        ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
      />
    </>
  )
}
