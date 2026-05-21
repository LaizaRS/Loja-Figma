interface DesktopProps {
  banner?: React.ReactNode
  cardFavoritos?: React.ReactNode
  cardProdutos?: React.ReactNode
  sobreNos?: React.ReactNode
  receberNoticia?: React.ReactNode
}

export default function Tablet({
  banner,
  cardFavoritos,
  cardProdutos,
  sobreNos,
  receberNoticia,
}: DesktopProps) {
  return (
    <div className="hidden min-[1000px]:flex flex-col items-center w-screen">
      {banner}
      <div className="m-7">
        <h2 className="text-center mb-7 text-2xl">Busque por categoria:</h2>
        <div className="flex justify-center w-screen gap-6">
          {cardFavoritos}
        </div>
      </div>

      <div className="m-7">
        <h2 className="text-center mb-7 text-2xl">
          Produtos que estão bombando!
        </h2>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cardProdutos}
        </div>
      </div>

      <div>
        {sobreNos}
      </div>

      <div>
        {receberNoticia}
      </div>
    </div>
  )
}
