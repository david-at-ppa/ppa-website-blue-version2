import fs from 'fs'

const src = fs.readFileSync('components/heritage/heritage-styles.css', 'utf8')

const heritageStart = src.indexOf(':root[data-theme="heritage"]')
const heritageEnd = src.indexOf('}', heritageStart) + 1
let heritageVars = src.slice(heritageStart, heritageEnd).replace(
  ':root[data-theme="heritage"]',
  '[data-theme="heritage"]'
)

const rest = src.slice(src.indexOf('/* ---------- Reset ---------- */'))

function prefixSelectors(css) {
  return css.replace(/([^{}@]+)\{/g, (full, selector) => {
    const s = selector.trim()
    if (!s || s.startsWith('@') || s.startsWith('[data-theme="heritage"]')) return full
    if (s === '*') return full
  const parts = s.split(',').map((part) => {
      const p = part.trim()
      if (p.startsWith('[data-theme="heritage"]')) return p
      return `[data-theme="heritage"] ${p}`
    })
    return `${parts.join(', ')} {`
  })
}

let scoped = rest
  .replace('/* ---------- Reset ---------- */', '')
  .replace(/^body \{/m, '[data-theme="heritage"] {')
  .replace(/^body::before \{/m, '[data-theme="heritage"]::before {')

scoped = prefixSelectors(scoped)

// Fix duplicate heritage wrapper from body + vars — merge font vars into single block
heritageVars = heritageVars.replace(
  '[data-theme="heritage"] {',
  `[data-theme="heritage"] {
  --serif: var(--font-fraunces), Georgia, "Times New Roman", serif;
  --sans: var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --maxw: 1200px;
  --gutter: clamp(20px, 5vw, 64px);
  --radius: 16px;
  --radius-lg: 22px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
`
)

// Remove second [data-theme="heritage"] block that came from body — keep properties merge manually
scoped = scoped.replace(
  /\[data-theme="heritage"] \{\s*margin: 0;\s*background: var\(--bg\);[\s\S]*?overflow-x: hidden;\s*\}/,
  ''
)

const base = `[data-theme="heritage"] {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-size: 17px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
`

const out = `/* Scoped heritage theme */\n${heritageVars}\n${base}\n${scoped}`
fs.writeFileSync('components/heritage/heritage-scoped.css', out)
console.log('ok', out.length)
