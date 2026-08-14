/** Query key on the GHL calendar form hidden income field (Book Your Strategy Session - Team V2). */
export const GHL_INCOME_PARAM = 'income'

/** Attribution params persisted from Meta ad landing URLs for GHL CRM prefill. */
export const ATTRIBUTION_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
  'utm_keyword',
  'fbclid',
  'fbc_id',
  'h_ad_id',
] as const

export type AttributionParam = (typeof ATTRIBUTION_PARAMS)[number]

export function parseAttributionFromSearch(search: string): Record<string, string> {
  const normalized = search.startsWith('?') ? search.slice(1) : search
  const params = new URLSearchParams(normalized)
  const result: Record<string, string> = {}

  for (const key of ATTRIBUTION_PARAMS) {
    const value = params.get(key)
    if (value) result[key] = value
  }

  return result
}

export function captureAttributionFromLocation(storage: Storage, search: string): void {
  const parsed = parseAttributionFromSearch(search)
  for (const [key, value] of Object.entries(parsed)) {
    storage.setItem(key, value)
  }
}

export function getStoredAttribution(storage: Storage): Record<string, string> {
  const result: Record<string, string> = {}

  for (const key of ATTRIBUTION_PARAMS) {
    const value = storage.getItem(key)
    if (value) result[key] = value
  }

  return result
}

export function buildPathWithAttribution(
  path: string,
  stored: Record<string, string>,
  extra?: Record<string, string>
): string {
  const params = new URLSearchParams()

  for (const [key, value] of Object.entries(stored)) {
    params.set(key, value)
  }

  if (extra) {
    for (const [key, value] of Object.entries(extra)) {
      if (value) params.set(key, value)
    }
  }

  const query = params.toString()
  return query ? `${path}?${query}` : path
}

export function appendSearchParamsToUrl(baseUrl: string, search: string): string {
  const normalized = search.startsWith('?') ? search.slice(1) : search
  if (!normalized) return baseUrl

  const incoming = new URLSearchParams(normalized)
  if (!incoming.toString()) return baseUrl

  const url = new URL(baseUrl)
  incoming.forEach((value, key) => {
    url.searchParams.set(key, value)
  })

  return url.toString()
}
