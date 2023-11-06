import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function SmallCards(props) {
  return (
      <section className='pt-0'>
          <div className="container">
          <div className="wrapper flex threeCardWrap flex-wrap td:w-full">
                        {(props.data).map((item, i) => {
                           return(<div key={i} className="small_card overflow-hidden w-threeCard cd:w-halfWidth td:w-full rounded-lg mx-[10px] mb-3 p-4 pl-2 flex flex-wrap bg-black text-white">
                               <div className="num_wrap w-3/12 dd:w-[70px]">
                                   <div className="counter relative w-[60px] h-[60px] bg-yello rounded-full my-auto text-right">
                                   <div className='shadow absolute top-0 -left-2 h-[150px]'>
                                        <Image src='/shadow-yellow.svg' width={200} height={200}/>
                                    </div>
                                       <span className='text-black absolute left-1/2 top-1/2 -translate-y-2/4 -translate-x-2/4  inline  z-10 font-bold text-xl'> {item.number}</span>
                                   </div>
                               </div>
                               <div className="text-wrap pl-4 pt-4 w-9/12">
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
