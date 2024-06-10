"use client";
import Markdown from "@/components/Markdown";
import DynamicBtn from "@/components/buttons/DynamicBtn";
import { classifyStr } from "@/utils/strings";
import clsx from "clsx";

export default function TitleSubtitleDescriptionModule({ blok }) {
  return (
    <>
      {blok.hasOwnProperty("variant") ? (
        <Variant blok={blok} />
      ) : (
        <Original blok={blok} />
      )}
    </>
  );
}

function Original({ blok }) {
  const twConfig = {
    white: "bg-white",
    black: "bg-black",
    "light-gray": "bg-inherit",
    "gray-gradient": "bg-grayGradient",
  };

  return (
    <section

      className={clsx(
        blok?.component,
        `pb-${classifyStr(blok.sectionPaddingBottom)}`,
        `pt-${classifyStr(blok.sectionPaddingTop)}`,
        twConfig[classifyStr(blok.backgroundColor)],
      )}
      loading="lazy"
    >
      <div className="container">
        <div
          className={clsx(
            "intro",
            blok?.alignment === "Left" && "text-Left max-w-full",
            blok?.alignment === "Right" && "text-Right max-w-full",
            blok?.alignment === "Center" &&
            "mx-auto max-w-[1016px] text-center",
          )}
        >
          {blok?.eyebrow && (
            <h6
              className={clsx(
                "mb-[20px] md:mb-[16px]",
                blok?.alignment === "Left" && "text-Left",
                blok?.alignment === "Right" && "text-Right",
                blok?.alignment === "Center" && "text-center",
                blok?.backgroundColor === "White"
                  ? "text-darkGrey"
                  : "text-gold",
              )}
            >
              {blok.eyebrow}
            </h6>
          )}
          {blok?.title && (
            <h2
              className={clsx(
                blok?.backgroundColor === "Black" && "text-white",
              )}
            >
              {blok.title}
            </h2>
          )}
          {blok?.description && (
            <div
              className={clsx(
                "mt-[16px] xl-up:text-[21px]",
                blok?.backgroundColor === "White" && "text-tintSlate-600",
                (blok?.backgroundColor === "Gray" ||
                  blok?.backgroundColor === "Gray Gradient") &&
                "text-tintSlate-600",
                blok?.backgroundColor === "Black" && "text-white",
                blok?.alignment === "Left" && "max-w-[1060px]",
                blok?.alignment === "Right" && "ml-auto max-w-[1060px]",
              )}
            >
              <Markdown blok={{ content: blok?.description }} />
            </div>
          )}
        </div>
        {blok?.ctas?.length > 0 && (
          <div
            className={clsx(
              "btn-wrap mt-[30px]",
              blok?.alignment === "Left" && "text-Left",
              blok?.alignment === "Center" && "text-center",
              blok?.alignment === "Right" && "text-right",
            )}
          >
            {blok.ctas.map((cta) => {
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

function Variant({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className={clsx(
        blok?.component,
        blok?.backgroundColor === "White" && "bg-white",
        blok?.backgroundColor === "Black" && "bg-black",
        blok?.backgroundColor === "Gray" && "bg-gray",
        blok?.sectionPaddingBottom === "Standard" && "pb-standard",
        blok?.sectionPaddingTop === "Standard" && "pt-standard",
        blok?.sectionPaddingBottom === "Half" && "pb-half",
        blok?.sectionPaddingTop === "Half" && "pt-half",
      )}
    >
      <div className="container">
        <div
          className={clsx(
            "intro",
            blok?.textAlignment === "center" &&
            "mx-auto max-w-[1016px] text-center",
          )}
        >
          {blok?.eyebrow && (
            <h6
              className={clsx(
                "mb-[20px] md:mb-[16px]",
                blok?.backgroundColor === "White"
                  ? "text-darkGrey"
                  : "text-gold",
              )}
            >
              {blok?.eyebrow}
            </h6>
          )}
          {blok?.title ? <h2>{blok?.title}</h2> : <h2>{blok?.subtitle}</h2>}
          {blok?.description && (
            <p className="mt-[16px] xl-up:text-[21px]">
              {blok?.description?.[0]?.markdown}
            </p>
          )}
        </div>
        {blok?.ctas && (
          <div
            className={clsx(
              "btn-wrap",
              blok?.alignment === "Left" ? "text-left" : "text-center",
            )}
          >
            {blok?.ctas?.map((cta) => {
              return (
                <DynamicBtn
                  key={cta._uid}
                  blok={cta}
                  bg={blok?.backgroundColor == "Black" ? "black" : "white"}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
