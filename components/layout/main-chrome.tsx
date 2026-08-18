'use client'

import { usePathname } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HERITAGE_ASSESSMENT_ID } from '@/lib/heritage-content'
import { resolveMainChromeConfig } from '@/lib/home-variations'

export function MainChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const chrome = resolveMainChromeConfig(pathname)

  return (
    <div
      className="heritage-ambient relative flex min-h-full flex-1 flex-col"
      data-palette={chrome.palette}
    >
      <Header
        homeHref={chrome.homeHref}
        ctaHref={chrome.ctaHref}
        ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
        ctaVariant={chrome.headerCtaVariant}
        hideCtaOnPaths={['/booking-confirmed']}
        onDark={chrome.headerOnDark}
      />
      <main className="heritage-page relative z-10 min-w-0 overflow-x-clip">{children}</main>
      <Footer
        ctaHref={chrome.ctaHref}
        ctaScrollTarget={HERITAGE_ASSESSMENT_ID}
        ctaVariant={chrome.footerCtaVariant}
        hideCtaOnPaths={['/booking-confirmed']}
        onDark={chrome.footerOnDark}
      />
    </div>
  )
}
