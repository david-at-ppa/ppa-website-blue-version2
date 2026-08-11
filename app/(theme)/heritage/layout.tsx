import type { Metadata } from 'next'
import { Fraunces } from 'next/font/google'
import { HeritageHtmlTheme } from '@/components/heritage/heritage-html-theme'
import { HeritageRevealInit } from '@/components/heritage/heritage-reveal-init'
import { HeritageSiteFooter } from '@/components/heritage/heritage-site-footer'
import { HeritageSiteHeader } from '@/components/heritage/heritage-site-header'
import '@/components/heritage/heritage-styles.css'
import '@/components/heritage/heritage-overrides.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Prime Path Advisory — Proactive Tax Strategy for High-Income W-2 Earners',
  description:
    'Prime Path Advisory is a done-for-you tax optimization firm for W-2 professionals earning $700K+. We uncover the legal strategies that keep more money in your pocket—every single year.',
  robots: { index: false, follow: false },
}

export default function HeritageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeritageHtmlTheme fontClassName={fraunces.variable} />
      <HeritageRevealInit />
      <HeritageSiteHeader />
      <main>{children}</main>
      <HeritageSiteFooter />
    </>
  )
}
