import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const EXE = '/Users/berto_barata/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const OUT = path.resolve(fileURLToPath(new URL('../public/images/projects', import.meta.url)));

const sites = [
  { slug: 'caonarua',       url: 'https://caonarua.pt' },
  { slug: 'gentlelaughter', url: 'https://gentlelaughter.com' },
  { slug: 'greenbond',      url: 'https://greenbond.pt' },
  { slug: 'barbearia',      url: 'https://bertobarata.github.io/barbearia-supra/' },
  { slug: 'baratastudio',   url: 'https://baratastudio.com' },
  { slug: 'salestracker',   url: 'https://sales-tracker-red.vercel.app' },
];

const COOKIE_TEXTS = ['Aceitar', 'Aceito', 'Accept', 'Concordo', 'Aceitar tudo', 'OK', 'Entendi', 'Fechar'];

const browser = await chromium.launch({ executablePath: EXE });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
});

for (const { slug, url } of sites) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(() => {});
    // dismiss cookie banners
    for (const t of COOKIE_TEXTS) {
      const btn = page.getByRole('button', { name: t, exact: false }).first();
      if (await btn.count().catch(() => 0)) {
        await btn.click({ timeout: 1500 }).catch(() => {});
        break;
      }
    }
    // trigger scroll-reveal animations, then back to top
    await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      for (let y = 0; y <= document.body.scrollHeight; y += window.innerHeight) {
        window.scrollTo(0, y); await sleep(120);
      }
      window.scrollTo(0, 0); await sleep(400);
    });
    // hide any leftover fixed cookie/overlay bars
    await page.addStyleTag({ content: `[class*="cookie" i],[id*="cookie" i],[class*="consent" i],[class*="gdpr" i],[class*="whatsapp" i],[href*="wa.me" i],[class*="lang" i][class*="float" i]{display:none!important}` }).catch(() => {});
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1400);
    await page.screenshot({ path: path.join(OUT, `${slug}.png`), fullPage: true });
    console.log(`✓ ${slug}`);
  } catch (e) {
    console.log(`✗ ${slug}: ${e.message}`);
  } finally {
    await page.close();
  }
}
await browser.close();
