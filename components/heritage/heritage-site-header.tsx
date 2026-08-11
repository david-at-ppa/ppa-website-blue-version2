'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@base-ui/react/dialog'
import { Menu, X } from 'lucide-react'
import { HeritageLogo } from '@/components/heritage/heritage-logo'

const NAV_LINKS = [
  { href: '#services', label: 'What We Do' },
  { href: '#process', label: 'How It Works' },
  { href: '#team', label: 'Team' },
  { href: '#faq', label: 'FAQ' },
]

export function HeritageSiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <div className="wrap nav">
          <HeritageLogo href="/heritage" />

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </nav>

          <div className="nav-cta">
            <Link href="#assessment" className="btn btn-gold">Book a Call</Link>
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger className="nav-toggle" aria-label="Menu">
                <Menu className="size-[22px]" aria-hidden="true" />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40" />
                <Dialog.Popup className="fixed inset-y-0 right-0 z-50 flex h-full w-3/4 max-w-sm flex-col bg-[var(--bg-3)] p-6 shadow-xl">
                  <div className="mb-6 flex items-center justify-between">
                    <HeritageLogo href="/heritage" />
                    <Dialog.Close aria-label="Close menu">
                      <X className="size-5" />
                    </Dialog.Close>
                  </div>
                  <nav className="flex flex-col gap-3">
                    {NAV_LINKS.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className="text-[var(--text-2)]"
                      >
                        {label}
                      </Link>
                    ))}
                    <Link href="#assessment" className="btn btn-gold mt-4" onClick={() => setMobileOpen(false)}>
                      Book a Call
                    </Link>
                  </nav>
                </Dialog.Popup>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </header>
  )
}
