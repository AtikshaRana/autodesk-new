import React from 'react'
import Link from 'next/link'

function BtnPink(props) {
  return (
    <div >
          <Link href='/' className='inline-block py-4 px-6 border-2  bg-pink rounded-full mt-5' >{props.text}</Link>
    </div>
  )
}

export default BtnPink
