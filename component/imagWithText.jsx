'use client'

import React, { useState, useEffect,useRef} from 'react'
import BtnPink from './button/btnPink'
import BtnTransparent from './button/btnTransparent'
import Image from 'next/image'
import { Permanent_Marker } from 'next/font/google'

const permanentMarker =Permanent_Marker({ subsets: ['latin'],weight:['400'] })


function ImageWithText(props) {
  var Sdata = props.data
  const myref = useRef()
  // useEffect(() => {
  //   console.log(myref.current)
  //   const observer =  new IntersectionObserver((entries) => {
  //     console.log(entries)
  //     const entry = entries[0]
  //     console.log('entry', entry)
  //   })
  //   observer.observe(myref.current)
  // })

  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.bg-graphic');
    const height = window.innerHeight
    parallaxElements.forEach(function (element, index) {
        const parent = ((element.parentNode).parentNode).parentNode
        const parentHeight = parent.getBoundingClientRect().height
        const elementTop = element.getBoundingClientRect().top
        element.style.top = `${parentHeight / 13}px`
        let translate
        if (window.innerWidth < 767) {
            translate = elementTop / 16
        } else {
            translate = elementTop / 10
        }
        if ((height) > (elementTop)) {
            element.style.transform = `translate3d(0, ${translate}px, 0)`;
        }
    });
    function handleScroll() {
        const scrollPos = window.scrollY

        parallaxElements.forEach(function (element, index) {
            const parent = ((element.parentNode).parentNode).parentNode
            const parentHeight = parent.getBoundingClientRect().height
          const elementTop = element.getBoundingClientRect().top - 300 ;
            const elementHeight = window.pageYOffset + element.getBoundingClientRect().top
            element.style.top = `${(parentHeight) / 90}px`
            let translate
            if (window.innerWidth < 767) {
                translate = elementTop / 16
            } else {
                translate = elementTop / 20
            }

            if ((elementHeight - height) < (scrollPos)) {
                element.style.transform = `translate3d(0, ${translate}px, 0)`;
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    // window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        // window.removeEventListener('resize', handleResize);
    };
})


  return (
    <section>
      <div className="container">
        <div className="wrapper flex flex-wrap">
          <div className=" w-2/5 td:w-full">
            <h2 className='text-white mb-2'>{Sdata.titlePrefix} <span className={`${permanentMarker.className} text-oceanGreen`}>{Sdata.titleColored}</span> {Sdata.titleSuffix}</h2>
            <p className='text-white'>{Sdata.description }</p>
            <div className='flex mt-5'>
            {(Sdata.btntext2 ? (<div className='inline-block mr-4'><BtnTransparent text={Sdata.btntext2} /></div>) : '')}
              <div className='inline-block'>
                <BtnPink text={Sdata?.btntext1} />
              </div>
            </div>
              
          </div>
          <div className=" relative col_right w-3/5 z-10">
            <div ref={myref} className='bg-graphic absolute top-2 -left-[305px] w-[870px] h-[1000px] -z-[1]'>
              <Image src="/capsule-graphic.svg" alt='graphic' width={1000} height={1000}/>
            </div>
            <Image className='mx-auto z-10' src={Sdata.imgpath} alt="image" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageWithText
