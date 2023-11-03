import React from 'react'
import Link from 'next/link'

function BtnPink(props) {
  return (
    <div className='inline-block'>
          <Link href='/' className='inline-block py-4 px-6 font-[700] text-[16px] bg-pink rounded-full mt-5 uppercase' >{props.text}</Link>
    </div>
  )
}

export default BtnPink
