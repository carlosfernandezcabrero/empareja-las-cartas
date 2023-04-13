const loadFont = (url) => fetch(url).then((res) => res.arrayBuffer())

export function getFonts(fonts) {
  const promises = fonts.map((font) => {
    return loadFont(font)
  })

  return Promise.all(promises)
}
