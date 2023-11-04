import Link from 'next/link';
import React from 'react'
import ArrowBtn from '../component/button/ArrowBtn'
import Image from 'next/image';


// .parent { className="small_card w-halfWidth border-[1px] border-white rounded-lg mx-[10px] mb-3 p-4 pl-2 flex flex-wrap bg-black text-white"
//     display: grid; flex threeCardWrap flex-wrap
//     grid-template-columns: repeat(7, 1fr);
//     grid-template-rows: repeat(4, 1fr);
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//     }
    
//     .div1 { grid-area: 1 / 1 / 5 / 4; }
//     .div2 { grid-area: 1 / 4 / 3 / 6; }
//     .div3 { grid-area: 1 / 6 / 3 / 8; }
//     .div4 { grid-area: 3 / 4 / 5 / 6; }
//     .div5 { grid-area: 3 / 6 / 5 / 8; }FFCA36
const shadow = <svg width="127" height="351" viewBox="0 0 127 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M-185.858 497.339C-156.136 514.499 -117.695 503.311 -99.9591 472.591L117.797 95.4256C135.612 64.5703 125.872 25.7458 96.2803 8.66116C66.6887 -8.42353 28.1176 2.68897 10.3815 33.4089L-207.375 410.574C-225.189 441.43 -215.449 480.254 -185.858 497.339Z" fill="url(#paint0_linear_1637_86)"/>
<defs>
<linearGradient id="paint0_linear_1637_86" x1="35.8271" y1="99.0056" x2="35.8271" y2="319" gradientUnits="userSpaceOnUse">
<stop offset="0.104287" stop-color="#2E69FF"/>
<stop offset="0.70014" stop-color="#2E69FF" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>



const smallcards = [
    {
        number: '5x', 
        title: 'Secure your growth',
        linkText:'LEARN MORE',
        
    },
    {
        number: '100', 
        title: 'Trusted leader',
        linkText:'LEARN MORE',
        
    },
    {
        number: '87', 
        title: 'Strength in numbers',
        linkText:'LEARN MORE',
        
    },
    {
        number: '90%', 
        title: 'Better machine learning',
        linkText:'LEARN MORE',
        
    }
]

function CardGrid() {
    return (
        <section className='relative card_grid'>
            <div className="container">
                <div class="wrapper flex w-threeCardWrap flex-wrap -ml-[10px]">
                    <div class="col_two w-halfWidth mx-[10px]">
                        <div className="card-wrap p-4 pl-2 bg-black h-full flex border-[1px] border-white rounded-lg flex-wrap">
                            <div className="num_wrap  w-1/5 ">
                                <div className="counter relative w-[90px] h-[90px] bg-blue rounded-full  my-auto  text-right">
                                    <div className='shadow absolute top-0 -left-2 h-[150px]'>
                                        <Image src='/shadow-small.svg' width={200} height={200}/>
                                        {/* { shadow} */}
                                    </div>
                                       <h3 className='text-white absolute left-1/2 top-1/2 -translate-y-2/4 -translate-x-2/4  inline  z-10 font-bold '>5x</h3>
                                   </div>
                                </div>
                                <div className="text-wrap  w-4/5 pl-5 pt-7">
                                    <h3 className='mb-3 text-white'>Optimize Your Entire Customer Lifecycle</h3>
                                    <p className='text-white'>Lorem ipsum dolor amet, consectet adipiscing elit, sed tempor incididunt dolor</p>
                                    <ul className='list-disc text-white pl-4 mt-2'>
                                        <li>Sed ut perspiciatis unde omnis</li>
                                        <li>Voluptatem accusantium dolore laudant</li>
                                    </ul>
                                </div>
                        </div>
                        
                    </div>
                    <div className="col_two w-halfWidth mx-[10px]">
                        <div className="wrapper grid grid-cols-2 gap-x-[20px] gap-y-[20px]">
                        {smallcards.map((item, i) => {
                           return(<div key={i} className="small_card w-full border-[1px] border-white rounded-lg p-4 pl-2 flex flex-wrap bg-black text-white">
                               <div className="num_wrap  w-3/12">
                                   <div className="counter relative w-[60px] h-[60px] bg-yello rounded-full  my-auto  text-right">
                                   <div className='shadow absolute top-0 -left-2 h-[150px]'>
                                        <Image src='/shadow-yellow.svg' width={200} height={200}/>
                                    </div>
                                       <span className='text-black absolute left-1/2 top-1/2 -translate-y-2/4 -translate-x-2/4  inline  z-10 font-bold text-xl'> {item.number}</span>
                                   </div>
                               </div>
                               <div className="text-wrap pl-4 pt-6 w-9/12">
                                   <h6>{item.title}</h6>
                                   <div className='mt-3'>
                                     <ArrowBtn text={item.linkText } />
                                   </div>
                                </div>
                            </div>)
                        })}
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CardGrid
