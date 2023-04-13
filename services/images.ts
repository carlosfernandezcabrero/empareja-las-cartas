const images = [
  'git.svg',
  'html5.svg',
  'nodejs.svg',
  'php.svg',
  'typescript.svg',
  'javascript.svg',
  'python.svg',
  'java.svg',
  'redis.svg',
  'css3.svg'
]
const pairedImages = images
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5)

export function getImages() {
  return {
    images: pairedImages,
    originalImages: images
  }
}
