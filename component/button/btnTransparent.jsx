import React from 'react'
import Link from 'next/link'

function BtnTransparent(props) {
  return (
    <div className='inline-block'>
          <Link href='/' className='btn_transparent inline-block py-4 px-6 border-2 uppercase text-white rounded-full mt-5' >{props.text}</Link>
    </div>
  )
}

export default BtnTransparent
