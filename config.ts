export const HOST_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://empareja-las-cartas.vercel.app'
    : 'http://localhost:3000'
