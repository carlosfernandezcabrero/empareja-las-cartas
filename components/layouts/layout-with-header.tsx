import { Footer } from '@components/common/footer'
import { Header } from '@components/html-components/header'
import { Main } from '@components/html-components/main'
import { BasicLayout } from './basic-layout'

interface Props {
  children: React.ReactNode
  headerText?: string
}

export function LayoutWithHeader({
  children,
  headerText = 'Empareja las cartas'
}: Props) {
  return (
    <BasicLayout>
      <Header title={headerText} />
      <Main>{children}</Main>
      <Footer />
    </BasicLayout>
  )
}
