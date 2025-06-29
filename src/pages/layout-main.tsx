import { NavLink, Outlet } from 'react-router'
import Container from '@/components/small/container'
import Text from '@/components/small/text'

export default function LayoutMain() {
  return (
    <>
      <Container as="header" className="mt-3 md:mt-20">
        Hello World - HEADER
      </Container>
      <main className="mt-4 md:mt-8">
        <Outlet />
      </main>
      <footer className="my-5 md:my-10">
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/">
            <Text variant="body-sm-bold">Tasks</Text>
          </NavLink>
          <NavLink to="/components">
            <Text variant="body-sm-bold">Components</Text>
          </NavLink>
        </nav>
      </footer>
    </>
  )
}
