import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { AttributionCapture } from '@/components/attribution-capture'
import { TrackingScripts } from '@/components/tracking-scripts'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Prime Path Advisory',
  description: 'Tax strategy for high-income earners.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="heritage" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-transparent">
        <AttributionCapture />
        <TrackingScripts />
        {children}
      </body>
    </html>
  )
}
