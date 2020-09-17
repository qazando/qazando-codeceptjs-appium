exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'iOS',
      app: '/Users/eduardo.finotti/Desktop/qazandoapp.app',
      desiredCapabilities: {
        deviceName: 'iPhone 11 Pro Max',
        platformVersion: '13.1'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: './server/server.js',
  teardown: './server/server.js',
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  name: 'qazando-automation',
  tests: './steps/*_test.js'
}