'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dialog } from '@base-ui/react/dialog'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link'
import { cn } from '@/lib/utils'
import { LogoMark } from '@/components/logo-mark'
import { SMALL_CTA_LABEL } from '@/lib/cta-labels'
import { isScheduleRoute } from '@/lib/booking'
import type { VariantProps } from 'class-variance-authority'

const NAV_LINKS = [
  { href: '/about-us', label: 'About Us' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/faqs', label: 'FAQs' },
] as const

type NavLink = { href: string; label: string }

function Logo({ homeHref, onDark = false }: { homeHref: string; onDark?: boolean }) {
  return (
    <Link
      href={homeHref}
      aria-label="Prime Path Advisory home"
      className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
    >
      <LogoMark
        className={cn(
          'h-6 w-auto',
          onDark && '[&_.text-foreground]:text-white [&_.text-primary]:text-white/80'
        )}
      />
      <div className="leading-none">
        <span className={cn('font-semibold tracking-tight', onDark && 'text-white')}>
          Prime Path Advisory
        </span>
      </div>
    </Link>
  )
}

type HeaderProps = {
  homeHref?: string
  ctaHref?: string
  ctaScrollTarget?: string
  ctaVariant?: VariantProps<typeof buttonVariants>['variant']
  navLinks?: readonly NavLink[]
  hideCtaOnPaths?: readonly string[]
  onDark?: boolean
}

export function Header({
  homeHref = '/',
  ctaHref = '/#assessment',
  ctaScrollTarget = 'assessment',
  ctaVariant = 'heritage',
  navLinks = NAV_LINKS,
  hideCtaOnPaths = ['/booking-confirmed'],
  onDark = true,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isBookingFocused = isScheduleRoute(pathname)
  const showNav = !isBookingFocused
  const showCta = !hideCtaOnPaths.includes(pathname) && !isBookingFocused
  const CtaLink = ctaScrollTarget ? SmoothScrollLink : Link

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b',
        onDark
          ? 'heritage-surface-navy border-white/10'
          : 'bg-white/45 backdrop-blur-md border-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo homeHref={homeHref} onDark={onDark} />

        {showNav ? (
          <>
            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'text-sm transition-colors',
                    onDark
                      ? 'text-white/70 hover:text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {label}
                </Link>
              ))}
              {showCta ? (
                <CtaLink
                  href={ctaHref}
                  scrollTargetId={ctaScrollTarget}
                  className={cn(buttonVariants({ variant: ctaVariant, size: 'sm' }))}
                >
                  {SMALL_CTA_LABEL}
                </CtaLink>
              ) : null}
            </nav>

            {/* Mobile nav - Base UI Dialog as slide-in drawer */}
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger
                aria-label="Open menu"
                className={cn(
                  'md:hidden inline-flex items-center justify-center rounded-md p-2 transition-colors focus-visible:outline-none focus-visible:ring-2',
                  onDark
                    ? 'text-white hover:bg-white/10 focus-visible:ring-white/40'
                    : 'text-foreground hover:bg-muted focus-visible:ring-ring'
                )}
              >
                <Menu className="size-5" aria-hidden="true" />
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/60 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 transition-opacity duration-200" />
                <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex h-full w-3/4 max-w-sm flex-col bg-background shadow-xl data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full transition-transform duration-200 ease-in-out">
                  <div className="flex items-center justify-between border-b border-border px-6 py-4">
                    <Logo homeHref={homeHref} onDark={false} />
                    <Dialog.Close
                      aria-label="Close menu"
                      className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <X className="size-5" aria-hidden="true" />
                    </Dialog.Close>
                  </div>

                  <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-6">
                    {navLinks.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                    {showCta ? (
                      <CtaLink
                        href={ctaHref}
                        scrollTargetId={ctaScrollTarget}
                        onClick={() => setMobileOpen(false)}
                        className={cn(buttonVariants({ variant: ctaVariant, size: 'sm' }), 'mt-4 w-full')}
                      >
                        {SMALL_CTA_LABEL}
                      </CtaLink>
                    ) : null}
                  </nav>
                </Dialog.Popup>
              </Dialog.Portal>
            </Dialog.Root>
          </>
        ) : null}
      </div>
    </header>
  )
}
