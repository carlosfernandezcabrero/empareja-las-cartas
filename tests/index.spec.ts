import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Home page tests', () => {
  test('Home page responds', async ({ page }) => {
    await expect(page).toHaveTitle(/Empareja las cartas 🃏/)
  })

  test('Home page link to levels menu', async ({ page }) => {
    await page.locator('a').click()

    const h1 = page.locator('h1')
    await expect(h1).toHaveText('Nivel de dificultad')
  })
})
