export const HERITAGE_ASSESSMENT_ID = 'assessment'
export const HERITAGE_ASSESSMENT_LINK = `/heritage#${HERITAGE_ASSESSMENT_ID}`
/** Same-page anchor on /heritage */
export const HERITAGE_ASSESSMENT_HREF = `#${HERITAGE_ASSESSMENT_ID}`

export const HERITAGE_INCOME_OPTIONS = [
  { label: 'Less than $1,000,000', href: '/book' },
  { label: '$1,000,000 – $2,000,000', href: '/book' },
  { label: '$2,000,000 – $4,000,000', href: '/book' },
  { label: '$4,000,000+', href: '/book' },
] as const

export const HERITAGE_STATS = [
  { figure: '$47M+', label: 'saved across 140+ clients', sub: 'Verified by independent CPA' },
  { figure: '$312k', label: 'avg. annual savings', sub: "In client's first year" },
  { figure: '8 yrs', label: 'in private practice', sub: 'Est. 2024 · Los Angeles' },
] as const

export const HERITAGE_CLIENT_LOGOS = [
  { name: 'Google', src: '/logos/google.svg' },
  { name: 'Apple', src: '/logos/apple.svg' },
  { name: 'Netflix', src: '/logos/netflix.svg' },
  { name: 'Meta', src: '/logos/meta.svg' },
  { name: 'Amazon', src: '/logos/amazon.svg' },
  { name: 'Nvidia', src: '/logos/nvidia.svg' },
  { name: 'Microsoft', src: '/logos/microsoft.svg' },
] as const

export const HERITAGE_TRUSTED_ORGS = [
  'Google',
  'Uber',
  'Meta',
  'Amazon',
  'Salesforce',
  'Nvidia',
  'Stripe',
] as const

export const HERITAGE_SERVICES = [
  {
    title: 'Proactive Tax Planning & Education',
    body: 'Year-round planning, clear explanations, and simple choices with no last-minute surprises.',
    icon: 'chart',
  },
  {
    title: 'Done-For-You Implementation',
    body: 'We research, design, and execute strategies so you do not have to become a tax expert.',
    icon: 'layers',
  },
  {
    title: 'Attorney & CPA Led',
    body: 'Tax attorneys, accountants, and compliance experts coordinating year-round for optimal tax planning.',
    icon: 'shield',
  },
  {
    title: 'High-Impact Results',
    body: 'Proven strategies designed to unlock typical annual savings of $50K–$250K for high-income professionals.',
    icon: 'clock',
  },
  {
    title: 'Entity Strategy & Structuring',
    body: 'We analyze and optimize your entity structure to uncover missed opportunities and legal strategies your current setup is missing.',
    icon: 'grid',
  },
  {
    title: 'Priority Support & Defense',
    body: 'Benefit from responsive concierge service and comprehensive audit protection, ensuring your plan is compliant, documented, and defensible.',
    icon: 'headset',
  },
] as const

export const HERITAGE_OUTCOMES = [
  {
    tag: 'Tech Executive · W-2 + RSUs',
    figure: '$180K+',
    body: 'Coordinated entity structuring and investment timing reduced annual liability while keeping everything fully documented and defensible.',
  },
  {
    tag: 'Dual-Income Household',
    figure: '$220K+',
    body: "Secondary income structures and advanced strategies unlocked breaks the couple's prior CPA never surfaced.",
  },
  {
    tag: 'Sales Leader · Equity Comp',
    figure: '300%+',
    body: 'Average return on strategy fees—turning a reactive filing relationship into a year-round, proactive plan.',
  },
] as const

export type HeritageFaqItem = {
  question: string
  answers: string[]
}

export const HERITAGE_FAQ: HeritageFaqItem[] = [
  {
    question: 'Why do high-income earners overpay so much in taxes?',
    answers: [
      'Because no one ever showed you how to stop it. Most people think their CPA is optimizing their taxes, but CPAs are trained in compliance, not strategy. They focus on filling in forms, not minimizing your liability.',
      "The wealthiest people don't pay more than they have to because they use strategic tax planning—and so should you. How much have you already lost? The answer is probably worse than you think.",
    ],
  },
  {
    question: 'How much can I actually save on taxes?',
    answers: [
      'For most high-income professionals, we reduce tax liability by at least $50K–$150K per year—sometimes much more. The exact amount depends on your income structure (salary, investments, stock options, real estate), how much of your tax situation is currently unoptimized, and how aggressively we apply advanced tax strategies.',
      "Bottom line: if you're making six or seven figures, you're almost certainly overpaying by a massive amount. The question isn't \"if\" you can save—it's how much.",
    ],
  },
  {
    question: "What's the difference between a CPA and what you do?",
    answers: [
      "A CPA's job is to prepare your tax return and keep you compliant. Our job is to ensure you never overpay again. Most CPAs work reactively—they tell you what you owe after it's too late to change it. They don't specialize in tax reduction strategies, and aren't proactive in restructuring your tax situation for maximum savings.",
      "At Prime Path Advisory, we engineer a tax strategy that legally slashes your tax bill year after year—something most CPAs won't even attempt. If your CPA has never actively designed a tax strategy for you, you are overpaying. Period.",
    ],
  },
  {
    question: "I'm a W-2 employee. Can I still lower my taxes?",
    answers: [
      "Yes. Most W-2 earners think they're stuck, but they're wrong. The IRS wants you to believe that being a W-2 employee means you have no tax-saving options. That's not true.",
      "We use advanced tax strategies that let W-2 earners apply investment structures to reduce tax liability, create secondary income streams that unlock massive tax breaks, and use real estate, corporate structures, and other strategies that the wealthy use to protect their money. Most W-2 earners are overpaying by five to six figures a year—simply because no one told them the game they are playing. We change that.",
    ],
  },
  {
    question: 'What happens if I do nothing?',
    answers: [
      "You'll keep bleeding money, year after year. You will continue giving the IRS an extra $50K, $100K, or more—every single year. You will retire with far less than you should have. You will look back in 10 years and realize you could have fixed this—but didn't.",
      "If you could permanently solve this problem today, why wouldn't you?",
    ],
  },
  {
    question: 'How does your process work?',
    answers: [
      "We don't do cookie-cutter tax filing. We engineer a permanent system to keep more of your income, legally. First, we analyze your current tax situation and identify leaks. Then we design a customized tax strategy to legally minimize your liability. We execute the strategy, ensuring everything is compliant and optimized. Finally, we monitor and adjust your tax plan year-round to keep you ahead.",
      "This isn't a one-time fix. This is a system that works for life.",
    ],
  },
  {
    question: 'Do you handle my tax filing, too?',
    answers: [
      "Yes. While many clients keep their CPAs for filing, we also offer tax preparation services to ensure everything is implemented correctly. If your CPA is just copy-pasting your tax returns every year, they're leaving money on the table. It's time to stop overpaying—we handle the strategy and the execution.",
    ],
  },
  {
    question: 'How long does it take to see results?',
    answers: [
      'Immediate tax savings happen within the first year. Some strategies can be implemented within weeks, while others are structured for long-term optimization. Most clients see a dramatic reduction in tax liability before their next filing deadline.',
      'Every day you wait is another day you lose money. The sooner you start, the more you save.',
    ],
  },
]
