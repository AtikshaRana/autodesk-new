import React from 'react'
import Link from 'next/link'

function BtnPink(props) {
  return (
    <>
          <Link href='/' className='inline-block transition-all py-4 px-6 font-[700] text-[16px] border-2 border-transparent bg-pink rounded-full uppercase hover:border-pink hover:bg-transparent hover:text-white' >{props.text}</Link>
    </>
  )
}

export default BtnPink
