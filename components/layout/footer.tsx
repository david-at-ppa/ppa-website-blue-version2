import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const QUICK_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/disclosures', label: 'Disclosures' },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-semibold tracking-tight">Prime Path Advisory</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tax strategy for high-income earners.
              </p>
            </div>
            <Link href="/book" className={cn(buttonVariants({ size: 'sm' }), 'w-fit')}>
              Book a Call
            </Link>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Links
            </p>
            <nav aria-label="Quick links" className="flex flex-col gap-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Legal
            </p>
            <nav aria-label="Legal" className="flex flex-col gap-2">
              {LEGAL_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 Prime Path Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
