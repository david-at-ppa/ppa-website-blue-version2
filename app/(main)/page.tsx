import type { Metadata } from 'next'
import { HeritageHome } from '@/components/heritage/heritage-home'

export const metadata: Metadata = {
  title: 'Tax Strategy for $1M+ Earners | Prime Path Advisory',
  description:
    'Year-round tax strategy for founders, executives, and high-RSU earners making $1M+. Designed, implemented, and filed by our team.',
}

export default function Home() {
  return <HeritageHome />
}
