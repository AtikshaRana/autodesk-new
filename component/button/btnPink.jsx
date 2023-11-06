import React from 'react'
import Link from 'next/link'
import Styles from "../../styles/buttons/btnPink.module.scss"

function BtnPink(props) {
  return (
    <>
          <Link href='/' className={`${Styles.btn_pink} inline-block transition-all py-4 px-6 font-[700] text-[16px] border-2 border-transparent bg-pink rounded-full uppercase `} >{props.text}</Link>
    </>
  )
}

export default BtnPink
