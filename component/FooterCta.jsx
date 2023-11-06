import Image from 'next/image'
import React from 'react'
import BtnWhite from './button/BtnWhite'
import { Permanent_Marker } from 'next/font/google'

const permanentMarker = Permanent_Marker({ subsets: ['latin'],weight:['400'] })

function FooterCta() {
  return (
      <section className='footer_cta relative p-'>
          <div className="container">
              <div className="wrapper relative flex flex-wrap align-center z-10 items-center rounded-tr-[20px] ">
                  <div className='bg-blue absolute top-0 left-0 w-full h-full -z-10 rounded-tr-[20px] rounded-tl-[20px]'></div>
                      <div className="col-left w-2/5">
                          <Image className='-mt-10' src='/laptopWaleUncle.png' alt='vector' width={500} height={700} quality={75}/>
                      </div>
                      <div className="col-right w-3/5 pl-5">
                          <h2 className='text-white'>Take the <span className={`${permanentMarker.className} text-oceanGreen`}>Next Step</span></h2>
                          <h6 className='text-white mt-4'>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit.</h6>
                      <div className='mt-5'>
                      <BtnWhite text='talk to an expert'/>
                            </div>
                          
                      </div>
                  
              </div>
          </div>
      
    </section>
  )
}

export default FooterCta
