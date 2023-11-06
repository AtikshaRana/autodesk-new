import Image from 'next/image'
import React from 'react'

function ImgWithTextCapsule() {
  return (
    <section className='cd:bg-white'>
      <div className="container">
          <div className="wrapper flex flex-wrap items-center py-20 px-20 rounded-full cUp:bg-white cd:rounded-none td:w-full cd:p-0">
              <div className="col_left w-3/5 pr-12 td:w-full">
                  <h3 className='pr-10 mb-4'>Seasonal <span>Promotional</span> assets lorem ipsum dolor</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </div>
              <div className="col_right w-2/5 td:w-full td:mt-4">
                  <div className="img_wrap ">
                        <Image className='mx-auto' src='/Vector.png' alt='Q2' width={220} height={220}/>
                  </div>
                  
              </div>
          </div>
      </div>
</section>
  )
}

export default ImgWithTextCapsule
