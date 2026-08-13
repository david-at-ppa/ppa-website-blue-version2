import { Skeleton } from '@/components/ui/skeleton'

function LoadingStatus({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div aria-busy="true" aria-live="polite">
      <span className="sr-only">{label}</span>
      {children}
    </div>
  )
}

function PageHeaderSkeleton({ bodyLines = 1 }: { bodyLines?: number }) {
  return (
    <div className="space-y-3">
      <Skeleton className="h-3 w-28" />
      <Skeleton className="h-10 w-full max-w-lg" />
      {Array.from({ length: bodyLines }).map((_, index) => (
        <Skeleton key={index} className="h-4 w-full max-w-xl" />
      ))}
    </div>
  )
}

export function HomePageSkeleton() {
  return (
    <LoadingStatus label="Loading homepage">
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-11/12" />
            <Skeleton className="h-20 w-full max-w-xl" />
            <Skeleton className="h-14 w-full rounded-full" />
            <Skeleton className="mx-auto h-3 w-56 lg:mx-0" />
          </div>
          <div className="space-y-6">
            <Skeleton className="aspect-video w-full rounded-xl" />
            <Skeleton className="mx-auto h-3 w-40 lg:mx-0" />
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-8 lg:pb-24 lg:pt-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <PageHeaderSkeleton bodyLines={3} />
          <Skeleton className="h-80 w-full rounded-[22px]" />
        </div>
      </section>

      <section className="border-y border-border px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <Skeleton className="mx-auto h-3 w-36" />
          <Skeleton className="mx-auto h-9 w-full max-w-2xl" />
          <Skeleton className="mx-auto h-16 w-full max-w-3xl" />
        </div>
        <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-center gap-10">
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton key={index} className="h-10 w-24" />
          ))}
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <PageHeaderSkeleton bodyLines={0} />
          <Skeleton className="h-4 w-full max-w-4xl" />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <Skeleton className="h-52 w-full rounded-2xl" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 text-center lg:py-24">
        <div className="mx-auto max-w-2xl space-y-6">
          <Skeleton className="mx-auto h-3 w-24" />
          <Skeleton className="mx-auto h-12 w-full max-w-lg" />
          <Skeleton className="mx-auto h-16 w-full" />
          <Skeleton className="mx-auto h-14 w-64 rounded-full" />
        </div>
      </section>
    </LoadingStatus>
  )
}

export function AboutPageSkeleton() {
  return (
    <LoadingStatus label="Loading about page">
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
          <PageHeaderSkeleton bodyLines={4} />
          <Skeleton className="aspect-[4/5] w-full rounded-2xl md:min-h-[28rem]" />
        </div>
      </section>

      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-12">
          <PageHeaderSkeleton bodyLines={1} />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index}>
                <Skeleton className="h-72 w-full rounded-2xl" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
          <PageHeaderSkeleton bodyLines={2} />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-28 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </LoadingStatus>
  )
}

export function HowItWorksPageSkeleton() {
  return (
    <LoadingStatus label="Loading how it works page">
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          <PageHeaderSkeleton bodyLines={0} />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      </section>

      <section className="border-y border-border px-6 py-12 lg:py-14">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-3 text-center">
              <Skeleton className="mx-auto h-10 w-24" />
              <Skeleton className="mx-auto h-4 w-32" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-12">
          <PageHeaderSkeleton bodyLines={1} />
          <ul className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>
                <Skeleton className="h-40 w-full rounded-xl" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </LoadingStatus>
  )
}

export function ContactPageSkeleton() {
  return (
    <LoadingStatus label="Loading contact page">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <PageHeaderSkeleton bodyLines={1} />
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-5 w-56" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-14 w-56 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </LoadingStatus>
  )
}

export function FaqPageSkeleton() {
  return (
    <LoadingStatus label="Loading FAQs page">
      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <div className="space-y-3 text-center">
            <Skeleton className="mx-auto h-10 w-full max-w-md" />
            <Skeleton className="mx-auto h-5 w-full max-w-lg" />
          </div>
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-16 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </LoadingStatus>
  )
}

export function LegalPageSkeleton() {
  return (
    <LoadingStatus label="Loading legal page">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl space-y-8">
          <PageHeaderSkeleton bodyLines={0} />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </section>
    </LoadingStatus>
  )
}

export function SchedulePageSkeleton() {
  return (
    <LoadingStatus label="Loading schedule page">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-16">
        <Skeleton className="mb-8 h-10 w-full max-w-md" />
        <Skeleton className="h-[700px] w-full rounded-xl" />
      </div>
    </LoadingStatus>
  )
}

export function BookingConfirmedPageSkeleton() {
  return (
    <LoadingStatus label="Loading booking confirmation page">
      <div className="flex flex-col items-center px-6 py-20">
        <div className="w-full max-w-2xl space-y-12 text-center">
          <div className="space-y-4">
            <Skeleton className="mx-auto h-10 w-56" />
            <Skeleton className="mx-auto h-16 w-full max-w-xl" />
          </div>
          <div className="space-y-12">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="mx-auto h-7 w-64" />
                <Skeleton className="aspect-video w-full rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </LoadingStatus>
  )
}
