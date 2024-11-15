export const testDir = 'tests'
export const timeout = 60000
export const retries = 0
export const workers = 1
export const fullyParallel = true;

export const reporter = [
	['html'],
	['junit', { outputFile: 'results.xml' }],
	['allure-playwright']
]

export const globalSetup = require.resolve('./global-setup.js');

export const projects = [
    {
      name: 'chrome',
      use: {
        browserName: `chromium`,
        channel: `chrome`,
        headless: false,
        viewport: { width: 1720, height: 850 },
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`
      }
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     browserName: `firefox`,
    //     viewport: { width: 1720, height: 850 },
    //     ignoreHTTPSErrors: true,
    //     headless: true,
    //     screenshot: `only-on-failure`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`,
    //     launchOptions: {
    //       slowMo: 200
    //     }
    //   }
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     browserName: `webkit`,
    //     headless: false,
    //     viewport: { width: 1720, height: 850 },
    //     ignoreHTTPSErrors: true,
    //     screenshot: `only-on-failure`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`
    //   }
    // },

    // {
    //   name: `Edge`,
    //   use: {
    //     browserName: `chromium`,
    //     channel: `msedge`,
    //     headless: false,
    //     viewport: { width: 1720, height: 850 },
    //     ignoreHTTPSErrors: true,
    //     screenshot: `only-on-failure`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`,
    //     launchOptions: {
    //       slowMo: 100
    //     }
    //   }
    // }
  ]