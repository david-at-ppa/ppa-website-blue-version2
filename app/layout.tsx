import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import { TrackingScripts } from '@/components/tracking-scripts'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
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
    <html lang="en" data-theme="heritage" className={`${inter.variable} ${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-transparent">
        <TrackingScripts />
        {children}
      </body>
    </html>
  )
}
