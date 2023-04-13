import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { ImageResponse } from 'workers-og'

// const DOMAIN =
//   'https://empareja-las-cartas-og-image.carlos-fernandez-cabrero.workers.dev'

const app = new Hono()
app.use(cors({ origin: '*' }))

app.get('/', async (ctx) => {
  const text = ctx.req.query('text')

  const markup = `<div style="background-color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; width: 100vw;">
    <h1 style="font-size: 70px; font-weight: 700; color: #112d4e;">¡Empareja las cartas!</h1>
    <p style="font-size: 40px; font-weight: 600; color: #4b5563;">${text}</p>
  </div>`

  // const [fontRegular, fontMedium, fontSemibold, fontBold] = await getFonts([
  //   `${DOMAIN}/static/fonts/Montserrat-Regular`,
  //   `${DOMAIN}/static/fonts/Montserrat-Medium`,
  //   `${DOMAIN}/static/fonts/Montserrat-SemiBold`,
  //   `${DOMAIN}/static/fonts/Montserrat-Bold`
  // ])

  return new ImageResponse(markup, {
    width: 1200,
    height: 630
    // fonts: [
    //   {
    //     name: 'Montserrat',
    //     data: fontRegular,
    //     weight: 400,
    //     style: 'normal'
    //   },
    //   {
    //     name: 'Montserrat',
    //     data: fontMedium,
    //     weight: 500,
    //     style: 'normal'
    //   },
    //   {
    //     name: 'Montserrat',
    //     data: fontSemibold,
    //     weight: 600,
    //     style: 'normal'
    //   },
    //   {
    //     name: 'Montserrat',
    //     data: fontBold,
    //     weight: 700,
    //     style: 'normal'
    //   }
    // ]
  })
})

// app.get(
//   '/static/fonts/Montserrat-Regular',
//   serveStatic({ path: './fonts/Montserrat-Regular.ttf' })
// )
// app.get(
//   '/static/fonts/Montserrat-Medium',
//   serveStatic({ path: './fonts/Montserrat-Medium.ttf' })
// )
// app.get(
//   '/static/fonts/Montserrat-SemiBold',
//   serveStatic({ path: './fonts/Montserrat-SemiBold.ttf' })
// )
// app.get(
//   '/static/fonts/Montserrat-Bold',
//   serveStatic({ path: './fonts/Montserrat-Bold.ttf' })
// )

export default app
