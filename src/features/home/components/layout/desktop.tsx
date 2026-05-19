interface DesktopProps {
  banner?: React.ReactNode
}

export default function Desktop({  banner }: DesktopProps) {
  return (
    <div className="hidden min-[1176px]:flex justify-between items-center w-screen">
      {banner}
      <div>
        <h2>Busque por categoria:</h2>
        <div>
          
        </div>
      </div>
    </div>
  )
}
