"use client";

import { classifyStr } from "@/utils/strings";
import clsx from "clsx";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function QuoteModule({ blok }) {
  console.log("QuoteModule", blok);
  const twConfig = {
    white: "bg-white",
    black: "bg-black",
    "light-gray": "bg-inherit",
  };

  const prevHandler = () => {
    document.querySelector("div.swiper-button-prev").click();
  };

  const nextHandler = () => {
    document.querySelector("div.swiper-button-next").click();
  };

  return (
    <section
      className={clsx(
        "pb-standard pt-standard overflow-hidden",
        blok.component,
        `pb-${classifyStr(blok.sectionPaddingBottom)}`,
        `pt-${classifyStr(blok.sectionPaddingTop)}`,
        twConfig[classifyStr(blok.backgroundColor)],
      )}
      loading="lazy"
    >
      <div className="container">
        <div className="wrapper relative">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={800}
          >
            {blok?.quotes?.map((quote) => {
              return (
                <SwiperSlide key={quote._uid}>
                  <div className="relative">
                    <div className="quote-wrap flex w-full  flex-wrap">
                      <div className="col-left mr-[20px]  w-full max-w-[330px] md:mb-[20px] md:mr-0  md:w-full md:max-w-full  ">
                        <div className="img-wrap h-[300px] w-full  max-w-[300px] overflow-hidden rounded-[50%] sm:h-[240px]  sm:max-w-[250px] phablet:h-[295px] ">
                          <Image
                            className="h-full w-full object-cover "
                            src={quote?.portraitImage?.filename}
                            alt={quote?.portraitImage?.alt}
                            width={330}
                            height={350}
                            quality={100}
                          />
                        </div>
                      </div>
                      <div className="col-right md w-[calc(100%-350px)]  md:w-full">
                        <div className="content ">
                          <h4 className="font-[700] xl-up:text-[28px]">
                            {'"'}
                            {quote?.quote}
                            {'"'}
                          </h4>
                        </div>
                        <div className="mt-[30px] flex flex-wrap justify-between sm:flex-col-reverse ">
                          <div className="icon mr-[20px] h-[80px] w-full max-w-[184px] sm:mr-auto">
                            <Image
                              className="h-full w-full object-contain "
                              src={quote?.logoImage?.filename}
                              alt={quote?.logoImage?.alt}
                              width={190}
                              height={50}
                              quality={100}
                            />
                          </div>
                          <div className="info w-fit text-right sm:mb-[20px] sm:w-full sm:text-left ">
                            <h6>{quote?.name}</h6>
                            <p className="mt-[10px] text-tintSlate-600">
                              {quote?.jobTitle},<br />
                              {quote?.companyName}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="slider-btn mt-[20px] flex max-w-[785px] justify-center md:justify-start">
            <div
              className="prev inline-block w-fit cursor-pointer"
              onClick={() => prevHandler()}
            >
              <svg
                className="group"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="transition-all duration-300 group-hover:fill-iris"
                  x="36"
                  y="36"
                  width="36"
                  height="36"
                  rx="18"
                  transform="rotate(180 36 36)"
                  fill={`${blok.style === "Image Black" ? "white" : "black"}`}
                />
                <rect
                  width="20"
                  height="20"
                  transform="matrix(-1 0 0 -1 28 28)"
                  fill={`${blok.style === "Image Black" ? "black" : "white"}`}
                  fillOpacity="0.01"
                />
                <path
                  d="M20.083 23L15.083 18L20.083 13"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="next ml-[20px] inline-block w-fit cursor-pointer"
              onClick={() => nextHandler()}
            >
              <svg
                className="group"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="transition-all duration-300 group-hover:fill-iris"
                  width="36"
                  height="36"
                  rx="18"
                  fill={`${blok.style === "Image Black" ? "white" : "black"}`}
                />
                <rect
                  width="20"
                  height="20"
                  transform="translate(8 8)"
                  fill={`${blok.style === "Image Black" ? "black" : "white"}`}
                  fillOpacity="0.01"
                />
                <path
                  d="M15.917 13L20.917 18L15.917 23"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
