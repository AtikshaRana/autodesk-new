import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BtnTransparent from './button/btnTransparent'

function ColThreeCard() {
  return (
      <section className='bg-black'>
          <div className="container">
              <div className="intro mb-5 flex flex-wrap items-center">
                  <div className="w-4/5 pr-3 text-white">
                      <h2><span className=' text-oceanGreen'>Explore</span> more from Sift</h2>
                  </div>
                  <div className="btn w-1/5 block">
                      <BtnTransparent text='Talk to an expert'/>  
                 </div>
                  
              </div>
              <div class="wrapper flex w-threeCardWrap flex-wrap -ml-[10px]">
                  <div className="col_three bg-black rounded-lg overflow-hidden text-white  border-2 border-grey-600  w-threeCard mx-[10px]">
                      <div className="img-wrap overflow-hidden h-52">
                          <Image className='w-full object-cover' src='/iphone.png' alt='iphone' width={500} height={500} quality={100}/>
                      </div>
                      <div className="content-wrap p-4 text-white">
                          <div className="bolg_details mb-3">
                          <span>BLOG POST</span>
                          <span className='pl-2 ml-2 border-l-2 border-white '>FEB 23 2023</span>
                          </div>

                          <h6>Lorem ipsum dolor sit amet consectetur. Tortor sagittis sed in vitae.</h6>
                          <Link href="/">Read the article</Link>
                                                    
                      </div>
                  </div>
                  
                  <div className="col_three bg-black rounded-lg overflow-hidden text-white border-2 border-grey-600  w-threeCard mx-[10px]">
                      <div className="img-wrap overflow-hidden h-52">
                          <Image className='w-full object-cover' src='/iphone.png' alt='iphone' width={500} height={500} quality={100}/>
                      </div>
                      <div className="content-wrap p-4 text-white">
                          <div className="bolg_details mb-3">
                          <span>BLOG POST</span>
                          <span className='pl-2 ml-2 border-l-2 border-white '>FEB 23 2023</span>
                          </div>

                          <h6>Lorem ipsum dolor sit amet consectetur. Tortor sagittis sed in vitae.</h6>
                          <Link href="/">Read the article</Link>
                                                    
                      </div>
                  </div>
                  
                  <div className="col_three bg-black rounded-lg overflow-hidden text-white border-2 border-grey-600  w-threeCard mx-[10px]">
                      <div className="img-wrap h-52 overflow-hidden">
                          <Image className='w-full object-cover' src='/iphone.png' alt='iphone' width={500} height={500} quality={100} />
                      </div>
                      <div className="content-wrap p-4 text-white">
                          <div className="bolg_details mb-3">
                          <span>BLOG POST</span>
                          <span className='pl-2 ml-2 border-l-2 border-white '>FEB 23 2023</span>
                          </div>

                          <h6>Lorem ipsum dolor sit amet consectetur. Tortor sagittis sed in vitae.</h6>
                          <Link href="/">Read the article</Link>
                                                    
                      </div>
                </div>
                  
              </div>
          </div>
      
    </section>
  )
}

export default ColThreeCard
