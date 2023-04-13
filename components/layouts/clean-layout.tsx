import { Main } from '@components/html-components/main'
import { BasicLayout } from './basic-layout'

interface Props {
  children: React.ReactNode
}

export function CleanLayout({ children }: Props) {
  return (
    <BasicLayout>
      <Main>{children}</Main>
    </BasicLayout>
  )
}
