import { CarouselGrande } from '../components/carrousel-grande'
import Desktop from '../components/layout/desktop'

export default function Inicial() {
  return (
    <div>
      <Desktop banner={<CarouselGrande />} />
    </div>
  )
}
