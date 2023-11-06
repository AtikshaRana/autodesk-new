import Image from 'next/image'
import React from 'react'

const logos = [
    
    {
        img:'/textwithlogo/Digital-trust.png'
    },
    {
        img:'/textwithlogo/Digital-trust.png'
    },
    {
        img:'/textwithlogo/Digital-trust.png'
    },
    {
        img:'/textwithlogo/Digital-trust.png'
    }
]


function TextWithLogos() {
  return (
      <section className=' cd:bg-white'>
          <div className="container">
              <div className="wrapper flex flex-wrap items-center py-20 px-20 cd:p-0 cUp:rounded-full cUp:bg-white cd:w-threeCardWrap">
                  <div className="col_left w-2/5 cd:w-halfWidth phd:w-full">
                      <div className="icon mb-2">
                          <Image src="/textwithlogo/G2_logo.png" alt='Q2' width={30} height={30}/>
                      </div>
                      <h3 className='pr-10'>#1 Leader in Digital Trust and Safety</h3>
                  </div>
                  <div className="col_right w-3/5 cd:w-halfWidth phd:w-full phd:max-w-[306px] phd:mx-auto phd:mt-4">
                      <div className="logo_wrap grid grid-cols-4 cd:grid-cols-2 gap-x-2">
                          {logos.map((item, i) => {
                              return (
                                <div className="logo cd:w-[100px] cd:h-[134px]" key={i}>
                                      <Image className='mx-auto' src={item.img } alt='Q2' width={90} height={90}/>
                                </div>
                              )
                          })}
                          
                      </div>
                      
                  </div>
              </div>
          </div>
      
    </section>
  )
}

export default TextWithLogos
