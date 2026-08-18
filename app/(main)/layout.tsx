import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollRevealInit } from '@/components/scroll-reveal'
import { HeritageAssessmentHashScroll } from '@/components/heritage/heritage-assessment-hash-scroll'
import { HERITAGE_ASSESSMENT_LINK, HERITAGE_ASSESSMENT_ID } from '@/lib/heritage-content'
import '@/components/heritage/heritage-overrides.css'

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
      <div className="heritage-ambient relative flex min-h-full flex-1 flex-col">
        <Header
          homeHref="/"
          ctaHref={HERITAGE_ASSESSMENT_LINK}
          ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
          ctaVariant="heritage-on-dark"
          hideCtaOnPaths={['/booking-confirmed']}
        />
        <main className="heritage-page relative z-10 min-w-0 overflow-x-clip">{children}</main>
        <Footer
          ctaHref={HERITAGE_ASSESSMENT_LINK}
          ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
          ctaVariant="heritage-on-dark"
          hideCtaOnPaths={['/booking-confirmed']}
        />
      </div>
    </>
  )
}
