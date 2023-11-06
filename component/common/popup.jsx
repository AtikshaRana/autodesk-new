"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Popup() {
    const [active, setActive] = useState(null);
  
    const handleTabClick = () => {
      setActive(active === null ? true : null);
    };
    const [componentVisible, setComponentVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setComponentVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        componentVisible && (
            <div className={`wrap h-[42px] relative dd:hidden ${active ? 'hidden' : 'block'}`}>
              <div className="bg-oceanGreen py-[9px] px-[18px] fixed text-[16px] font-[600] leading-[1.5rem] w-full right-0 z-40 text-center">
                <span>Join Sift at Money20/20 USA in Las Vegas</span>
                <div className="close absolute right-[16px] top-2 cursor-pointer" onClick={handleTabClick}>
                  <Image width={25} height={25} src="/header/close.svg" />
                </div>
              </div>
            </div>
          )
    );
  }