import Flor from '../../../assets/icones/Subtract.svg?react'
import Troca from '../../../assets/icones/arrow-repeat.svg?react'
import Quadrado from '../../../assets/icones/Union.svg?react'
import Icone from '../../../components/icone'

export default function SobreNos() {
  return (
    <div className="bg-black w-screen p-2">
      <h2 className='text-white text-center text-2xl '>Conheça todas as nossas facilidades</h2>
      <div className='flex m-5 flex-wrap justify-center gap-6'>
        <div className='flex max-w-67 gap-3'>
          <Icone svg={Quadrado} />
          <div className='flex flex-col gap-3'>
            <p className="uppercase text-[#DAFF01]">pague pelo pix</p>
            <p className="text-white">Ganhe 5% OFF em pagamentos via PIX.</p>
          </div>
        </div>
          <div className='flex max-w-67 gap-3'>
          <Icone svg={Troca} />
          <div className='flex flex-col gap-3'>
            <p className="uppercase text-[#DAFF01]">troca grátis pix</p>
            <p className="text-white">fique livre para trocar em até 30 dias.</p>
          </div>
        </div>
          <div className='flex max-w-67 gap-3'>
          <Icone svg={Flor} />
          <div className='flex flex-col gap-3'>
            <p className="uppercase text-[#DAFF01]">sustentabilidade</p>
            <p className="text-white">Moda responsável, que respeita o meio ambiente.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
