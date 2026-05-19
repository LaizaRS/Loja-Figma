import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Inicial from './features/home/pages/inicial'
import { OutLetLayout } from './features/home/components/layout/out-let-layout'


function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OutLetLayout />}>
        <Route index element={<Inicial />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
