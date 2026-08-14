import Link from 'next/link'

const bodyClass = 'mb-6 text-base leading-relaxed text-muted-foreground'
const h2Class = 'mt-12 mb-4 text-2xl font-normal tracking-tight text-foreground first:mt-0'
const linkClass = 'text-foreground underline underline-offset-4 hover:text-primary transition-colors'

export function TermsContent() {
  return (
    <div className="max-w-[720px] text-left">
      <p className={`${bodyClass} text-sm`}>Last updated: August 14, 2026</p>
      <p className={bodyClass}>
        These terms govern your use of primepathadvisory.com and any related pages, forms, booking
        tools, chat, and messaging operated by Prime Path Advisory, Inc. (&quot;Prime Path,&quot;
        &quot;we,&quot; &quot;us&quot;). By using this website, you agree to them. If you do not
        agree, do not use the site.
      </p>
      <p className={bodyClass}>
        These terms cover the website only. Our services are governed by the written engagement
        agreement signed by each client. Where these terms and a signed engagement agreement differ,
        the engagement agreement controls.
      </p>

      <h2 className={h2Class}>1. No advisory relationship</h2>
      <p className={bodyClass}>
        Using this website, submitting a form, booking a call, or messaging us does not create a
        client, advisory, or fiduciary relationship, and does not obligate us to provide services. An
        engagement begins only when a written agreement is signed by both parties and the applicable
        fee is paid. Content on this site is general educational information, not individualized tax,
        legal, accounting, or investment advice. See our{' '}
        <Link href="/disclosures" className={linkClass}>
          Disclosures
        </Link>
        .
      </p>

      <h2 className={h2Class}>2. Eligibility and acceptable use</h2>
      <p className={bodyClass}>
        You must be at least 18 and able to enter a binding contract. Our services are offered only
        in the United States.
      </p>
      <p className={bodyClass}>
        You agree not to: use the site for any unlawful purpose; scrape, crawl, harvest, or
        bulk-download content by automated means; copy, republish, resell, or create derivative works
        from our materials; attempt to access accounts, systems, or data you are not authorized to
        access; probe, disrupt, or overload the site; upload malware; impersonate any person; or use
        our content to train a machine learning model without our written permission.
      </p>

      <h2 className={h2Class}>3. Bookings and calls</h2>
      <p className={bodyClass}>
        Consultations are scheduled subject to availability and may be rescheduled or declined at our
        discretion. We may decline to work with anyone, for any lawful reason. Calls may be recorded
        for quality, training, and note-taking purposes; where recording occurs you will be notified
        at the start of the call and may decline. No personalized recommendations or pricing are
        provided before a review of your actual financial information.
      </p>

      <h2 className={h2Class}>4. Communications and text messaging</h2>
      <p className={bodyClass}>
        By providing your phone number or email, you consent to receive communications from us about
        your inquiry and our services, including calls, emails, and text messages, which may be sent
        using automated technology. Consent is not a condition of purchase. Message and data rates may
        apply and message frequency varies. Reply STOP to any text to opt out and HELP for help. You
        may unsubscribe from marketing email using the link in any message. We may still send
        transactional messages relating to a scheduled call or an active engagement.
      </p>

      <h2 className={h2Class}>5. Information you provide</h2>
      <p className={bodyClass}>
        You are responsible for the accuracy and completeness of information you give us. Our work
        depends on it, and inaccurate or incomplete information affects the reliability of any
        analysis and may void guarantees described in the engagement agreement. Do not send Social
        Security numbers, tax documents, or other sensitive information through unsecured channels or
        before you are engaged as a client. Our handling of personal information is described in our{' '}
        <Link href="/privacy" className={linkClass}>
          Privacy Policy
        </Link>
        .
      </p>

      <h2 className={h2Class}>6. Fees</h2>
      <p className={bodyClass}>
        Fees for services are quoted in writing and set out in the engagement agreement. Payment
        terms, refunds, and any guarantee are governed solely by that agreement. We do not publish
        pricing on this website, and nothing here is a quote or an offer of price.
      </p>

      <h2 className={h2Class}>7. Intellectual property</h2>
      <p className={bodyClass}>
        The site and its content - text, graphics, logos, video, frameworks, checklists, calculators,
        and downloadable materials - are owned by Prime Path or its licensors and are protected by
        copyright, trademark, and other laws. You may view and print content for your own personal,
        non-commercial use. All other rights are reserved. &quot;Prime Path Advisory&quot; and our logo
        are our marks; other marks belong to their owners and their appearance does not imply
        endorsement or affiliation.
      </p>
      <p className={bodyClass}>
        If you send us feedback, suggestions, or ideas, you grant us an unrestricted, royalty-free
        right to use them without obligation to you.
      </p>

      <h2 className={h2Class}>8. Third-party links, tools, and providers</h2>
      <p className={bodyClass}>
        The site links to and embeds third-party services, including scheduling, payment, video,
        messaging, and analytics providers. Those services are governed by their own terms and
        privacy policies. We do not control third-party content or services and are not responsible
        for them. Strategies implemented through partner firms, vendors, sponsors, or appraisers are
        the responsibility of those parties, subject to their own agreements.
      </p>

      <h2 className={h2Class}>9. Disclaimer of warranties</h2>
      <p className={bodyClass}>
        The site and its content are provided &quot;as is&quot; and &quot;as available,&quot; without
        warranties of any kind, express or implied, including merchantability, fitness for a
        particular purpose, non-infringement, accuracy, or availability. We do not warrant that the
        site will be uninterrupted, secure, or error-free, or that its content is current or complete.
        Tax law changes, and content may become outdated without notice.
      </p>

      <h2 className={h2Class}>10. Limitation of liability</h2>
      <p className={bodyClass}>
        To the fullest extent permitted by law, Prime Path and its officers, employees, and agents are
        not liable for any indirect, incidental, special, consequential, exemplary, or punitive
        damages, or for lost profits, lost tax benefits, or lost data, arising from your use of this
        website or reliance on its content, even if advised of the possibility. Our total liability
        arising from the website will not exceed one hundred U.S. dollars ($100). Liability arising
        from services we perform under a signed engagement agreement is governed by that agreement, not
        by this section. Nothing here limits liability that cannot be limited by law.
      </p>

      <h2 className={h2Class}>11. Indemnification</h2>
      <p className={bodyClass}>
        You agree to indemnify and hold harmless Prime Path and its officers, employees, and agents
        from any claim, loss, or expense, including reasonable attorneys&apos; fees, arising from your
        misuse of the site, your violation of these terms, or your violation of any law or third-party
        right.
      </p>

      <h2 className={h2Class}>12. Governing law and dispute resolution</h2>
      <p className={bodyClass}>
        These terms are governed by the laws of the State of California, without regard to
        conflict-of-laws rules.
      </p>
      <p className={bodyClass}>
        Any dispute arising from these terms or your use of this website will first be addressed
        through good-faith negotiation, then mediation, and if unresolved, by binding arbitration
        administered by the American Arbitration Association under its applicable rules, seated in Los
        Angeles County, California. Judgment on the award may be entered in any court of competent
        jurisdiction. You and Prime Path each waive the right to a jury trial and agree that disputes
        will be resolved individually, not as a class action or on a representative basis. Either party
        may seek injunctive relief in court to protect intellectual property or confidential
        information.
      </p>

      <h2 className={h2Class}>13. Termination</h2>
      <p className={bodyClass}>
        We may suspend or terminate access to the site at any time, without notice, for any reason,
        including a breach of these terms.
      </p>

      <h2 className={h2Class}>14. Changes to these terms</h2>
      <p className={bodyClass}>
        We may update these terms at any time by posting a revised version on this page. Continued use
        of the site after a change means you accept it.
      </p>

      <h2 className={h2Class}>15. Miscellaneous</h2>
      <p className={bodyClass}>
        If any provision of these terms is found unenforceable, the rest remain in effect. Our failure
        to enforce a provision is not a waiver of it. These terms, together with our{' '}
        <Link href="/privacy" className={linkClass}>
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link href="/disclosures" className={linkClass}>
          Disclosures
        </Link>
        , are the entire agreement between you and Prime Path regarding this website. You may
        not assign these terms; we may assign them in connection with a merger, acquisition, or sale of
        assets.
      </p>

      <h2 className={h2Class}>16. Contact</h2>
      <p className={bodyClass}>
        Prime Path Advisory, Inc.
        <br />
        3435 Wilshire Blvd, Ste 1400, Los Angeles, CA 90010
        <br />
        Email: david@primepathadvisory.com
      </p>
    </div>
  )
}
