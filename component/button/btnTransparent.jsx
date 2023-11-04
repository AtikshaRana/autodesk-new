import React from 'react'
import Link from 'next/link'

function BtnTransparent(props) {
  return (
    <>
          <Link href='/' className='btn_transparent inline-block font-bold py-4 px-6 border-2 uppercase text-white rounded-full hover:border-transparent hover:bg-pink hover:text-black' >{props.text}</Link>
    </>
  )
}

export default BtnTransparent
