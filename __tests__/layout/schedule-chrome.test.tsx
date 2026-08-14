import { render, screen } from '@testing-library/react'
import MainLayout from '@/app/(main)/layout'
import ScheduleA from '@/app/(main)/schedule-a/page'

vi.mock('next/navigation', () => ({
  usePathname: () => '/schedule-a',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}))

describe('Schedule page chrome', () => {
  it('renders booking-focused chrome without nav distractions', () => {
    render(
      <MainLayout>
        <ScheduleA />
      </MainLayout>
    )

    expect(screen.getByRole('link', { name: /prime path advisory/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
    expect(screen.getByText('© 2026 Prime Path Advisory. All rights reserved.')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /about us/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /book a call/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /open menu/i })).not.toBeInTheDocument()
  })
})
