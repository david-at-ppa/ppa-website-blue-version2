export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="text-foreground">
        <path d="M2 12 L34 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
        <path
          d="M26 5 L34 12 L26 19"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
      </g>
      <g className="text-primary">
        <path d="M62 12 L30 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
        <path
          d="M38 5 L30 12 L38 19"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />
      </g>
    </svg>
  )
}
