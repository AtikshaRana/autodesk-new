'use client'
import React,{ useEffect, useState} from 'react'
import BtnTransparent from './button/btnTransparent'
import Image from 'next/image'
import Cards from "./tabThreeCard"
import { Permanent_Marker } from 'next/font/google'

const permanentMarker = Permanent_Marker({ subsets: ['latin'],weight:['400'] })

const tabdata = [{
    tabHead: "Whats new",
    tabContent: [{
        subHeading: "Report",
        content:"Sift named a Leader in 2023 Forrester Wave™ for Digital Fraud Management"
    },
    {
        subHeading: "Report",
        content:"Sift named a Leader in 2023 Forrester Wave™ for Digital Fraud Management"
        },
        {
            subHeading: "Report",
            content:"Sift named a Leader in 2023 Forrester Wave™ for Digital Fraud Management"
        },
    ]
},
{
    tabHead: "Events",
    tabContent: [{
        subHeading: "Event",
        content:"Sift named a Leader in 2023 Forrester Wave™ for Digital Fraud Management"
    },
    {
        subHeading: "Event",
        content:"Sift named a Leader in 2023 Forrester Wave™ for Digital Fraud Management"
        },
        {
            subHeading: "Event",
            content:"Sift named a Leader in 2023 Forrester Wave™ for Digital Fraud Management"
        },
    ]
    }
]

function HeroBanner() {

    const [i, setI] = useState(0)
    const [j, setJ] = useState(0)
    const [name, setName] = useState('Document Management')
    
    const handler = (index) => {
        setI(index)
            
        { j == 0 ? setJ(1) : setJ(0) }
    }

    
//className={`${permanentMarker.className}`}
  return (
      <section className="relative bg-grad-blue-and-black">
          <div className="bg absolute bottom-0 right-0">
              <Image src='/banner-bg.png' width={1400} height={1400} quality={75}/>
          </div>
          <div className="container">
              <div className="text_wrap w-full max-w-[625px]">
                  <h1 className='text-white'>Sift can help you <span className={`${permanentMarker.className} text-oceanGreen`}>grow</span> safely</h1>
                  <p className='text-white mt-6 max-w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra adipiscing est, venenatis viverra nunc non aenean amet. </p>
                  <div className='mt-5'>
                    <BtnTransparent text= 'DEFAULT'/>
                  </div>
                 
              </div>
              <div className="tab_wrap mt-14">
                  <div className="tab_navs">
                      {tabdata.map((item , indx) => {
                          return (
                            <div className="nav_item text-white inline-block mr-5 cursor-pointer" key={indx}>
                                <h6 onClick={()=>handler(indx)}>{item.tabHead}</h6>
                            </div>
                          )
                      })}
                  </div>
                  <div className="tab_content mt-10"><div className='relative flex flex-wrap w-threeCardWrap -ml-[10px]' key={i}>
                      <Cards cardsData={ tabdata[i].tabContent}/>
                            </div>
                  </div>
              </div>
              
          </div>
    </section>
  )
}

export default HeroBanner
