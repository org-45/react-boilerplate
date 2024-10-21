import { test, expect } from '@playwright/test'

test.describe('Navbar Component', () => {
  test('should show the links on desktop and toggle mobile menu', async ({ page }) => {
    await page.goto('/')

    await page.setViewportSize({ width: 1280, height: 800 })
    await expect(page.locator('nav .md\\:flex a[href="#home"]')).toBeVisible()
    await expect(page.locator('nav .md\\:flex a[href="/market"]')).toBeVisible()
    await expect(page.locator('nav .md\\:flex a[href="/admin"]')).toBeVisible()
    await expect(page.locator('nav .md\\:flex a[href="/login"]')).toBeVisible()

    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator('nav .md\\:hidden a[href="#home"]')).toBeHidden()
    await expect(page.locator('nav .md\\:hidden a[href="/market"]')).toBeHidden()
    await expect(page.locator('nav .md\\:hidden a[href="/admin"]')).toBeHidden()
    await expect(page.locator('nav .md\\:hidden a[href="/login"]')).toBeHidden()

    await page.click('button:text("≡")')
    await expect(page.locator('nav .md\\:hidden a[href="#home"]')).toBeVisible()
    await expect(page.locator('nav .md\\:hidden a[href="/market"]')).toBeVisible()
    await expect(page.locator('nav .md\\:hidden a[href="/admin"]')).toBeVisible()
    await expect(page.locator('nav .md\\:hidden a[href="/login"]')).toBeVisible()

    await page.click('button:text("≡")')
    await expect(page.locator('nav .md\\:hidden a[href="#home"]')).toBeHidden()
    await expect(page.locator('nav .md\\:hidden a[href="/market"]')).toBeHidden()
    await expect(page.locator('nav .md\\:hidden a[href="/admin"]')).toBeHidden()
    await expect(page.locator('nav .md\\:hidden a[href="/login"]')).toBeHidden()
  })
})
