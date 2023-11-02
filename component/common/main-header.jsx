"use client";
import React from 'react'
import Image from '../../node_modules/next/image';
import BtnPink from '../button/btnPink';
export default function MainHeader() {
  return (
    <div className='absolute z-10 w-full mt-[10px]'>
      <div className="container flex items-center justify-end">
        <div className="search mt-[15px] mx-4 cursor-pointer">
          <Image width={19} height={19} src="/header/search.svg"/>
        </div>
        <BtnPink text='Speak to an agent'/>
        <div className="user mt-[15px] mx-4 cursor-pointer">
          <Image width={24} height={24} src="/header/user.svg"/>
        </div>
      </div>
    </div>
  )
}
