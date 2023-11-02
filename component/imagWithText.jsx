import React from 'react'
import BtnPink from './button/btnPink'
import Image from 'next/image'

function ImagWithText() {
  return (
    <section>
          <div className="container">
              <div className="wrapper flex flex-wrap">
                  <div className=" w-2/5 ">
                      <h2>The <span className='text-oceanGreen'>Difference</span> Sift makes</h2>
                      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. Worem ipsum dolor sit amet,
                          consectetur adipiscing elit.</p>
                      <BtnPink text='Start Your Risk Assessment Now'/>
                  </div>
                  <div className="col_right w-3/5">
                     <Image className='mx-auto' src="/imageWithText/image.png"  alt="image" width={400} height={400}/>
                  </div>
              </div>
          </div>      
    </section>
  )
}

export default ImagWithText
