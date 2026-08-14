import type { Metadata } from 'next'

export function resolveDocumentTitle(
  pageTitle: Metadata['title'],
  layoutTitle: Metadata['title']
): string {
  const layoutConfig =
    typeof layoutTitle === 'object' && layoutTitle !== null && !Array.isArray(layoutTitle)
      ? layoutTitle
      : undefined

  const template = layoutConfig?.template ?? '%s'
  const defaultTitle =
    typeof layoutConfig?.default === 'string'
      ? layoutConfig.default
      : typeof layoutTitle === 'string'
        ? layoutTitle
        : ''

  const segment =
    typeof pageTitle === 'string'
      ? pageTitle
      : typeof pageTitle === 'object' && pageTitle !== null && !Array.isArray(pageTitle)
        ? pageTitle.absolute ?? pageTitle.default ?? defaultTitle
        : defaultTitle

  return template.replace('%s', segment)
}
