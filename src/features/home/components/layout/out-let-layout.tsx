import { Outlet } from 'react-router-dom'
import NavBar from '../../../../components/nav-bar'


export function OutLetLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
