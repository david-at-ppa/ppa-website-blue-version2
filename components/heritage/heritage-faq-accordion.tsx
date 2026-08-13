'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/utils'
import type { HeritageFaqItem } from '@/lib/heritage-content'

function FaqItem({ question, answers }: HeritageFaqItem) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300',
        open && 'shadow-md'
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-xl px-6 py-5 text-left md:px-7 md:py-6"
      >
        <span className="font-heading text-base font-bold leading-snug md:text-lg">{question}</span>
        <span
          aria-hidden="true"
          className={cn(
            'flex size-7 shrink-0 items-center justify-center text-xl text-primary transition-transform duration-300 ease-out',
            open && 'rotate-45'
          )}
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              'space-y-3 border-t border-border px-6 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground transition-opacity duration-300 ease-out md:px-7 md:text-base',
              open ? 'opacity-100' : 'opacity-0'
            )}
          >
            {answers.map((answer) => (
              <p key={answer}>{answer}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeritageFaqAccordion({ items }: { items: HeritageFaqItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <FaqItem key={item.question} {...item} />
      ))}
    </div>
  )
}
