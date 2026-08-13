import type { Metadata } from 'next'
import { HeritageFaqSection } from '@/components/heritage/heritage-faq-section'

export const metadata: Metadata = {
  title: 'FAQs - Prime Path Advisory',
  description:
    'Everything you need to know about Prime Path Advisory - tax strategy for high-income W-2 professionals.',
}

export default function Faqs() {
  return <HeritageFaqSection pageHeading />
}
