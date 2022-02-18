import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  workers: 1,
  use: {
    trace: 'retain-on-failure'
  },
  testMatch: 'e2e/*.test.ts'
}
export default config
