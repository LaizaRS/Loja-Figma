import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './features/home/pages/inicial'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicial />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
