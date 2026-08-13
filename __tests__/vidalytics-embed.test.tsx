import { render } from '@testing-library/react'
import { VidalyticsEmbed } from '@/components/vidalytics-embed'

describe('VidalyticsEmbed', () => {
  const props = {
    embedId: 'Cw2MFuq5vWpV54b7',
    accountId: 'UJ6_PCbU',
  }

  beforeEach(() => {
    document.head.replaceChildren()
  })

  it('renders the embed container', () => {
    render(<VidalyticsEmbed {...props} />)
    expect(document.getElementById('vidalytics_embed_Cw2MFuq5vWpV54b7')).toBeInTheDocument()
  })

  it('re-initializes the embed when remounted', () => {
    let initCount = 0
    const appendChild = document.head.appendChild.bind(document.head)
    const appendChildSpy = vi.spyOn(document.head, 'appendChild').mockImplementation((node) => {
      if (node instanceof HTMLScriptElement && node.text.includes('Vidalytics')) {
        initCount += 1
      }
      return appendChild(node)
    })

    const { unmount } = render(<VidalyticsEmbed {...props} />)
    const afterFirstMount = initCount

    unmount()
    render(<VidalyticsEmbed {...props} />)

    expect(afterFirstMount).toBeGreaterThan(0)
    expect(initCount).toBeGreaterThan(afterFirstMount)

    appendChildSpy.mockRestore()
  })

  it('disables autoplay via custom settings when autoplay is false', () => {
    let scriptText = ''
    const appendChild = document.head.appendChild.bind(document.head)
    const appendChildSpy = vi.spyOn(document.head, 'appendChild').mockImplementation((node) => {
      if (node instanceof HTMLScriptElement && node.text.includes('Vidalytics')) {
        scriptText = node.text
      }
      return appendChild(node)
    })

    render(<VidalyticsEmbed {...props} autoplay={false} />)

    expect(scriptText).toContain('vidalyticsCustomSettings')
    expect(scriptText).toContain('autoplay:{enabled:false,mobile:false}')
    expect(scriptText).toContain('t.run(a, vidalyticsCustomSettings)')
    expect(scriptText).not.toContain('autoplay=false')

    appendChildSpy.mockRestore()
  })
})
