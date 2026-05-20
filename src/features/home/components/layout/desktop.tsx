interface DesktopProps {
  banner?: React.ReactNode
  cardFavoritos?: React.ReactNode
  cardProdutos?: React.ReactNode
}

export default function Desktop({
  banner,
  cardFavoritos,
  cardProdutos,
}: DesktopProps) {
  return (
    <div className="hidden min-[1000px]:flex flex-col items-center w-screen">
      {banner}
      <div>
        <h2 className="text-center m-5 text-2xl">Busque por categoria:</h2>
        <div className="flex justify-center w-screen gap-6">
          {cardFavoritos}
        </div>
        <div>
          <h2 className="text-center m-6 text-2xl">Produtos que estão bombando!</h2>
          <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cardProdutos}
          </div>
        </div>
      </div>
    </div>
  )
}
