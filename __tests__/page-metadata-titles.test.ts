import type { Metadata } from 'next'
import { metadata as mainLayoutMetadata } from '@/app/(main)/layout'
import { metadata as homeMetadata } from '@/app/(main)/page'
import { metadata as aboutMetadata } from '@/app/(main)/about-us/page'
import { metadata as howItWorksMetadata } from '@/app/(main)/how-it-works/page'
import { metadata as faqsMetadata } from '@/app/(main)/faqs/page'
import { metadata as contactMetadata } from '@/app/(main)/contact/page'
import { metadata as bookingConfirmedMetadata } from '@/app/(main)/booking-confirmed/page'
import { metadata as scheduleAMetadata } from '@/app/(main)/schedule-a/page'
import { metadata as scheduleBMetadata } from '@/app/(main)/schedule-b/page'
import { metadata as scheduleCMetadata } from '@/app/(main)/schedule-c/page'
import { metadata as privacyMetadata } from '@/app/(main)/privacy/page'
import { metadata as termsMetadata } from '@/app/(main)/terms/page'
import { metadata as disclosuresMetadata } from '@/app/(main)/disclosures/page'
import { resolveDocumentTitle } from '@/lib/resolve-document-title'

const BRAND_SUFFIX = 'Prime Path Advisory'

describe('page metadata titles', () => {
  it('uses a shared title template in the main layout', () => {
    expect(mainLayoutMetadata.title).toEqual({
      template: `%s | ${BRAND_SUFFIX}`,
      default: 'Tax Strategy for $1M+ Earners',
    })
  })

  it.each([
    ['home', homeMetadata, 'Tax Strategy for $1M+ Earners'],
    ['about-us', aboutMetadata, 'About Us'],
    ['how-it-works', howItWorksMetadata, 'How It Works'],
    ['faqs', faqsMetadata, 'FAQs'],
    ['contact', contactMetadata, 'Contact'],
    ['booking-confirmed', bookingConfirmedMetadata, "You're Booked"],
    ['schedule-a', scheduleAMetadata, 'Book a Consultation'],
    ['schedule-b', scheduleBMetadata, 'Book a Consultation'],
    ['schedule-c', scheduleCMetadata, 'Book a Consultation'],
    ['privacy', privacyMetadata, 'Privacy Policy'],
    ['terms', termsMetadata, 'Terms of Service'],
    ['disclosures', disclosuresMetadata, 'Disclosures'],
  ] as const)(
    '%s exports a page-specific title segment',
    (_route, metadata, expectedSegment) => {
      expect(metadata.title).toBe(expectedSegment)
    }
  )

  it.each([
    ['home', homeMetadata, 'Tax Strategy for $1M+ Earners | Prime Path Advisory'],
    ['about-us', aboutMetadata, 'About Us | Prime Path Advisory'],
    ['how-it-works', howItWorksMetadata, 'How It Works | Prime Path Advisory'],
    ['faqs', faqsMetadata, 'FAQs | Prime Path Advisory'],
    ['contact', contactMetadata, 'Contact | Prime Path Advisory'],
    ['booking-confirmed', bookingConfirmedMetadata, "You're Booked | Prime Path Advisory"],
    ['schedule-a', scheduleAMetadata, 'Book a Consultation | Prime Path Advisory'],
    ['schedule-b', scheduleBMetadata, 'Book a Consultation | Prime Path Advisory'],
    ['schedule-c', scheduleCMetadata, 'Book a Consultation | Prime Path Advisory'],
    ['privacy', privacyMetadata, 'Privacy Policy | Prime Path Advisory'],
    ['terms', termsMetadata, 'Terms of Service | Prime Path Advisory'],
    ['disclosures', disclosuresMetadata, 'Disclosures | Prime Path Advisory'],
  ] as const)(
    '%s resolves to the expected browser tab title',
    (_route, metadata, expectedTabTitle) => {
      expect(resolveDocumentTitle(metadata.title, mainLayoutMetadata.title)).toBe(expectedTabTitle)
    }
  )
})
