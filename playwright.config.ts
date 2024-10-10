import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e', // Directory where tests are located
  timeout: 30000, // Timeout per test (30 seconds)
  retries: 1, // Retry failed tests once
  use: {
    headless: true, // Set this to false if you want to see the browser while testing
    baseURL: 'http://localhost:5173', // Ensure your app is running here
    viewport: { width: 1280, height: 720 },
  },
})
