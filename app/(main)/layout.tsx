import type { Metadata } from 'next'
import { ScrollRevealInit } from '@/components/scroll-reveal'
import { HeritageAssessmentHashScroll } from '@/components/heritage/heritage-assessment-hash-scroll'
import { MainChrome } from '@/components/layout/main-chrome'
import '@/components/heritage/heritage-overrides.css'
import '@/components/heritage/home-palette-variation3-red.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Prime Path Advisory',
    default: 'Tax Strategy for $1M+ Earners',
  },
  description:
    'Prime Path Advisory is a done-for-you tax optimization firm for W-2 professionals earning $1M+. We uncover the legal strategies that keep more money in your pocket - every single year.',
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRevealInit />
      <HeritageAssessmentHashScroll />
      <MainChrome>{children}</MainChrome>
    </>
  )
}
