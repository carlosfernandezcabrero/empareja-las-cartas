import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/game?levelId=prueba')
})

test.describe('Game page tests', () => {
  test('Card should be clickable', async ({ page }) => {
    const someCard = page.locator('section button').first()
    const image = someCard.locator('img')
    const searchImageUrl = '/images/search.svg'

    expect(await image.getAttribute('src')).toStrictEqual(searchImageUrl)

    await someCard.click()

    expect(await image.getAttribute('src')).not.toStrictEqual(searchImageUrl)
  })
})
