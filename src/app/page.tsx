import Banner from '../../component/heroBanner'
import LogoFrame from '../../component/LogoFrame'
import ImageWithText from '../../component/imagWithText'
import CardGrid from '../../component/CardGrid'
import ImgTextTab from '../../component/imgtext-tab'
import TextWithLogos from '../../component/TextWithLogo'
import Smallcards from '../../component/SmallCards'
import Capsule from '../../component/imgWithTextCapsule'
import ColThreeCard from '../../component/colThreeCard'
import TextImgTab from '../../component/textImageTab'
 
export default function Home() {
  const first = {
    titlePrefix: 'The',
    titleColored: 'Difference',
    titleSuffix:'Sift makes',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. Worem ipsum dolor sit amet, consectetur adipiscing elit.',
    btntext1: 'Start Your Risk Assessment Now',
    imgpath:"/imageWithText/image.png",
  }
  
  const second = {
    titlePrefix: 'Sift Trust and Safety',
    titleColored: 'Platform',
    titleSuffix: '',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora amet set incidunt ut labore et dolore magnam aliquam.',
    btntext1: 'platform overview',
    btntext2: 'explore pricing',
    imgpath: "/circle-chart.png"
  };

 const smallcards = [
    {
        number: '1', 
     title: 'Secure your growth',
     subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nibh.',
        linkText:'LEARN MORE',
        
    },
    {
        number: '2', 
      title: 'trusted leader',
      subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nibh.',
        linkText:'LEARN MORE',
        
    },
    {
        number: '3', 
      title: 'Strength in numbers',
      subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis nibh.',
        linkText:'LEARN MORE',
        
    },
  ]

  return (
    <>
      <Banner />
      <LogoFrame title="Working with the biggest innovators and game changers" />
      <div className='bg-black'>
        <ImageWithText data={first} />
        <CardGrid/>
        <TextWithLogos />
      </div>
      <div className='bg-grad-black-to-blue'>
        <ImageWithText data={second} />
        <Smallcards data={smallcards} />
        <ImgTextTab />
        <Capsule />
        <TextImgTab />
      </div>
      <ColThreeCard/>
    </>
  )
}
