const {defineConfig, devices} = require("@playwright/test");

module.exports = defineConfig({
    fullyParallel: true,
    testDir: './tests',
    testMatch: '**/*.spec.ts',
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']}
        }
    ],
        reporter: [
        ['html', { open: 'never' }],
        ['allure-playwright',{ outputFolder: 'allure-results' }],
    ],
    use: {
      baseURL:'https://demowebshop.tricentis.com/',
      ignoreHTTPSErrors: true,
      actionTimeout: 10000,
      navigationTimeout: 15000,
      headless: false,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        video: 'retain-on-failure'
    }
});