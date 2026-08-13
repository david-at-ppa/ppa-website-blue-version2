import { render, screen } from '@testing-library/react'
import HowItWorks, { metadata as howItWorksMetadata } from '@/app/(main)/how-it-works/page'
import Faqs, { metadata as faqsMetadata } from '@/app/(main)/faqs/page'

describe('How It Works page', () => {
  it('renders without error', () => {
    render(<HowItWorks />)
    expect(document.body).toBeTruthy()
  })

  it('renders the intro heading', () => {
    render(<HowItWorks />)
    expect(
      screen.getByRole('heading', {
        name: /what prime path advisory does for high-income w-2 professionals/i,
        level: 1,
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/we bridge that gap/i)).toBeInTheDocument()
  })

  it('renders the stats section', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('region', { name: /firm outcomes/i })).toBeInTheDocument()
    expect(screen.getByText(/7,000\+/i)).toBeInTheDocument()
    expect(screen.getByText(/tax strategies executed/i)).toBeInTheDocument()
    expect(screen.getByText(/0\.01%/i)).toBeInTheDocument()
    expect(screen.getByText(/audit rate/i)).toBeInTheDocument()
    expect(screen.getByText(/300\+\%/i)).toBeInTheDocument()
    expect(screen.getByText(/avg\. roi/i)).toBeInTheDocument()
  })

  it('renders the process section', () => {
    render(<HowItWorks />)
    expect(
      screen.getByRole('heading', { name: /you stop overpaying/i, level: 2 })
    ).toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof howItWorksMetadata.title).toBe('string')
    expect((howItWorksMetadata.title as string).length).toBeGreaterThan(0)
  })

  it('exports a non-empty description', () => {
    expect(typeof howItWorksMetadata.description).toBe('string')
    expect((howItWorksMetadata.description as string)!.length).toBeGreaterThan(0)
  })
})

describe('FAQs page', () => {
  it('renders without error', () => {
    render(<Faqs />)
    expect(document.body).toBeTruthy()
  })

  it('renders the page heading and FAQ items', () => {
    render(<Faqs />)
    expect(
      screen.getByRole('heading', { name: /frequently asked questions/i, level: 1 })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/everything you need to know about prime path advisory/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/why do high-income earners overpay so much in taxes\?/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/how long does it take to see results\?/i)).toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof faqsMetadata.title).toBe('string')
    expect((faqsMetadata.title as string).length).toBeGreaterThan(0)
  })

  it('exports a non-empty description', () => {
    expect(typeof faqsMetadata.description).toBe('string')
    expect((faqsMetadata.description as string)!.length).toBeGreaterThan(0)
  })
})
