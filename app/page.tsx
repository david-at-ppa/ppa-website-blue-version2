import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <header className="flex items-center gap-3">
        <svg
          className="h-6 w-auto"
          viewBox="0 0 64 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Prime Path Advisory logo"
        >
          <path d="M2 12 L34 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
          <path d="M26 5 L34 12 L26 19" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="miter" strokeLinecap="square" />
          <path d="M62 12 L30 12" stroke="#0d7c54" strokeWidth="2.4" strokeLinecap="square" />
          <path d="M38 5 L30 12 L38 19" stroke="#0d7c54" strokeWidth="2.4" strokeLinejoin="miter" strokeLinecap="square" />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="font-semibold tracking-tight">Prime Path</span>
          <span className="text-xs tracking-widest uppercase font-mono">ADVISORY</span>
        </div>
      </header>
      <Button className="mt-8">Book a Call</Button>
    </main>
  )
}
