'use client'

import { useState } from 'react'
import { HERITAGE_FAQ } from '@/lib/heritage-content'

export function HeritageFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="faq reveal">
      {HERITAGE_FAQ.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span className="pm" aria-hidden="true" />
            </button>
            <div
              className="faq-a"
              style={{ maxHeight: isOpen ? '800px' : '0px' }}
            >
              <div className="faq-a-inner">
                {item.answers.map((answer) => (
                  <p key={answer}>{answer}</p>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
