import { render, screen } from '@testing-library/react'
import HowItWorks, { metadata as howItWorksMetadata } from '@/app/(main)/how-it-works/page'
import Faqs, { metadata as faqsMetadata } from '@/app/(main)/faqs/page'

describe('How It Works page', () => {
  it('renders without error', () => {
    render(<HowItWorks />)
    expect(document.body).toBeTruthy()
  })

  it('renders a page heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { name: /how it works/i, level: 1 })).toBeInTheDocument()
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

  it('renders a page heading', () => {
    render(<Faqs />)
    expect(screen.getByRole('heading', { name: /faqs/i, level: 1 })).toBeInTheDocument()
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
