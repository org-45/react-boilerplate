import { test, expect } from '@playwright/test';

test.describe('Navbar Tests', () => {
  test.beforeEach(async ({ page }) => {
	await page.goto('/');
  });

  test('should contain the correct nav items', async ({ page }) => {
    const homeLink = await page.locator('a[href="#home"]');
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveText('Home');

    const aboutLink = await page.locator('a[href="#about"]');
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveText('About');

    const servicesLink = await page.locator('a[href="#services"]');
    await expect(servicesLink).toBeVisible();
    await expect(servicesLink).toHaveText('Services');

    const contactLink = await page.locator('a[href="#contact"]');
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveText('Contact');
  });
});
