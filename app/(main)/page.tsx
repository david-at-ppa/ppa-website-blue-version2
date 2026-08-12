import type { Metadata } from 'next'
import { HeritageHome } from '@/components/heritage/heritage-home'

export const metadata: Metadata = {
  title: 'Prime Path Advisory — Proactive Tax Strategy for High-Income W-2 Earners',
  description:
    'Prime Path Advisory is a done-for-you tax optimization firm for W-2 professionals earning $1M+. We uncover the legal strategies that keep more money in your pocket—every single year.',
}

export default function Home() {
  return <HeritageHome />
}
