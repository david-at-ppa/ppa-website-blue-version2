import fs from 'fs'
import path from 'path'
import * as si from 'simple-icons'

const brands = {
  alphabet: 'google',
  meta: 'meta',
  netflix: 'netflix',
  uber: 'uber',
  apple: 'apple',
  nvidia: 'nvidia',
  amazon: 'amazon',
  doordash: 'doordash',
  linkedin: 'linkedin',
  broadcom: 'broadcom',
  stripe: 'stripe',
  ebay: 'ebay',
  oracle: 'oracle',
  coinbase: 'coinbase',
  adobe: 'adobe',
  delta: 'delta',
  microsoft: 'microsoft',
  intuit: 'intuit',
  salesforce: 'salesforce',
}

const outDir = path.join('public', 'logos')

for (const [file, slug] of Object.entries(brands)) {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`
  const icon = si[key]
  if (!icon) {
    console.log('MISSING', slug)
    continue
  }
  const color = icon.hex.startsWith('#') ? icon.hex : `#${icon.hex}`
  const title = file === 'alphabet' ? 'Alphabet' : icon.title
  const svg = `<svg fill="${color}" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${title}</title><path d="${icon.path}"/></svg>`
  fs.writeFileSync(path.join(outDir, `${file}.svg`), svg)
  console.log('OK', file, color)
}

// Microsoft: use official four-color mark for richer brand display
fs.writeFileSync(
  path.join(outDir, 'microsoft.svg'),
  `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Microsoft</title><path fill="#F25022" d="M0 0h11.377v11.372H0z"/><path fill="#7FBA00" d="M12.623 0H24v11.372H12.623z"/><path fill="#00A4EF" d="M0 12.623h11.377V24H0z"/><path fill="#FFB900" d="M12.623 12.623H24V24H12.623z"/></svg>`
)
console.log('OK', 'microsoft', 'multicolor')

// Alphabet: use multicolor Google mark
fs.writeFileSync(
  path.join(outDir, 'alphabet.svg'),
  `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Alphabet</title><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72 0-1.064.18-2.087.512-3.043z"/><path fill="#FBBC05" d="M6.772 14.683A8.203 8.203 0 015.4 12c0-.855.16-1.674.452-2.427z"/><path fill="#EA4335" d="M12.48 4.64c1.403 0 2.653.483 3.64 1.426l2.732-2.732C18.083 1.964 15.429 0 12.48 0 7.667 0 3.213 3.237 1.24 7.713l3.044 2.363C5.267 6.447 8.613 4.64 12.48 4.64z"/></svg>`
)
console.log('OK', 'alphabet', 'multicolor')
