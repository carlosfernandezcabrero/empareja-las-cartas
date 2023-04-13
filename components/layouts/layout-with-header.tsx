import { Header } from '@components/html-components/header'
import { Main } from '@components/html-components/main'
import { BasicLayout } from './basic-layout'

interface Props {
  children: React.ReactNode
}

export function LayoutWithHeader({ children }: Props) {
  return (
    <BasicLayout>
      <Header />
      <Main>{children}</Main>
    </BasicLayout>
  )
}
