import { Outlet } from 'react-router-dom'
import NavBar from '../../../../components/nav-bar'
import Footer from '../../../../components/footer'


export function OutLetLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
