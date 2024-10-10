import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
	await page.goto('/');
  });

  test('should display project showcase text on the homepage', async ({ page }) => {
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Write something about your project, app, or anything you want to showcase.');
  });
});
