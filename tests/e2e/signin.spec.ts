import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/menu/signin')
})

test.describe('Signin page tests', () => {
  test('Should go to game page when choose play as guess', async ({ page }) => {
    await page.locator('a[href="/game"]').click()
    await page.waitForURL('/game')
  })

  test('Should go to auth0 login when choose login', async ({ page }) => {
    await page.locator('button').click()
    await page.waitForURL(
      new RegExp(/.*\/api\/auth\/signin\?callbackUrl=%2Fgame/, 'i')
    )
  })
})
