import React from "react";
import { Permanent_Marker } from 'next/font/google'
import BtnTransparent from "./button/btnTransparent";
const permanentMarker = Permanent_Marker({ subsets: ['latin'],weight:['400'] })

export default function IntroWithCta({bg , data}) {
  return (
    <div className="intro mb-5 flex flex-wrap items-center">
      <div className={`w-4/5 pr-3  elcd:w-3/5 phd:w-full phd:mb-4 ${bg === "black" ? "text-white": "text-black"}`}>
        <h2>
          <span className={`${permanentMarker.className}  ${bg === "black" ? "text-oceanGreen": ""}`}>
            {data.highLightedText}
          </span>{" "}
          {data.normalText}
        </h2>
      </div>
      <div className="btn w-1/5 block elcd:w-2/5 elcd:pl-[10px] phd:w-full phd:pl-0 ">
        <BtnTransparent text="Talk to an expert" />
      </div>
    </div>
  );
}
