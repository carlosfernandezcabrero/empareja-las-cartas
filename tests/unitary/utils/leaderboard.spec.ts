import { expect, test } from '@playwright/test'
import { calculatePointers } from '../../../utils/leaderboard'

test.describe('Leaderboard utils tests', () => {
  test('should return the correct pointers', () => {
    const expected = 674
    const actual = calculatePointers(61_000, 0)

    expect(actual).toBe(expected)
  })

  test('should return the correct pointers when have errors', () => {
    const expected = 675
    const actual = calculatePointers(60_000, 2)

    expect(actual).toBe(expected)
  })
})
