import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollRevealInit } from '@/components/scroll-reveal'
import { HeritageHtmlTheme } from '@/components/heritage/heritage-html-theme'
import { HERITAGE_ASSESSMENT_LINK, HERITAGE_ASSESSMENT_ID } from '@/lib/heritage-content'
import { HeritageAssessmentHashScroll } from '@/components/heritage/heritage-assessment-hash-scroll'
import '@/components/heritage/heritage-overrides.css'

const HERITAGE_NAV_LINKS = [{ href: '/heritage/about', label: 'About' }] as const

const HERITAGE_FOOTER_QUICK_LINKS = [
  { href: '/heritage/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Prime Path Advisory — Proactive Tax Strategy for High-Income W-2 Earners',
  description:
    'Prime Path Advisory is a done-for-you tax optimization firm for W-2 professionals earning $1M+. We uncover the legal strategies that keep more money in your pocket—every single year.',
  robots: { index: false, follow: false },
}

export default function HeritageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeritageHtmlTheme fontClassName={fraunces.variable} />
      <ScrollRevealInit />
      <HeritageAssessmentHashScroll />
      <div className="heritage-ambient relative flex min-h-full flex-1 flex-col bg-background">
        <Header
          homeHref="/heritage"
          ctaHref={HERITAGE_ASSESSMENT_LINK}
          ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
          ctaVariant="heritage"
          navLinks={HERITAGE_NAV_LINKS}
        />
        <main className="heritage-page bg-background">{children}</main>
        <Footer
          ctaHref={HERITAGE_ASSESSMENT_LINK}
          ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
          ctaVariant="heritage"
          quickLinks={HERITAGE_FOOTER_QUICK_LINKS}
          legalAsText
        />
      </div>
    </>
  )
}
