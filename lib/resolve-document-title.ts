import type { Metadata } from 'next'

type TitleObject = Exclude<Metadata['title'], string | null | undefined>

function hasTitleTemplate(
  title: TitleObject
): title is TitleObject & { template: string; default?: string } {
  return 'template' in title && typeof title.template === 'string'
}

export function resolveDocumentTitle(
  pageTitle: Metadata['title'],
  layoutTitle: Metadata['title']
): string {
  const layoutObject =
    typeof layoutTitle === 'object' && layoutTitle !== null && !Array.isArray(layoutTitle)
      ? layoutTitle
      : undefined

  const template = layoutObject && hasTitleTemplate(layoutObject) ? layoutObject.template : '%s'
  const defaultTitle =
    layoutObject && hasTitleTemplate(layoutObject) && typeof layoutObject.default === 'string'
      ? layoutObject.default
      : typeof layoutTitle === 'string'
        ? layoutTitle
        : ''

  const pageObject =
    typeof pageTitle === 'object' && pageTitle !== null && !Array.isArray(pageTitle)
      ? pageTitle
      : undefined

  const segment =
    typeof pageTitle === 'string'
      ? pageTitle
      : pageObject && 'absolute' in pageObject && typeof pageObject.absolute === 'string'
        ? pageObject.absolute
        : pageObject && 'default' in pageObject && typeof pageObject.default === 'string'
          ? pageObject.default
          : defaultTitle

  return template.replace('%s', segment)
}
