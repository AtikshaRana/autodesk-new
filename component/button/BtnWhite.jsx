import React from 'react'
import Link from 'next/link'
// import Styles from "../../styles/buttons/btnPink.module.scss

function BtnWhite(props) {
  return (
    <>
          <Link href='/' className={`btn_white inline-block transition-all duration-700 py-4 px-6 font-[700] text-[16px] border-2 border-transparent bg-white rounded-full uppercase hover:text-pink hover:border-pink `} >{props.text}</Link>
    </>
  )
}

export default BtnWhite
