import BolsaCoringa from '../../../assets/imagens/Bolsa-coringa.svg'
import Bolsa from '../../../assets/imagens/Bolsa.svg'
import Calca from '../../../assets/imagens/Calca.svg'
import CalcaAlfaiataria from '../../../assets/imagens/calça-alfaiataria.svg'
import CamisetaConforto from '../../../assets/imagens/camiseta-conforto.svg'
import Camiseta from '../../../assets/imagens/Camiseta.svg'
import Casaco from '../../../assets/imagens/Casaco.svg'
import JaquetaJeans from '../../../assets/imagens/jaqueta-jeans.svg'
import OculosRedondo from '../../../assets/imagens/oculos-redondo.svg'
import Oculos from '../../../assets/imagens/Oculos.svg'
import TenisChunky from '../../../assets/imagens/tenis-chunky.svg'
import Tenis from '../../../assets/imagens/Tenis.svg'
import { CarouselGrande } from '../components/carrousel-grande'
import CategoriaCard from '../components/categoria-card'
import Desktop from '../components/layout/desktop'
import ProdutosCard from '../components/produtos-card'
import ReceberNoticia from '../components/receber-noticias'
import SobreNos from '../components/sobre-nos'

export default function Inicial() {
  const categorias = [
    ['Camisetas', Camiseta],
    ['Calças', Calca],
    ['Calçados', Tenis],
    ['Bolsas', Bolsa],
    ['Casacos', Casaco],
    ['Óculos', Oculos],
  ]

  const produtos = [
    [
      'Camiseta Conforto',
      'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
      '70',
      CamisetaConforto,
    ],
    [
      'Calça Alfaiataria',
      'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
      '180',
      CalcaAlfaiataria,
    ],
    [
      'Tênis Chunky',
      'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
      '250',
      TenisChunky,
    ],
    [
      'Jaqueta Jeans',
      'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
      '150',
      JaquetaJeans,
    ],
    [
      'Óculos Redondo',
      'Armação metálica em grafite com lentes arredondadas. Sem erro!',
      '120',
      OculosRedondo,
    ],
    [
      'Bolsa coringa',
      'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
      '120',
      BolsaCoringa,
    ],
  ]

  return (
    <div>
      <Desktop
        banner={<CarouselGrande />}
        cardFavoritos={categorias.map(([nome, imagem]) => (
          <CategoriaCard src={imagem} categoria={nome} />
        ))}
        cardProdutos={produtos.map(([nome, descricao, preco, imagem]) => (
          <ProdutosCard src={imagem} produto={nome} descricao={descricao} preco={preco} />
        ))}

        sobreNos={<SobreNos />}

        receberNoticia={<ReceberNoticia />}
      />
    </div>
  )
}
