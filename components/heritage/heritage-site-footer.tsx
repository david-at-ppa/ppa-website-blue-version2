import Link from 'next/link'
import { HeritageLogo } from '@/components/heritage/heritage-logo'

export function HeritageSiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <HeritageLogo href="/heritage" />
            <p className="about">
              A done-for-you tax optimization firm for W-2 professionals earning $1M+. Proactive
              planning, expert execution, and year-round protection—centralized under one team.
            </p>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <Link href="#services">What We Do</Link>
            <Link href="#process">How It Works</Link>
            <Link href="#team">Team</Link>
            <Link href="#faq">FAQ</Link>
          </div>
          <div className="footer-col">
            <h5>Get Started</h5>
            <Link href="#assessment">Book a Call</Link>
            <Link href="#assessment">Free Assessment</Link>
            <address>
              Prime Path Advisory, Inc.
              <br />
              3435 Wilshire Blvd, Ste 1400
              <br />
              Los Angeles, CA 90010
              <br />
              United States
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Prime Path Advisory, Inc. All rights reserved.</p>
          <p>Confidential &amp; selective client intake.</p>
        </div>
        <p className="disclaimer">
          Prime Path Advisory, Inc. provides tax strategy and planning services. Content on this site
          is for informational purposes only and does not constitute legal, tax, or investment advice.
          Savings figures and outcomes are illustrative, vary by individual circumstances, and are not a
          guarantee of future results. All strategies are designed to be fully compliant with applicable
          law.
        </p>
      </div>
    </footer>
  )
}
