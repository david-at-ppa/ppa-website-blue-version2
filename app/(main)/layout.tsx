import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ScrollRevealInit } from '@/components/scroll-reveal'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRevealInit />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
