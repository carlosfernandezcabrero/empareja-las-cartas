import Head from 'next/head'
import { LayoutWithHeader } from './layout-with-header'

interface Props {
  children: React.ReactNode
  images: string[]
}

export function LayoutWithHeaderAndPreloadImages({ children, images }: Props) {
  return (
    <>
      <Head>
        {images.map((image) => (
          <link
            key={image}
            rel="preload"
            href={`/images/${image}`}
            as="image"
          />
        ))}
      </Head>
      <LayoutWithHeader>{children}</LayoutWithHeader>
    </>
  )
}
