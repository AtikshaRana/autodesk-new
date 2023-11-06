import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BtnTransparent from './button/btnTransparent'
import ArrowBtn from '../component/button/ArrowBtn'
import IntroWithCta from "../component/introWithCta"
import { Permanent_Marker } from 'next/font/google'

const permanentMarker = Permanent_Marker({ subsets: ['latin'],weight:['400'] })

const data = [
    {
        Image: "/iphone.png",
        subTitle: "BLOG POST",
        date: "FEB 23 2023",
        blurb: "Lorem ipsum dolor sit amet consectetur. Tortor sagittis sed in vitae.",
        link: "/",
    },
    {
        Image: "/iphone.png",
        subTitle: "BLOG POST",
        date: "FEB 23 2023",
        blurb: "Lorem ipsum dolor sit amet consectetur. Tortor sagittis sed in vitae.",
        link: "/",
    },
    {
        Image: "/iphone.png",
        subTitle: "BLOG POST",
        date: "FEB 23 2023",
        blurb: "Lorem ipsum dolor sit amet consectetur. Tortor sagittis sed in vitae.",
        link: "/",
    },
]
const intro = {
    highLightedText: "Explore",
    normalText: "more from Sift",
  }
function ColThreeCard() {

  return (
      <section className='bg-black'>
          <div className="container">
          <IntroWithCta bg={"black"} data={intro}/>
              <div class="wrapper flex w-threeCardWrap flex-wrap -ml-[10px]">
                {
                    data.map((data, index) => (
                        <div key={index} className="col_three bg-black rounded-[20px] overflow-hidden text-white border-2 border-grey-600  w-threeCard mx-[10px] relative cd:w-halfWidth cd:mb-4 phd:w-full phd:max-w-[400px] phd:mx-auto phd:last:mb-0">
                        <Link href={data.link} className="emptyLink"></Link>
                          <div className="img-wrap overflow-hidden h-52">
                              <Image className='w-full object-cover' src={data.Image} alt='iphone' width={500} height={500} quality={100}/>
                          </div>
                          <div className="content-wrap p-4 text-white">
                              <div className="bolg_details mb-3">
                              <span>{data.subTitle}</span>
                              <span className='pl-2 ml-2 border-l-2 border-white'>{data.date}</span>
                              </div>
                              <h6>{data.blurb}</h6>
                              <div className='mt-4'>
                                  <ArrowBtn text='Read the article'/>
                              </div>                      
                          </div>
                      </div>
                    ))
                }
              </div>
          </div>
      
    </section>
  )
}

export default ColThreeCard
