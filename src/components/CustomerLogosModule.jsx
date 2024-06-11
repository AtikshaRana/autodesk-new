"use client";
import Markdown from "@/components/Markdown";
import { classifyStr } from "@/utils/strings";
import clsx from "clsx";
import Image from "next/image";

export default function CustomerLogosModule({ blok }) {
  const twConfig = {
    white: "bg-white",
    black: "bg-black",
    "light-gray": "bg-inherit",

  };
  const urlHandler = (url) => {
    let refinedUrl;
    if (url.includes("https://")) {
      refinedUrl = url;
    } else {
      refinedUrl = `https:/${url}`;
    }
    return refinedUrl;
  };

  return (
    <section
      className={clsx(
        blok.component,
        `pb-${classifyStr(blok.sectionPaddingBottom)}`,
        `pt-${classifyStr(blok.sectionPaddingTop)}`,
        twConfig[classifyStr(blok.backgroundColor)],
      )}
      loading="lazy"
    >
      <div className="container">
        <div className="intro mx-auto mb-[50px] max-w-[1016px] md:mb-[40px] tablet:mb-[40px]">
          {blok?.title && (
            <h2 className="mb-[20px] text-center">{blok?.title}</h2>
          )}
          {blok?.subtitle && (
            <h5 className={` text-center md:mt-[16px] `}>{blok?.subtitle}</h5>
          )}
          {blok?.description && (
            <div className="mt-[16px] text-center text-tintSlate-600 xl-up:text-[21px]">
              <Markdown blok={{ content: blok.description }} />
            </div>
          )}
        </div>
        <div className="logo-wrap ml-[-12px] flex  w-[calc(100%+24px)] flex-wrap justify-between lg:justify-start">
          {blok?.logos?.map((logo) => {
            return (
              <div
                key={logo._uid}
                className="logo_wrap mx-[12px] mb-[20px] flex  w-[calc(16.66%-24px)] justify-center md:w-[calc(50%-24px)]  tablet:w-[calc(33.33%-24px)]"
              >
                <div className="wrap max-h-[90px] w-full overflow-hidden md:max-w-[130px] tablet:max-w-[150px]">
                  {logo?.image?.filename && (
                    <Image
                      className="h-full w-full object-contain"
                      src={
                        logo?.image?.filename
                          ? urlHandler(logo?.image?.filename)
                          : urlHandler(logo?.image)
                      }
                      alt={logo.altText}
                      quality={100}
                      width={100}
                      height={100}
                    />
                  )}
                  {logo?.image?.ImageUrl && (
                    <Image
                      className="h-full w-full object-contain"
                      src={logo?.image?.ImageUrl}
                      alt={logo?.altText}
                      quality={100}
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
