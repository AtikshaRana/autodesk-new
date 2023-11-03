'use client'

import React from 'react'
import BtnPink from './button/btnPink'
import BtnTransparent from './button/btnTransparent'
import Image from 'next/image'

function ImageWithText(props) {
  var Sdata = props.data


  return (
    <section>
          <div className="container">
              <div className="wrapper flex flex-wrap">
                  <div className=" w-2/5 ">
            <h2>{Sdata.titlePrefix} <span className='text-oceanGreen'>{Sdata.titleColored}</span> {Sdata.titleSuffix }</h2>
            <p>{Sdata.description }</p>
            {(Sdata.btntext2 ? (<BtnTransparent text={Sdata.btntext2} />) : '')}
            <div className='inline-block ml-3'>

            </div>
            <BtnPink text={Sdata.btntext1} />
                  </div>
                  <div className="col_right w-3/5">
             <Image className='mx-auto' src={Sdata.imgpath }  alt="image" width={400} height={400}/>
                  </div>
              </div>
          </div>      
    </section>
  )
}

export default ImageWithText
