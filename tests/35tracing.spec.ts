//35tracing.spec.ts

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Shopping cart (0)' })).toBeVisible();
  await page.getByText('Register Log in Shopping cart (0) Wishlist (0) You have no items in your').click();
  await expect(page.locator('body')).toContainText('Register');
  await page.goto('https://demowebshop.tricentis.com/cart');
  await page.getByRole('link', { name: 'Tricentis Demo Web Shop' }).click();
  await expect(page.locator('body')).toContainText('Welcome to our store');
  await expect(page.locator('#newsletter-email')).toBeVisible();
  
  await page.getByText('Featured products').click();
  
});