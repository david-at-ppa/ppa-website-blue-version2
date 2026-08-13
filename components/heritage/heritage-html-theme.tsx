'use client'

import { useEffect } from 'react'

export function HeritageHtmlTheme() {
  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-theme', 'heritage')
    return () => {
      html.removeAttribute('data-theme')
    }
  }, [])

  return null
}
