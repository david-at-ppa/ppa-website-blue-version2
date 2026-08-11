import { GuaranteeSection } from '@/components/sections/guarantee-section'
import { ClientLogosSection } from '@/components/sections/client-logos-section'
import { StatsSection } from '@/components/sections/stats-section'
import { ProcessSection } from '@/components/sections/process-section'
import { FounderSection } from '@/components/sections/founder-section'
import { HomeCtaSection } from '@/components/sections/home-cta-section'

export function HomeSections() {
  return (
    <>
      <GuaranteeSection />
      <ClientLogosSection />
      <StatsSection />
      <ProcessSection />
      <FounderSection />
      <HomeCtaSection />
    </>
  )
}
