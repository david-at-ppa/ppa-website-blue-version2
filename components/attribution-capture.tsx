'use client'

import { useEffect } from 'react'
import { captureAttributionFromLocation } from '@/lib/attribution'

export function AttributionCapture() {
  useEffect(() => {
    captureAttributionFromLocation(localStorage, window.location.search)
  }, [])

  return null
}
