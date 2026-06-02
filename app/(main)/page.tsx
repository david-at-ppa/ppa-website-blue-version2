import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <h1 className="text-5xl font-semibold tracking-tight">Keep More of What You Earn</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        Proactive tax strategy for business owners earning $1M+. Placeholder copy.
      </p>
      <Link href="/book" className={cn(buttonVariants(), 'mt-8')}>
        Book a Call
      </Link>
    </section>
  )
}
