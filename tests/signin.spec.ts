import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/menu/signin')
})

test.describe('Signin page tests', () => {
  test('Should go to levels page when choose play as guess', async ({
    page
  }) => {
    await page.locator('a[href="/menu/level"]').click()
    await page.waitForURL('/menu/level')
  })

  test('Should go to auth0 login when choose login', async ({ page }) => {
    await page.locator('button').click()
    await page.waitForURL(
      '/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fmenu%2Flevel'
    )
  })
})
