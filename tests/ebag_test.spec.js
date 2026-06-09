import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ebag.bg/en/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.getByRole('link', { name: 'Offers' }).click();
  //await page.getByRole('article').filter({ hasText: '500 gCherry TomatoesEUR 2.' }).getByLabel('Add to favorites').click();
  await page.getByRole('button', { name: 'Add' }).nth(2).click();
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.getByRole('link', { name: 'Herring Fillet Ocean Pick Natural', exact: true }).click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('heading', { name: 'Bulgarian product Herring' })).toBeVisible();
  await expect(page.locator('h2')).toContainText('Bulgarian productHerring Fillet Ocean Pick Natural');
});