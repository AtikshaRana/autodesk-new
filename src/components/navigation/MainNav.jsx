"use client";

import DynamicBtn from "@/components/buttons/DynamicBtn";
import styles from "@/components/navigation/header.module.css";
import { multilinkToUrl } from "@/utils/multilinkToUrl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function MainNav({ alternates, blok, isOpen }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    isOpen === 0 && setHoveredItem(null);
  }, [isOpen]);

  const handleMouseEnter = (index) => {
    if (window.innerWidth > 1024) {
      setHoveredItem(index);
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setHoveredItem(null);
    }
  };

  //handle click on header menues on small devices
  const clickHandler = (event, index) => {
    if (window.innerWidth < 1025) {
      event.preventDefault();
      hoveredItem === index ? setHoveredItem(null) : setHoveredItem(index);
    }
  };

  return (
    <div className="mainNav  relative overflow-x-clip overflow-y-visible ">
      <div
        className={`wrap transition-all lg:absolute lg:left-auto lg:top-[-1px] lg:w-full lg:overflow-hidden  lg:bg-tintSlate-600 ${isOpen === 0 ? "lg:h-0" : "z-[10] lg:h-[100vh] lg:overflow-y-scroll"}`}
      >
        <div className="container">
          <ul
            className={`${styles.listWrap} relative w-full text-white lg:py-5 lg-up:flex `}
          >
            {blok.navItems.map((navItem, navItem_index) => (
              <li
                key={navItem._uid}
                onMouseEnter={() => handleMouseEnter(navItem_index)}
                onMouseLeave={() => handleMouseLeave()}
                onClick={() => clickHandler(event, navItem_index)}
                className={`py-5 lg:relative lg:mt-[2px]  lg-up:pl-7 lg-up:pr-10  ${
                  hoveredItem === navItem_index && styles.listActive
                } `}
              >
                <Link
                  className={`inline-block text-white lg:block lg:pr-[30px] ${styles.arrow}`}
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  {navItem.headline}
                </Link>
                <div
                  className={`${styles.dropDown} 
                    ${hoveredItem === null && "overflow-hidden"}
                  `}
                >
                  <div
                    className={`px-8 py-7 lg:pb-[2px] lg:pt-0 ${
                      navItem.sidebarItems.length > 0 && "lg-up:flex"
                    } ${styles.innerWrap}`}
                  >
                    <div className="mainLinks lg:w-full">
                      {navItem.items.map((listItem) => {
                        return (
                          <div
                            key={listItem._uid}
                            className="mb-6 flex lg:ml-[-10px] lg:w-[calc(100%+20px)] lg:flex-wrap lg:last:mb-0"
                          >
                            {listItem?.items?.map((nestedListItem) => {
                              return (
                                <div
                                  key={nestedListItem._uid}
                                  className="wrap mr-4  w-[13rem] md:w-[calc(100%-20px)] lg:mx-[10px] lg:mt-[10px] tablet:w-[calc(50%-20px)]"
                                >
                                  <h3 className=" mb-[16px] text-sm font-[700] text-iris">
                                    {nestedListItem?.linkText}
                                  </h3>
                                  {nestedListItem?.productLink.map(
                                    (productLink) => {
                                      return (
                                        <Link
                                          key={productLink._uid}
                                          className={`mb-[10px] block ${styles.linkStyle}`}
                                          href={multilinkToUrl(
                                            productLink?.link,
                                          )}
                                        >
                                          {productLink.textToHyperlink}
                                        </Link>
                                      );
                                    },
                                  )}
                                  <div className="subLinksWrap ml-2 lg:mt-[5px]">
                                    {nestedListItem?.subMenuIconLinks.map(
                                      (subMenuIconLink) => {
                                        return (
                                          <Link
                                            key={subMenuIconLink._uid}
                                            className={`my-[5px] block text-sm  font-[400] ${styles.linkStyle}`}
                                            href={multilinkToUrl(
                                              subMenuIconLink?.link,
                                            )}
                                          >
                                            {subMenuIconLink?.textToHyperlink}
                                          </Link>
                                        );
                                      },
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                    {navItem.sidebarItems.length > 0 && (
                      <div className={styles.sideLinks}>
                        {navItem.sidebarItems?.[0]?.items.map(
                          (sidebarItem, sidebarItem_index) => {
                            if (sidebarItem?.heading) {
                              return (
                                <div
                                  key={`${sidebarItem._uid}_${sidebarItem_index}`}
                                  className="testWrap mb-3"
                                >
                                  <h4 className="text-sm font-[700] text-iris">
                                    {sidebarItem?.heading}
                                  </h4>
                                  {sidebarItem?.itemLink && (
                                    <Link
                                      className={`${styles.sideLink} inline-block text-xs text-black lg:text-white`}
                                      href={multilinkToUrl(
                                        sidebarItem?.itemLink?.[0]?.link,
                                      )}
                                    >
                                      {
                                        sidebarItem?.itemLink?.[0]
                                          ?.textToHyperlink
                                      }
                                    </Link>
                                  )}
                                </div>
                              );
                            } else if (sidebarItem.component === "button") {
                              return (
                                <div
                                  key={`${sidebarItem._uid}_${sidebarItem_index}`}
                                  className="btn-wrap min-w-[230px]"
                                >
                                  <Link
                                    className={`relative ${styles.productBtn}  mt-5  inline-block  rounded-[4px] bg-transparent py-[12px] pl-[20px] pr-[40px] capitalize text-black outline outline-[1px] hover:outline-iris lg:text-white lg:outline-white`}
                                    href={multilinkToUrl(sidebarItem?.linksTo)}
                                  >
                                    {sidebarItem.text}
                                  </Link>
                                </div>
                              );
                            }
                          },
                        )}
                      </div>
                    )}

                    {navItem.bottomItems.length > 0 && (
                      <div
                        className={`${styles.blackOutlineBtn} mt-[40px]  min-w-[260px]`}
                      >
                        <DynamicBtn
                          blok={{
                            style: "Button Secondary with Border Black",
                            ...navItem.bottomItems[0],
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
            <li
              onClick={() => clickHandler(event, blok.navItems.length + 1)}
              className={clsx(
                "relative py-5 lg:mt-[2px] lg-up:hidden lg-up:pl-7 lg-up:pr-10 ",
                hoveredItem === blok.navItems.length + 1 && styles.listActive,
              )}
            >
              <Link
                className={`text-sm text-white lg:block lg:pr-[30px] ${styles.arrow} ${hoveredItem === blok.navItems.length + 1 && `${styles.loginActive}`}`}
                href="/"
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                {blok.login?.[0]?.mainButton?.[0]?.textToHyperlink}
              </Link>
              <div
                className={`overflow-hidden rounded-[6px] bg-transparent px-[10px] ${hoveredItem === blok.navItems.length + 1 ? "h-fit py-[20px]" : "h-0"} `}
              >
                {blok?.login?.[0]?.menuItems.map((loginItems) => {
                  return (
                    <div
                      key={loginItems._uid}
                      className="wrap flex flex-wrap p-[10px]"
                    >
                      <div className="icon w-full max-w-[25px] pt-[5px] ">
                        <Image
                          src={`https:${loginItems?.icon?.[0]?.image}`}
                          width={390}
                          height={39}
                          alt={loginItems?.icon?.[0]?.altText}
                        />
                      </div>
                      <div className="ml-[10px] w-[calc(100%-35px)] pl-[10px]">
                        <h6 className="text-[14px] font-[700] text-white">
                          <Link href={multilinkToUrl(loginItems?.link)}>
                            {loginItems?.textToHyperlink}
                          </Link>
                        </h6>
                        {loginItems.subLink &&
                          loginItems?.subLink.map((subLink) => {
                            return (
                              <Link
                                key={subLink._uid}
                                className="mt-[5px] text-[12px] text-white"
                                target="_blank"
                                href={subLink?.link?.url}
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
            </li>
            <li
              onClick={() => clickHandler(event, blok.navItems.length + 2)}
              className={clsx(
                "relative py-5 lg:mt-[2px] lg-up:hidden lg-up:pl-7 lg-up:pr-10",
                hoveredItem === blok.navItems.length + 2 && styles.listActive,
              )}
            >
              <Link
                className={clsx(
                  "text-sm text-white lg:block lg:pr-[30px]",
                  styles.arrow,
                  hoveredItem === blok.navItems.length + 2 &&
                    `${styles.loginActive}`,
                )}
                href="/"
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Region
              </Link>
              <div
                className={clsx(
                  "mx-2 px-2",
                  hoveredItem === blok.navItems.length + 2 &&
                    styles.langlistActive,
                  styles.langWrap,
                )}
              >
                <div
                  className={`overflow-hidden  rounded-[6px] bg-transparent px-[10px] ${hoveredItem === blok.navItems.length + 2 ? "h-fit pb-[20px] pt-[40px]" : "h-0"} `}
                >
                  <div className={`styles.langDrop`}>
                    {alternates?.map((alternate, alternate_index) => (
                      <a
                        key={`alternate_${alternate_index}`}
                        href={alternate.url}
                        className={`text-grey block w-40 px-3 py-2 text-sm font-light ${styles.langLink}`}
                      >
                        {alternate.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="num mt-[20px] lg-up:hidden">
            <Link className="text-white" href={`tel:+${blok.phoneNumber}`}>
              Contact us: {blok.phoneNumber}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
