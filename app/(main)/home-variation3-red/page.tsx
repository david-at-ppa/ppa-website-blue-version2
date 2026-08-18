import type { Metadata } from 'next'
import { HeritageHome } from '@/components/heritage/heritage-home'
import { getHomeVariationAssessmentLink } from '@/lib/home-variations'

const VARIATION_PATH = '/home-variation3-red'

export const metadata: Metadata = {
  title: 'Tax Strategy for $1M+ Earners (Red Theme Preview)',
  description:
    'Year-round tax strategy for founders, executives, and high-RSU earners making $1M+. Designed, implemented, and filed by our team.',
}

export default function HomeVariation3Red() {
  return (
    <HeritageHome assessmentLink={getHomeVariationAssessmentLink(VARIATION_PATH)} />
  )
}
