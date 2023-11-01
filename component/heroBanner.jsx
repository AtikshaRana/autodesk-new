'use client'
import React,{ useState} from 'react'
import BtnTransparent from './button/btnTransparent'

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

  return (
      <section className=" bg-black">
          <div className="container">
              <div className="text_wrap w-full max-w-[625px]">
                  <h1 className='text-white'>Sift can help you <span className='text-oceanGreen'>grow</span> safely</h1>
                  <p className='text-white mt-6 max-w-[550px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra adipiscing est, venenatis viverra nunc non aenean amet. </p>
                  <BtnTransparent text= 'DEFAULT'/>
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
                               {(tabdata[i].tabContent).map((content, k) => {
                                   return (
                                       <div key={k} className="tab_cards text-white p-4 border-2 border-grey-600  w-threeCard mx-[10px]">
                                           <h6>{content.subHeading}</h6>
                                           <p>{content.content}</p>
                                       </div>)
                               })}
                            </div>
                  </div>
              </div>
              
          </div>
    </section>
  )
}

export default HeroBanner
