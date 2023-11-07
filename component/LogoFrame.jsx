import React from 'react'
import Image from 'next/image'

const logos = [{
    image:'/logoframe/doordash.png'
},
{
    image:'/logoframe/nikon.png'
    },
    {
        image:'/logoframe/remitly.png'
    },
    {
        image:'/logoframe/swan.png'
    },
    {
        image:'/logoframe/taptap.png'
    }]

function LogoFrame(props) {
  return (
      <section className='bg-skyblue'>
          <div className="container">
              <div className="title ">
                  <h3 className=' '>{props.title}</h3>
                  <div className="logo-wrap flex flex-wrap mt-10 justify-between">
                      {(logos).map((item,i) => {
                          return (
                            <div key={i} className="logo_wrap w-full mb-7 sm:mb-7 md:mb-10 lg:mb-0 md:w-1/2 lg:w-1/5 flex justify-center">
                                  <Image src={item.image} alt={ item.altText} quality={50} width={150} height={ 100} />
                            </div>
                          )
                      })}
                      
                  </div>
              </div>
        </div>
      </section>
   )
}

export default LogoFrame