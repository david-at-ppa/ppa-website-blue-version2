import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://www.shopify.com/ph', { waitUntil: 'networkidle', timeout: 30000 });

const fonts = await page.evaluate(() => {
  const results = [];
  const seen = new Set();
  const selectors = ['h1','h2','h3','h4','h5','h6','p','body','nav a','button','a','span'];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      const cs = window.getComputedStyle(el);
      const key = cs.fontFamily + '|' + cs.fontSize + '|' + cs.fontWeight;
      if (!seen.has(key)) {
        seen.add(key);
        results.push({
          selector: sel,
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          sample: el.textContent.trim().slice(0, 60)
        });
      }
    });
  });
  return results;
});

fonts.forEach(f => console.log(JSON.stringify(f)));
await browser.close();
