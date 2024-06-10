"use client";
import Markdown from "@/components/Markdown";
import DynamicBtn from "@/components/buttons/DynamicBtn";
import { classifyStr } from "@/utils/strings";
import clsx from "clsx";
import Image from "next/image";

export default function MediaModule({ blok }) {
  const twConfig = {
    white: "bg-white",
    black: "bg-black",
    "light-gray": "bg-inherit",
  };
  const video = blok?.media?.[0]?.video && (
    <video
      autoPlay={true}
      preload="metadata"
      loop
      muted
      poster="https://a-us.storyblok.com/f/1018383/1568x1240/b4f3830ef9/placeholder.png"
    >
      <source
        src={blok?.foregroundMedia?.[0]?.video?.filename}
        type="video/mp4"
      />
    </video>
  );

  return (
    <section
      className={clsx(
        blok?.component,
        `pb-${classifyStr(blok?.sectionPaddingBottom)}`,
        `pt-${classifyStr(blok?.sectionPaddingTop)}`,
        twConfig[classifyStr(blok?.backgroundColor)],
      )}
      loading="lazy"
    >
      <div className="container">
        <div
          className={clsx(
            "intro  mx-auto mb-[40px] max-w-[1016px] md:mb-[16px]",
          )}
        >
          {blok?.title && (
            <h2
              className={clsx(
                "text-center",
                blok?.backgroundColor === "Black" && "text-white",
              )}
            >
              {blok.title}
            </h2>
          )}
          {blok?.description && (
            <div
              className={clsx(
                "mt-[20px] text-center xl-up:text-[21px]",
                blok?.backgroundColor !== "Black"
                  ? "text-tintSlate-600"
                  : "text-white",
              )}
            >
              <Markdown blok={{ content: blok.description }} />
            </div>
          )}
        </div>
        <div className="image_wrap mx-auto max-w-[1016px] overflow-hidden ">
          {blok?.media?.[0]?.image ? (
            <Image
              className="h-full w-full object-contain"
              src={blok?.media?.[0]?.image?.filename}
              alt={blok?.media?.[0]?.altText}
              width={500}
              height={500}
              quality={100}
              loading="lazy"
            />
          ) : (
            video
          )}
        </div>
        {blok?.cta?.length > 0 && (
          <div className="btn-wrap mt-[40px] justify-center">
            {blok.cta.map((cta) => {
              return (
                <DynamicBtn
                  key={cta._uid}
                  blok={cta}
                  bg={blok?.backgroundColor === "Black" ? "black" : "white"}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
