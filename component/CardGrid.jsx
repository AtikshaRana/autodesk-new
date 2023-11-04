import Link from 'next/link';
import React from 'react'

// .parent {
//     display: grid;
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

const smallcards = [
    {
        number: '5x', 
        title: 'Secure your growth',
        linkText:'LEARN MORE',
        
    },
    {
        number: '100', 
        title: 'trusted leader',
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
        <section className='relative'>
            <div className="container">
                <div class="wrapper flex w-threeCardWrap flex-wrap -m-[10px]">
                    <div class="col_two w-halfWidth mx-[10px]">
                        <div className="card-wrap p-5 bg-black h-full flex border-[1px] border-white rounded-lg flex-wrap">
                            <div className="num_wrap  w-1/5 ">
                                   <div className="counter relative w-[60px] h-[60px] bg-blue rounded-full  my-auto  text-right">
                                       <span className='text-white absolute left-1/2 top-1/2 -translate-y-2/4 -translate-x-2/4  inline  z-10 font-bold text-xl'>5x</span>
                                   </div>
                                </div>
                                <div className="text-wrap  w-4/5">
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
                        <div className="wrapper flex threeCardWrap flex-wrap">
                        {smallcards.map((item, i) => {
                           return(<div key={i} className="small_card w-halfWidth border-[1px] border-white rounded-lg mx-[10px] mb-3 p-4 flex flex-wrap bg-black text-white">
                               <div className="num_wrap  w-3/12">
                                   <div className="counter relative w-[60px] h-[60px] bg-yello rounded-full  my-auto  text-right">
                                       <span className='text-black absolute left-1/2 top-1/2 -translate-y-2/4 -translate-x-2/4  inline  z-10 font-bold text-xl'> {item.number}</span>
                                   </div>
                               </div>
                               <div className="text-wrap pl-4 w-9/12">
                                   <h6>{ item.title}</h6>
                                   <Link href='/' className='text-xs'>{ item.linkText}</Link>
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
