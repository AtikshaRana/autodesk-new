import Link from 'next/link'
import React from 'react'


function SmallCards(props) {
  return (
      <section className='pt-0'>
          <div className="container">
          <div className="wrapper flex threeCardWrap flex-wrap">
                        {(props.data).map((item, i) => {
                           return(<div key={i} className="small_card w-threeCard rounded-lg mx-[10px] mb-3 p-4 flex flex-wrap bg-black text-white">
                               <div className="num_wrap  w-3/12">
                                   <div className="counter relative w-[60px] h-[60px] bg-yello rounded-full  my-auto  text-right">
                                       
                                       <span className='text-black absolute left-1/2 top-1/2 -translate-y-2/4 -translate-x-2/4  inline  z-10 font-bold text-xl'> {item.number}</span>
                                   </div>
                               </div>
                               <div className="text-wrap pl-4 w-9/12">
                                   <h6>{ item.title}</h6>
                                   <p className='mt-3'>{ item.subtitle}</p>
                                </div>
                            </div>)
                        })}
                        </div>
          </div>
      
    </section>
  )
}

export default SmallCards
