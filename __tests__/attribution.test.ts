import {
  ATTRIBUTION_PARAMS,
  appendSearchParamsToUrl,
  buildPathWithAttribution,
  captureAttributionFromLocation,
  getStoredAttribution,
  GHL_INCOME_PARAM,
  parseAttributionFromSearch,
} from '@/lib/attribution'

function mockStorage(): Storage {
  const store = new Map<string, string>()
  return {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => store.set(key, value),
    removeItem: (key: string) => store.delete(key),
    clear: () => store.clear(),
    key: (index: number) => [...store.keys()][index] ?? null,
    get length() {
      return store.size
    },
  }
}

describe('parseAttributionFromSearch', () => {
  it('extracts tracked Meta ad params from the landing URL', () => {
    const parsed = parseAttributionFromSearch(
      '?utm_source=facebook&fbclid=abc123&income=ignored'
    )

    expect(parsed).toEqual({
      utm_source: 'facebook',
      fbclid: 'abc123',
    })
  })

  it('returns an empty object when no tracked params are present', () => {
    expect(parseAttributionFromSearch('?foo=bar')).toEqual({})
  })
})

describe('captureAttributionFromLocation', () => {
  it('persists tracked params to storage for later schedule navigation', () => {
    const storage = mockStorage()
    captureAttributionFromLocation(
      storage,
      '?utm_source=facebook&utm_campaign=spring&fbclid=abc123'
    )

    expect(getStoredAttribution(storage)).toEqual({
      utm_source: 'facebook',
      utm_campaign: 'spring',
      fbclid: 'abc123',
    })
  })
})

describe('buildPathWithAttribution', () => {
  it('builds a schedule route with stored UTMs and income for GHL prefill', () => {
    const path = buildPathWithAttribution('/schedule-a', {
      utm_source: 'facebook',
      fbclid: 'abc123',
    }, {
      [GHL_INCOME_PARAM]: '$1M - $2M',
    })

    const [pathname, query = ''] = path.split('?')
    const params = new URLSearchParams(query)

    expect(pathname).toBe('/schedule-a')
    expect(params.get('utm_source')).toBe('facebook')
    expect(params.get('fbclid')).toBe('abc123')
    expect(params.get('income')).toBe('$1M - $2M')
  })

  it('builds a path with only income when no attribution was stored', () => {
    const path = buildPathWithAttribution('/schedule-b', {}, {
      [GHL_INCOME_PARAM]: '$2M - $4M',
    })

    const [pathname, query = ''] = path.split('?')
    const params = new URLSearchParams(query)

    expect(pathname).toBe('/schedule-b')
    expect(params.get('income')).toBe('$2M - $4M')
  })
})

describe('appendSearchParamsToUrl', () => {
  it('appends page query params to the GHL calendar iframe URL', () => {
    const iframeSrc = appendSearchParamsToUrl(
      'https://api.leadconnectorhq.com/widget/booking/y0C0fmCrsbf0kJpBIc7B',
      'utm_source=facebook&income=$1M%20-%20$2M'
    )

    const url = new URL(iframeSrc)

    expect(url.pathname).toBe('/widget/booking/y0C0fmCrsbf0kJpBIc7B')
    expect(url.searchParams.get('utm_source')).toBe('facebook')
    expect(url.searchParams.get('income')).toBe('$1M - $2M')
  })

  it('returns the base URL when search is empty', () => {
    const base = 'https://api.leadconnectorhq.com/widget/booking/y0C0fmCrsbf0kJpBIc7B'
    expect(appendSearchParamsToUrl(base, '')).toBe(base)
  })
})

describe('ATTRIBUTION_PARAMS', () => {
  it('includes the Meta and UTM keys used by ad landing pages', () => {
    expect(ATTRIBUTION_PARAMS).toContain('utm_source')
    expect(ATTRIBUTION_PARAMS).toContain('fbclid')
    expect(ATTRIBUTION_PARAMS).toContain('h_ad_id')
  })
})
