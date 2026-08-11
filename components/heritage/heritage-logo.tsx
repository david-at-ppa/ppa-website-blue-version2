import Link from 'next/link'

export function HeritageLogo({ href = '/heritage' }: { href?: string }) {
  return (
    <Link
      href={href}
      aria-label="Prime Path Advisory home"
      className="logo"
    >
      <svg
        className="logo-mark"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ppGold" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E4C77D" />
            <stop offset="1" stopColor="#C9A24B" />
          </linearGradient>
        </defs>
        <rect
          x="1.25"
          y="1.25"
          width="37.5"
          height="37.5"
          rx="10.5"
          stroke="url(#ppGold)"
          strokeWidth="1.5"
        />
        <path
          d="M10 27 L18 19 L23 24 L31 13"
          stroke="url(#ppGold)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="31" cy="13" r="2.6" fill="url(#ppGold)" />
      </svg>
      <span className="logo-word">
        <b>Prime Path</b>
        <span>Advisory</span>
      </span>
    </Link>
  )
}
