import { expect, test } from '@playwright/test'
import levels from '../data/levels'

test.beforeEach(async ({ page }) => {
  await page.goto('/menu/level')
})

test.describe('Level page tests', () => {
  const levelsFromDb = Object.entries(levels).map(([id, { name }]) => [
    id,
    name
  ])

  test('Show levels correctly', async ({ page }) => {
    const levelsFromPage = (await page.locator('a').allTextContents()).filter(
      Boolean
    )
    const levelsNames = levelsFromDb.map(([, name]) => name)

    expect(levelsFromPage).toStrictEqual(levelsNames)
  })

  test('Redirect to game with correct level config', async ({ page }) => {
    for (const [id, name] of levelsFromDb) {
      await page.goto('/menu/level')
      await page.getByText(name).click()

      await expect(page).toHaveURL(`http://127.0.0.1:3000/game?levelId=${id}`)
      await expect(page.getByText(name)).toBeVisible()
    }
  })
})
