'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function resetRevealState() {
  document.documentElement.removeAttribute('data-reveal-ready')
  document.querySelectorAll<HTMLElement>('[data-reveal][data-visible]').forEach((el) => {
    el.removeAttribute('data-visible')
  })
}

function initScrollReveal() {
  const reducedMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const reveal = (el: HTMLElement) => {
    el.setAttribute('data-visible', '')
  }

  document.documentElement.setAttribute('data-reveal-ready', '')

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

  return observer
}

export function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    let observer: IntersectionObserver | undefined
    let cancelled = false
    let outerFrame = 0
    let innerFrame = 0

    const start = () => {
      if (cancelled) return
      observer = initScrollReveal()
    }

    // Wait for hydration to finish before toggling reveal state or attributes.
    outerFrame = window.requestAnimationFrame(() => {
      innerFrame = window.requestAnimationFrame(start)
    })

    return () => {
      cancelled = true
      window.cancelAnimationFrame(outerFrame)
      window.cancelAnimationFrame(innerFrame)
      observer?.disconnect()
      resetRevealState()
    }
  }, [pathname])

  return null
}
