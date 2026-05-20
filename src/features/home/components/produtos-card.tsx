import type React from 'react'

interface ProdutosCardProps extends React.ComponentProps<'a'> {
  src?: string
  produto?: string
  descricao?: string
  preco?: string
}

export default function ProdutosCard({
  src,
  produto,
  descricao,
  preco,
}: ProdutosCardProps) {
  return (
    <div className=" flex w-full max-w-87 flex-col  ">
      <img className="h-full max-h-111" src={src} alt="" />
      <div className="flex flex-col items-start justify-between gap-3 h-full">
        <h2 className="text-2xl">{produto}</h2>
        <p className="text-[12px] max-w[348px]">{descricao}</p>
        <h2 className="text-2xl"> R$ {preco}</h2>
        <button className='bg-[#9353FF] text-white p-2'> Adicionar ao Carrinho </button>
      </div>
    </div>
  )
}
