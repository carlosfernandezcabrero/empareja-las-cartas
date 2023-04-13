import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

const loadFont = (fontName: string) =>
  fetch(`https://empareja-las-cartas.vercel.app/fonts/${fontName}.ttf`).then(
    (res) => res.arrayBuffer()
  )

export default async function (request: NextRequest) {
  const { searchParams } = request.nextUrl
  const text = searchParams.get('text')

  const [fontRegular, fontMedium, fontSemibold, fontBold] = await Promise.all([
    loadFont('Montserrat-Regular'),
    loadFont('Montserrat-Medium'),
    loadFont('Montserrat-SemiBold'),
    loadFont('Montserrat-Bold')
  ])

  return new ImageResponse(
    (
      <div tw="flex flex-col justify-center items-center w-full h-full">
        <p tw="text-7xl text-[#112d4e] font-bold">Empareja las cartas</p>
        <p tw="text-4xl text-gray-600 font-semibold">{text}</p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Montserrat',
          data: fontRegular,
          weight: 400,
          style: 'normal'
        },
        {
          name: 'Montserrat',
          data: fontMedium,
          weight: 500,
          style: 'normal'
        },
        {
          name: 'Montserrat',
          data: fontSemibold,
          weight: 600,
          style: 'normal'
        },
        {
          name: 'Montserrat',
          data: fontBold,
          weight: 700,
          style: 'normal'
        }
      ]
    }
  )
}
