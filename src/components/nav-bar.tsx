import { NavLink } from 'react-router-dom'

import Carrinho from '../assets/icones/Cart.svg?react'
import Menu from '../assets/icones/⭐️ icon.svg?react'

import Logo from '../assets/logo/Logo desktop.svg'

import Icone from './icone'

import { useState } from 'react'

export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false)
  return (
    <div>
      <div className="hidden md:flex justify-between items-center bg-black p-4 w-screen">
        <div className="flex gap-5 items-center text-white">
          <img src={Logo} alt="Logo da Meteora" />

          <nav>
            <ul className="flex gap-2.5">
              <li>
                <NavLink to="/">Nossas lojas</NavLink>
              </li>

              <li>
                <NavLink to="/">Novidades</NavLink>
              </li>

              <li>
                <NavLink to="/">Promoções</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="flex gap-3 items-center text-white">
          <li>
            <input
              className="bg-white p-1 w-40 text-black"
              placeholder="Digite o produto"
              type="text"
            />
          </li>

          <li>
            <button className="border border-white py-1 px-3">Buscar</button>
          </li>

          <li className="flex gap-1 text-yellow-300 items-center">
            <button>
              <Icone svg={Carrinho} />
            </button>
            4
          </li>
        </ul>
      </div>

      <div className="flex md:hidden justify-between items-center bg-black p-4 relative">
        <img src={Logo} alt="Logo" />

        <div className="flex gap-4 items-center text-yellow-300">
          <button className="flex items-center gap-1">
            <Icone svg={Carrinho} />4
          </button>

          <button onClick={() => setMenuAberto(!menuAberto)}>
            <Icone svg={Menu} />
          </button>
        </div>

        {menuAberto && (
          <nav className="absolute top-16 right-4 bg-gray-800 text-white p-4 w-40">
            <ul className="flex flex-col gap-3">
              <li className="border-b border-gray-500 pb-2 text-yellow-300">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="border-b border-gray-500 pb-2">
                <NavLink to="/">Nossas lojas</NavLink>
              </li>

              <li className="border-b border-gray-500 pb-2">
                <NavLink to="/">Novidades</NavLink>
              </li>

              <li>
                <NavLink to="/">Promoções</NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}
