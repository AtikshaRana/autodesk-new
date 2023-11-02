import Banner from '../../component/heroBanner'
import LogoFrame from '../../component/LogoFrame'
import ImageWithText from '../../component/imagWithText'
import CardGrid from '../../component/CardGrid'

export default function Home() {
  return (
    <>
      <Banner />
      <LogoFrame title="Working with the biggest innovators and game changers" />
      <ImageWithText />
      <CardGrid/>
    </>
  )
}
