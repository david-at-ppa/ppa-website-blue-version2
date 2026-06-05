'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const reveal = (el: HTMLElement) => {
      el.setAttribute('data-visible', '')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-visible])').forEach((el) => {
      if (reducedMotion) {
        reveal(el)
        return
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
