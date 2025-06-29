import { Outlet } from 'react-router'
import Header from '@/components/core/header'
import Main from '@/components/core/main'
import Footer from '@/components/core/footer'

export default function LayoutMain() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}
