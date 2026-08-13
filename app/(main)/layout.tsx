import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollRevealInit } from '@/components/scroll-reveal'
import { HeritageHtmlTheme } from '@/components/heritage/heritage-html-theme'
import { HeritageAssessmentHashScroll } from '@/components/heritage/heritage-assessment-hash-scroll'
import { HERITAGE_ASSESSMENT_LINK, HERITAGE_ASSESSMENT_ID } from '@/lib/heritage-content'
import '@/components/heritage/heritage-overrides.css'

export const metadata: Metadata = {
  title: 'Prime Path Advisory - Proactive Tax Strategy for High-Income W-2 Earners',
  description:
    'Prime Path Advisory is a done-for-you tax optimization firm for W-2 professionals earning $1M+. We uncover the legal strategies that keep more money in your pocket - every single year.',
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeritageHtmlTheme />
      <ScrollRevealInit />
      <HeritageAssessmentHashScroll />
      <div className="heritage-ambient relative flex min-h-full flex-1 flex-col bg-background">
        <Header
          homeHref="/"
          ctaHref={HERITAGE_ASSESSMENT_LINK}
          ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
          ctaVariant="heritage"
        />
        <main className="heritage-page min-w-0 overflow-x-clip bg-background">{children}</main>
        <Footer
          ctaHref={HERITAGE_ASSESSMENT_LINK}
          ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
          ctaVariant="heritage"
          legalAsText
        />
      </div>
    </>
  )
}
