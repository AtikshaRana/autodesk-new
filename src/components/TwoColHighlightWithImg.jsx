import Markdown from "@/components/Markdown";
import DynamicBtn from "@/components/buttons/DynamicBtn";
import { classifyStr } from "@/utils/strings";
import clsx from "clsx";
import Image from "next/image";

export default function TwoColHighlightWithImg({ blok }) {
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
        "relative overflow-x-clip overflow-y-visible",
        `pb-${classifyStr(blok?.sectionPaddingBottom)}`,
        `pt-${classifyStr(blok?.sectionPaddingTop)}`,
        twConfig[classifyStr(blok?.backgroundColor)],
        blok?.backgroundColor === "Gray Gradient" &&
        blok?.imageOnLeft &&
        "bg-grayGradientReverse",
      )}
      loading="lazy"
    >
      {blok?.connectedTriangle && (
        <div className="pattern only: absolute bottom-[-34%] right-0 z-[1] h-full w-[1000px] lg:bottom-[-20%] lg:w-[700px]">
          <Image
            src="/graphics/overlay-highlight.svg"
            alt="pattern"
            width={1600}
            height={1500}
            quality={100}
          />
        </div>
      )}
      <div className="container">
        <div
          className={clsx(
            "z-[4] ml-[-10px] flex w-[calc(100%+20px)] flex-wrap items-center",
            blok?.imageOnLeft && "flex-row-reverse",
          )}
        >
          <div className="col-two mx-[10px] w-[calc(50%-20px)] md:w-[calc(100%-20px)]">
            <div
              className={clsx(
                "content-wrap relative z-[2] max-w-[513px] md:max-w-full",
                blok?.imageOnLeft && "ml-auto md:ml-0",
                !blok?.showImageOnMobile && "lg:max-w-full",
              )}
            >
              {blok?.highlights?.[0].title && (
                <h3
                  className={clsx(
                    "mb-[16px]",
                    blok?.backgroundColor === "Black" && "text-white",
                  )}
                >
                  {blok?.highlights?.[0].title}
                </h3>
              )}
              {blok?.highlights?.[0].description && (
                <p
                  className={`  ${blok?.imageOnRight == false ? "text-gray" : "text-tintSlate-600"}`}
                >
                  {blok?.highlights?.[0].description}
                </p>
              )}
              {blok?.highlights?.[0]?.ctas?.length > 0 && (
                <div
                  className={clsx(
                    "btn-wrap mt-[20px]",
                    blok?.alignment === "Left" && "text-Left",
                    blok?.alignment === "Center" && "text-center",
                    blok?.alignment === "Right" && "text-right",
                  )}
                >
                  {blok?.highlights?.[0]?.ctas.map((cta) => {
                    return (
                      <DynamicBtn
                        key={cta._uid}
                        blok={cta}
                        bg={
                          blok?.backgroundColor === "Black" ? "black" : "white"
                        }
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div
            className={clsx(
              "col-two mx-[10px] w-[calc(50%-20px)] md:w-[calc(100%-20px)]",
              blok?.showImageOnMobile === false && "md:hidden",
            )}
          >
            <div
              className={clsx(
                "img-wrap z-[5] h-full",
                blok?.layoutHeight == "Tall"
                  ? "max-w-[600px]"
                  : "max-w-[500px]",
                blok?.imageFullWidth
                  ? "absolute right-0 top-0 h-full"
                  : "relative",
                blok?.imageOnLeft
                  ? "left-0 md:mt-[40px]"
                  : "ml-auto md:ml-0 md:mt-[40px]",
                !(blok?.layoutHeight == "Tall") && "h-[300px]",
              )}
            >
              <Image
                className={`w-full object-cover`}
                src={blok?.image?.[0]?.image}
                alt={blok?.image?.[0]?.altText}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      {/* TODO: Refactor this using Tailwind */}
      {/* <style jsx>{`
        .bg-gradient-blue {
          background: linear-gradient(
              150deg,
              #1858a8 -3.9%,
              rgba(24, 88, 168, 0) 52.24%
            ),
            #182f4e;
        }
        .bg-gradient-blue h3,
        .bg-gradient-blue p {
          color: white;
        }
      `}</style> */}
    </section>
  );
}
