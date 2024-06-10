"use client";

import DynamicBtn from "@/components/buttons/DynamicBtn";
import Markdown from "@/components/Markdown";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { classifyStr } from "@/utils/strings";

export default function TabsModule({ blok }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [accordionIndex, setAccordionIndex] = useState([0]);
  const twConfig = {
    white: "bg-white",
    black: "bg-black",
    "light-gray": "bg-inherit",
  };
  const purpleline =
    'after:content-[""] after:absolute after:w-[5px] after:h-full after:top-0 after:left-0 after:bg-iris';

  const handler = (index, text) => {
    setTabIndex(index);
  };

  // accordion click handler for small devices
  const accordionHandler = (index, text) => {
    if (accordionIndex.includes(index)) {
      setAccordionIndex(accordionIndex.filter((item) => item !== index));
    } else {
      setAccordionIndex([...accordionIndex, index]);
    }
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
        <div className="wrapper relative ml-[-10px] flex w-[calc(100%+20px)] flex-wrap items-center lg:hidden ">
          <div className="mx-[10px] w-[240px] pr-[16px]">
            {blok?.tabs && (
              <ul
                className={`relative w-full border-b-[1px] border-lightGrey pb-5 `}
              >
                {blok?.tabs?.map((tab, tab_index) => {
                  return (
                    <li
                      key={tab._uid}
                      className={clsx(
                        "relative my-2.5 inline-block w-full p-1.5 pl-[20px]",
                        tabIndex === tab_index && purpleline,
                      )}
                      onClick={() => handler(tab_index, tab.tabName)}
                    >
                      <h6
                        className={clsx(
                          "cursor-pointer text-[16px] hover:text-black",
                          tabIndex === tab_index
                            ? "text-black"
                            : "text-darkGrey",
                        )}
                      >
                        {tab?.tabName || tab?.title}
                      </h6>
                    </li>
                  );
                })}
              </ul>
            )}
            {blok?.cta && (
              <div className="btn_wrap mt-[30px] ">
                {blok?.cta?.map((cta) => {
                  return (
                    <DynamicBtn
                      key={cta._uid}
                      blok={cta}
                      bg={blok?.backgroundColor === "White" ? "white" : "black"}
                    />
                  );
                })}
              </div>
            )}
          </div>
          <div className="mx-[10px] w-[calc(100%-280px)] border-l-[1px] border-gray border-lightGrey pl-[50px]">
            <div className="content_wrapper  flex flex-wrap items-center">
              <div className="col_text w-6/12">
                {blok?.tabs[tabIndex]?.content?.[0]?.highlight?.[0]?.title && (
                  <h3 className="mb-[30px]">
                    {blok?.tabs[tabIndex]?.content?.[0]?.highlight?.[0]?.title}
                  </h3>
                )}
                {blok?.tabs[tabIndex]?.content?.[0]?.highlight?.[0]
                  ?.description && (
                    <Markdown
                      blok={{
                        content:
                          blok.tabs[tabIndex].content[0].highlight[0].description,
                      }}
                    />
                  )}
                {blok?.tabs[tabIndex]?.content?.[0]?.highlight?.[0]?.cta && (
                  <div className="btn-wrap mt-[30px] ">
                    {blok?.tabs[tabIndex]?.content[0]?.highlight?.[0]?.cta?.map(
                      (cta) => {
                        return (
                          <DynamicBtn
                            key={cta?._uid}
                            blok={cta}
                            bg={
                              blok?.backgroundColor === "Black"
                                ? "black"
                                : "white"
                            }
                          />
                        );
                      },
                    )}
                  </div>
                )}
              </div>
              <div className="col_img w-6/12 py-3">
                {blok?.tabs[tabIndex]?.content?.[0]?.media?.[0]?.filename && (
                  <div className="img ml-auto max-w-[392px] lg-up:h-[400px]">
                    <Image
                      className="h-full  w-full object-contain"
                      src={
                        blok?.tabs[tabIndex]?.content?.[0]?.media?.[0]?.filename
                      }
                      alt={
                        blok?.tabs[tabIndex]?.content?.[0]?.media?.[0]?.image
                          ?.alt
                      }
                      priority
                      width={392}
                      height={400}
                      quality={100}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* small devices */}
        <div className="wrapper relative flex flex-wrap items-center lg-up:hidden ">
          <div className="left_col w-full pr-2">
            {blok?.tabs?.map((tab, tab_index) => {
              return (
                <div
                  key={tab._uid}
                  className={` mlg-up:mb-2.5  w-full  border-t-[1px]  border-lightGrey `}
                >
                  <div
                    className={`heading-wrap relative cursor-pointer py-[15px] pr-[40px]`}
                    onClick={() => accordionHandler(tab_index, tab.tabName)}
                  >
                    <div
                      className={clsx(
                        "absolute right-[7px] top-1/2 h-[16px] w-[12px] -translate-y-1/2 transition-all duration-300",
                        accordionIndex.includes(tab_index)
                          ? "rotate-[180deg]"
                          : "rotate-[0deg]",
                      )}
                    >
                      <Image
                        src="/icons/chevron-down.svg"
                        alt="angle-icon"
                        width={12}
                        height={16}
                        quality={100}
                      />
                    </div>
                    <h5 className="cursor-pointer">{tab?.tabName}</h5>
                  </div>
                  <div
                    className={clsx(
                      "content_wrapper overflow-hidden transition-all duration-300",
                      accordionIndex.includes(tab_index)
                        ? "max-h-[1000px]"
                        : "max-h-0",
                    )}
                  >
                    <div className="col_text mb-[20px] w-full">
                      {blok?.tabs[tab_index]?.content?.[0]?.highlight?.[0]
                        ?.description && (
                          <p>
                            {
                              blok?.tabs[tab_index]?.content?.[0]?.highlight?.[0]
                                ?.description
                            }
                          </p>
                        )}
                      {blok.tabs[tab_index]?.content?.[0]?.highlight?.[0]
                        ?.cta && (
                          <div className="btn mt-[30px] md:mt-[9px]">
                            {blok.tabs[
                              tab_index
                            ]?.content?.[0]?.highlight?.[0]?.cta?.map((cta) => {
                              return (
                                <DynamicBtn
                                  key={cta?._uid}
                                  blok={cta}
                                  bg={
                                    blok?.backgroundColor === "White"
                                      ? "white"
                                      : "black"
                                  }
                                />
                              );
                            })}
                          </div>
                        )}
                    </div>
                    {blok?.tabs[tab_index]?.content?.[0]?.media?.[0]?.image
                      ?.filename && (
                        <div className="col_img w-full max-w-[400px] py-3">
                          <Image
                            className="h-full  w-full object-contain"
                            src={
                              blok?.tabs[tab_index]?.content?.[0]?.media?.[0]
                                ?.image?.filename
                            }
                            alt={
                              blok?.tabs[tab_index]?.content?.[0]?.media?.[0]
                                ?.image?.alt
                            }
                            priority
                            width={200}
                            height={100}
                            quality={100}
                          />
                        </div>
                      )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
