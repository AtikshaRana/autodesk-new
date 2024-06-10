"use client";
import DynamicBtn from "@/components/buttons/DynamicBtn";
import Markdown from "@/components/Markdown";
import { classifyStr } from "@/utils/strings";
import clsx from "clsx";
import Image from "next/image";

export default function CtaBannerModule({ blok }) {
  const twConfig = {
    white: "bg-white",
    black: "bg-black",
    "light-gray": "bg-inherit",
  };

  return (
    <section
      className={clsx(
        "relative flex min-h-[450px] items-center overflow-x-clip  overflow-y-visible sm:min-h-[370px] md:items-end",
        `pb-${classifyStr(blok?.sectionPaddingBottom)}`,
        `pt-${classifyStr(blok?.sectionPaddingTop)}`,
        twConfig[classifyStr(blok?.backgroundColor)],
      )}
      loading="lazy"
    >
      {blok?.backgroundMedia && (
        <div
          className={clsx(
            "cta_bg absolute right-0 z-[1] w-full",
            blok?.hasTopOffset
              ? "top-[-50px] h-[calc(100%+50px)]"
              : "top-0 h-[100%]",
          )}
        >
          <Image
            className="h-full w-full bg-right object-cover object-top"
            src={`${blok?.backgroundMedia?.[0]?.image?.filename}`}
            alt="footercta"
            width={900}
            height={500}
            quality={100}
          />
        </div>
      )}
      <div className="container">
        <div className="content relative z-10 mt-20  md:mt-0 ">
          {blok?.eyebrow && (
            <h6 className="mb-[20px] uppercase">{blok.eyebrow}</h6>
          )}
          {blok?.title && (
            <h2
              className={clsx(
                blok?.backgroundMedia && "text-white",
                "mb-[32px] md:mb-[24px]",
              )}
            >
              {blok.title}
            </h2>
          )}
          {blok?.description && (
            <div className="mb-[32px] text-white xl-up:text-[21px]">
              <Markdown blok={{ content: blok.description }} />
            </div>
          )}
          {blok?.cta?.length > 0 && (
            <div className="btn-wrap md:flex md:flex-col md:flex-wrap">
              {blok.cta.map((ctaBtn) => {
                return (
                  <DynamicBtn
                    key={ctaBtn?._uid}
                    blok={ctaBtn}
                    bg={blok?.backgroundColor === "Black" ? "black" : "white"}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
