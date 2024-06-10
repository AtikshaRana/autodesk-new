"use client";

import styles from "@/components/navigation/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { multilinkToUrl } from "@/utils/multilinkToUrl";
import clsx from "clsx";

export default function UpperNav({ alternates, blok, burgerHandler }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isOpen, setOpen] = useState(0);

  //hover handlers of language menu options
  const handleLangMouseEnter = () => {
    setIsHovered(true);
  };
  const handleLangMouseLeave = () => {
    setIsHovered(false);
  };

  //hover handlers of login menu option
  const handleLoginMouseEnter = () => {
    setTimeout(() => {
      setIsLoginHovered(true);
    }, 10);
  };
  const handleLoginMouseLeave = () => {
    setTimeout(() => {
      setIsLoginHovered(false);
    }, 20);
  };

  //Hamburger click handler
  const clickHandler = () => {
    setOpen(isOpen === 0 ? 1 : 0);
    burgerHandler();
  };

  return (
    <div className={` py-3 ${styles.topNav}`}>
      <div className="container">
        <div className="flex justify-between lg:items-center">
          <div className="logo w-1/3 md:w-full md:max-w-[200px] lg:mr-[10px]">
            <Link href="/">
              <Image
                src={`https:${blok?.logoImage}`}
                width={390}
                height={39}
                alt="image"
              />
            </Link>
          </div>
          <div className="rightContent flex w-auto items-center">
            <div
              onMouseEnter={handleLangMouseEnter}
              onMouseLeave={handleLangMouseLeave}
              className={`mx-2 px-2 lg:hidden ${isHovered && styles.langlistActive} ${styles.langWrap}`}
            >
              <div className="logoWrap">
                <svg
                  className="fill-white"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                >
                  <path d="M3.4382 3.43802C4.44641 2.31798 5.68598 1.43043 7.07111 0.836803C8.45624 0.243177 9.95383 -0.042339 11.4602 2.04034e-05C12.9666 -0.042339 14.4642 0.243177 15.8493 0.836803C17.2344 1.43043 18.474 2.31798 19.4822 3.43802C20.6022 4.44623 21.4898 5.6858 22.0834 7.07093C22.677 8.45605 22.9626 9.95364 22.9202 11.46C22.9626 12.9664 22.677 14.464 22.0834 15.8491C21.4898 17.2342 20.6022 18.4738 19.4822 19.482C18.474 20.6021 17.2344 21.4896 15.8493 22.0832C14.4642 22.6769 12.9666 22.9624 11.4602 22.92C9.95383 22.9624 8.45624 22.6769 7.07111 22.0832C5.68598 21.4896 4.44641 20.6021 3.4382 19.482C1.27687 17.3676 0.0407621 14.4833 0.000203509 11.46C-0.0421558 9.95364 0.24336 8.45605 0.836986 7.07093C1.43061 5.6858 2.31817 4.44623 3.4382 3.43802ZM12.9882 20.628C13.7522 20.628 14.7072 20.055 15.8532 18.909C16.6356 17.7096 17.096 16.329 17.1902 14.9C17.1939 14.4733 17.1111 14.0503 16.947 13.6564C16.7829 13.2625 16.5408 12.9059 16.2352 12.608C15.9247 12.2537 15.5432 11.9686 15.1155 11.7712C14.6877 11.5737 14.2233 11.4684 13.7522 11.462H11.8422C11.2526 11.4265 10.6724 11.2976 10.1232 11.08C9.9363 10.9117 9.78825 10.7048 9.6893 10.4736C9.59036 10.2424 9.5429 9.99241 9.5502 9.74102C9.55295 9.59326 9.58867 9.44798 9.65476 9.3158C9.72085 9.18362 9.81564 9.06787 9.9322 8.97702C10.1427 8.77576 10.4089 8.64263 10.6962 8.59502C10.8879 8.61382 11.073 8.67498 11.2382 8.77407C11.4033 8.87317 11.5444 9.00773 11.6512 9.16802C12.0332 9.35902 12.2242 9.55002 12.4152 9.55002C12.6844 9.57843 12.955 9.51078 13.1792 9.35902C13.331 9.13484 13.3986 8.86424 13.3702 8.59502C13.2934 7.86379 12.9541 7.1852 12.4152 6.68502C13.0204 5.56961 13.348 4.32483 13.3702 3.05602C13.3634 2.95694 13.321 2.86367 13.2508 2.79344C13.1806 2.72322 13.0873 2.6808 12.9882 2.67402C12.4982 2.47897 11.9843 2.35049 11.4602 2.29202C9.6955 2.33282 7.9766 2.86171 6.4942 3.82002C5.93811 4.28586 5.49461 4.87148 5.19692 5.53302C4.89923 6.19455 4.75506 6.91487 4.7752 7.64002C4.76408 8.31757 4.89389 8.99003 5.15642 9.61475C5.41894 10.2395 5.80844 10.8028 6.3002 11.269C7.26416 12.2346 8.56794 12.7841 9.9322 12.8V13.564C9.91361 13.9187 9.9723 14.2732 10.1042 14.603C10.2361 14.9328 10.4381 15.23 10.6962 15.474C11.1008 16.0626 11.7163 16.4729 12.4152 16.62V20.058C12.4152 20.249 12.4152 20.249 12.6062 20.44C12.7972 20.631 12.8002 20.628 12.9882 20.628Z"></path>
                </svg>
              </div>
              <div className={styles.dropDown}>
                <div className={styles.langDrop}>
                  {alternates?.map((alternate, alternate_index) => (
                    <a
                      key={`alternate_${alternate_index}`}
                      onClick={(e) => handleLangClick(alternate_index, e)}
                      href={alternate.url}
                      className={`text-grey block w-40 px-3 py-2 text-sm font-light ${styles.langLink}`}
                    >
                      {alternate?.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="num lg:hidden">
              <Link
                className="stext-sm text-white"
                href={`tel:+${blok?.phoneNumber}`}
                target="_blank"
              >
                {blok.phoneNumber}
              </Link>
            </div>
            <div
              className={`logInWrap group relative py-[5px] pl-3 pr-[28px] lg:hidden ${styles.borderLeft}`}
              onMouseEnter={handleLoginMouseEnter}
              onMouseLeave={handleLoginMouseLeave}
            >
              <Link
                className={`text-sm text-white ${styles.arrow} ${isLoginHovered && `${styles.loginActive}`}`}
                href="/"
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {blok?.login?.[0]?.mainButton?.[0]?.textToHyperlink}
              </Link>
              <div
                className={clsx(
                  "absolute right-[-20px] top-[30px] z-[10] h-fit w-[308px] overflow-hidden rounded-[6px] bg-white px-[10px] py-[20px] shadow-light",
                  isLoginHovered ? "visible" : "invisible",
                )}
              >
                {blok?.login?.[0]?.menuItems.map((menuItem) => {
                  return (
                    <div
                      key={menuItem._uid}
                      className={`wrap flex flex-wrap border-b-[1px] border-[#999999] p-[10px] last:border-none ${menuItem?.subLink === undefined && "items-center"}`}
                    >
                      <div className="icon w-full max-w-[25px]">
                        <Image
                          src={`https:${menuItem?.icon?.[0]?.image}`}
                          width={390}
                          height={39}
                          alt={menuItem?.icon?.[0]?.altText}
                        />
                      </div>
                      <div
                        className={`ml-[10px] w-[calc(100%-35px)] pl-[10px]`}
                      >
                        <h6
                          className={clsx(
                            "text-[14px]  font-[700] text-darkGrey",
                            menuItem?.subLink !== undefined && "mb-[5px]",
                          )}
                        >
                          <Link className="hover:underline" href={"/"}>
                            {menuItem?.textToHyperlink}
                          </Link>
                        </h6>
                        {menuItem?.subLink &&
                          menuItem?.subLink.map((subLink) => {
                            return (
                              <Link
                                key={subLink._uid}
                                className="block text-[12px] text-[#999999] hover:underline"
                                target="_blank"
                                href={multilinkToUrl(subLink?.link)}
                              >
                                {subLink?.textToHyperlink}
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Link
              className={clsx(
                "relative ml-4 inline-block rounded-lg bg-white px-5 py-2 pr-[38px] text-black transition-all duration-300 hover:bg-iris hover:text-white lg:hidden",
                styles.productBtn,
              )}
              href={multilinkToUrl(blok?.button?.[0]?.linksTo)}
              target="_blank"
            >
              {blok?.button?.[0]?.text}
            </Link>

            <button
              aria-label="first link"
              className="menu-toggle lg:blok relative h-[25px] w-9 cursor-pointer transition-transform duration-500 lg-up:hidden"
              onClick={clickHandler}
            >
              <ul>
                <li
                  className={clsx(
                    "absolute h-0.5 w-full bg-white transition-all duration-300  ease-in-out",
                    isOpen === 0
                      ? "top-0"
                      : "top-[16px] rotate-[45deg] lg:top-[12px]",
                  )}
                ></li>
                <li
                  className={clsx(
                    "absolute left-0 top-[11px] h-0.5 w-full bg-white transition-all duration-300 ease-in-out md:top-[9px]",
                    isOpen !== 0 && "hidden",
                  )}
                ></li>
                <li
                  className={clsx(
                    "${} absolute h-0.5 w-full bg-white transition-all duration-300  ease-in-out",
                    isOpen === 0
                      ? "top-[22px] md:top-[18px]"
                      : "top-[16px] rotate-[-45deg] lg:top-[12px]",
                  )}
                ></li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
