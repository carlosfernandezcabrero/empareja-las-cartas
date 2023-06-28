export function calculatePointers(timeTaken: number, errors: number) {
  const pointsForTime = 600_000 - timeTaken
  const pointForErrors = errors * 100

  return Math.round((pointsForTime - pointForErrors) / 800)
}
