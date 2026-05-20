import type React from 'react'
import { NavLink } from 'react-router-dom'

interface CategoriaCardProps extends React.ComponentProps<'a'> {
  src?: string
  categoria?: string
}

export default function CategoriaCard({ src, categoria }: CategoriaCardProps) {
  return (
    <NavLink to="/" className="bg-[#DAFF01]  flex flex-col w-full max-w-47.5">
      <img className='items-center' src={src} alt="" />
      <p className="bg-black text-center text-white">{categoria}</p>
    </NavLink>
  )
}
