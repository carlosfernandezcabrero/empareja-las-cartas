import { expect, test } from '@playwright/test'

test.describe('Auth page tests', () => {
  test.describe('Sign in', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/menu/signin')
    })

    test('Should go to game page when choose play as guess', async ({
      page
    }) => {
      await page.locator('a[href="/game"]').click()
      await page.waitForURL('/game')
    })

    test('Should go to auth0 login when choose login', async ({ page }) => {
      test.setTimeout(10000)
      await page.getByRole('link', { name: 'Continuar' }).click()

      await expect(
        page.getByLabel('Username or email address', {
          exact: true
        })
      ).toBeVisible()
      await expect(
        page.getByLabel('Password', {
          exact: true
        })
      ).toBeVisible()
    })
  })
})
