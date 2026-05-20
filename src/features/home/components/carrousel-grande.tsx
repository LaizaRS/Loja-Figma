import { useState } from 'react'
import BGL from '../../../assets/imagens/ImageL.svg'
import Aleatorio from '../../../assets/imagens/aleatorio2.jpg'

import Esquerda from '../../../assets/icones/left.svg?react'
import Direita from '../../../assets/icones/right.svg?react'
import Icone from '../../../components/icone'

export function CarouselGrande() {
  const imagens = [BGL, Aleatorio, BGL]
  const [activeIndex, setActiveIndex] = useState(0)

  function next() {
    setActiveIndex((prev) => (prev + 1) % imagens.length)
  }

  function prev() {
    setActiveIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1))
  }

  return (
    <div className="relative w-full  overflow-hidden">
      <img src={imagens[activeIndex]} className="h-full max-h-138.25 w-full object-cover" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {imagens.map((_, i) => (
          <span
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1 rounded-2xl cursor-pointer transition-all ${
              activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
            }`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
      >
        <Icone svg={Esquerda} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
      >
        <Icone svg={Direita} />
      </button>
    </div>
  )
}
