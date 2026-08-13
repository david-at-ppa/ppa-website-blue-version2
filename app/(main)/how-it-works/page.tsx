import type { Metadata } from 'next'
import { HowItWorksIntroSection } from '@/components/heritage/how-it-works-intro-section'
import { HowItWorksStatsSection } from '@/components/heritage/how-it-works-stats-section'
import { ProcessSection } from '@/components/sections/process-section'

export const metadata: Metadata = {
  title: 'How It Works - Prime Path Advisory',
  description:
    'Year-round, done-for-you tax strategy for W-2 professionals earning $1M+. See how Prime Path Advisory bridges the gap your CPA leaves.',
}

export default function HowItWorks() {
  return (
    <>
      <HowItWorksIntroSection />
      <HowItWorksStatsSection />
      <ProcessSection />
    </>
  )
}
