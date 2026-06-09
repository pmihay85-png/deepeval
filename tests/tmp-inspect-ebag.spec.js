import { test, expect } from '@playwright/test';

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.ebag.bg/en/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(8000);
  const search = await page.$('input[type=search], input[placeholder*=search i], input[aria-label*=search i]');
  console.log('SEARCH=' + Boolean(search));
  const buttons = await page.$$eval('button, a', els => els.map(e => ({tag:e.tagName, text:e.innerText.trim().slice(0,120), role:e.getAttribute('role'), aria:e.getAttribute('aria-label'), href:e.href || null})).filter(x => x.text || x.aria).slice(0,120));
  console.log(JSON.stringify(buttons, null, 2));
  await browser.close();
})();
