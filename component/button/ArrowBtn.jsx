import Link from 'next/link'
import React from 'react'

const redArrow = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.73646 2.26816C9.38467 1.91055 8.8143 1.91067 8.46264 2.26816C8.11073 2.62602 8.11074 3.20592 8.46276 3.56377L11.9241 7.08359L1.90066 7.08457C1.40319 7.08469 1 7.4947 1 8.00083C1.00012 8.50672 1.40331 8.9166 1.90078 8.9166L11.9246 8.91563L8.4624 12.4362C8.11062 12.7939 8.11062 13.3741 8.4624 13.7317C8.63835 13.9105 8.86883 14 9.09943 14C9.32991 14 9.56039 13.9105 9.73634 13.7318L14.7361 8.64754C14.9051 8.47582 15 8.2429 15 7.99985C14.9999 7.7568 14.905 7.52401 14.736 7.35192L9.73646 2.26816Z" fill="#FF3B84"/>
</svg>

function ArrowBtn(props) {
  return (
    <>
          <Link className='relative inline_block transition-all pr-[20px] hover:pr-[30px]' href={`/`}><span className='absolute top-[5px] right-[5px] w-[10px] h-[10px]'>{redArrow}</span>{ props.text}</Link>
    </>
  )
}

export default ArrowBtn
