"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "../node_modules/next/image";
import BtnTransparent from "./button/btnTransparent";
import Style from "./../styles/imgTextTab.module.scss";
const Data = [
  {
    title: `Use Case one`,
    src: "/",
    img: "/tab-image.svg",
    content: {
      title: "Ullamcorper quam nec risus vel cursus nec",
      blurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
      links: [
        {
          link: "Sed ut perspiciatis unde omnis",
        },
        {
          link: "Voluptatem accusantium dolore laudant",
        },
        {
          link: "Totam rem aperiam eaque ipsa tellus",
        },
      ],
      cta: "Learn more",
    },
  },
  {
    title: "Use Case Two ",
    src: "/",
    img: "/tab-image.svg",
    content: {
      title: "Two quam nec risus vel cursus nec",
      blurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
      links: [
        {
          link: "Sed ut perspiciatis unde omnis",
        },
        {
          link: "Voluptatem accusantium dolore laudant",
        },
        {
          link: "Totam rem aperiam eaque ipsa tellus",
        },
      ],
      cta: "Learn more",
    },
  },
  {
    title: "Use Case three",
    src: "/",
    img: "/tab-image.svg",
    content: {
      title: "three quam nec risus vel cursus nec",
      blurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
      links: [
        {
          link: "Sed ut perspiciatis unde omnis",
        },
        {
          link: "Voluptatem accusantium dolore laudant",
        },
        {
          link: "Totam rem aperiam eaque ipsa tellus",
        },
      ],
      cta: "Learn more",
    },
  },
  {
    title: "Use Case Four ",
    src: "/",
    img: "/tab-image.svg",
    content: {
      title: "Four quam nec risus vel cursus nec",
      blurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
      links: [
        {
          link: "Sed ut perspiciatis unde omnis",
        },
        {
          link: "Voluptatem accusantium dolore laudant",
        },
        {
          link: "Totam rem aperiam eaque ipsa tellus",
        },
      ],
      cta: "Learn more",
    },
  },
  {
    title: "Use Case Five",
    src: "/",
    img: "/tab-image.svg",
    content: {
      title: "Five quam nec risus vel cursus nec",
      blurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
      links: [
        {
          link: "Sed ut perspiciatis unde omnis",
        },
        {
          link: "Voluptatem accusantium dolore laudant",
        },
        {
          link: "Totam rem aperiam eaque ipsa tellus",
        },
      ],
      cta: "Learn more",
    },
  },
  {
    title: "Use Case six",
    src: "/",
    img: "/tab-image.svg",
    content: {
      title: "six quam nec risus vel cursus nec",
      blurb:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
      links: [
        {
          link: "Sed ut perspiciatis unde omnis",
        },
        {
          link: "Voluptatem accusantium dolore laudant",
        },
        {
          link: "Totam rem aperiam eaque ipsa tellus",
        },
      ],
      cta: "Learn more",
    },
  },
];
export default function ImgTextTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [liwidth, setLiWidth] = useState([]);
  const [border, setBorder] = useState(0);
  const [wholeWidth, setWholeWidth] = useState(0);
  const [linksLength, setLinksLength] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [show, setShow] = useState(false);
  const ulRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  useEffect(() => {
    if (ulRef.current) {
      const listItems = ulRef.current.querySelectorAll(".sidesBorder > li");
      const width = Array.from(listItems).map((li) => li.clientWidth);
      const length = listItems.length;
      setLinksLength(length);
      setLiWidth(width);
      const wholeWidth = width.reduce((sum, tabWidth) => sum + tabWidth, 0);
      setWholeWidth(wholeWidth);
      setBorder(activeTab * (wholeWidth / linksLength));
    }
  }, [windowWidth]);
  const handleTabClick = (index) => {
    setActiveTab(index);
    setBorder(index * (wholeWidth / linksLength));
  };
  const onPhoneClick = () => {
    setShow((prevShow) => !prevShow);
  }
  useEffect(() => {
    console.log(show);
  }, [show]);

  const bordrWidth = {
    left: `${border}px`,
    width: `${liwidth[activeTab]}px`,
    borderBottomLeftRadius: `${border > "0" ? "0" : "20px"}`,
    height: `${border > "0" ? "0" : "22px"}`,
  };
  return (
    <section className={`bg-darkBlue img-text-tab ${Style.imgTextTab}`}>
      <div className="container">
        <div className="tab-wrap">
          <div className="links">
            <ul
              className={` text-center mx-auto  sidesBorder ${
                Data[activeTab].index !== " " ? "LinkBorder " : ""
              } ${
                windowWidth < 767 ? "rounded-[5px] rounded-t-[5px] bg-white " : ""
              } ${
                show === true ? "rounded-b-[0] " : ""
              }` }
            >
              <div className={`cursor-pointer p-4 ${Style.forPhone} ${
                  windowWidth < 767 ? "" : " hidden"
                }`} onClick={() => onPhoneClick()}>
                <div className="activeVal">{Data[activeTab].title}</div>
              </div >
              <div
                className={`flex sidesBorder flex-wrap ${
                  Data[activeTab].index !== " " ? "LinkBorder " : ""
                } ${
                  windowWidth < 767 ? show === true ? "absolute w-full bg-white rounded-b-[5px]" : "" : ""
                }`}              
                onClick={() => onPhoneClick()}
                ref={ulRef}
              >
                {Data.map((data, index) => (
                  <li
                    className={`md:text-white w-full md:w-1/6 cursor-pointer text-[16px] px-[8px] py-[15px] z-[1] ${
                      index === activeTab ? "active-link" : ""
                    } ${
                      windowWidth < 767 ? show === true ? "text-black visible block" : " hidden" : ""
                    }`}
                    style={
                      windowWidth > 767 ?
                      index === activeTab
                        ? { opacity: "1" }
                        : { opacity: "0.6" }
                        : {}
                    }
                    key={index}
                    onClick={() => handleTabClick(index)}
                  >
                    {data.title}
                  </li>
                ))}
              </div>

              <span className={`sideBorder  ${
                  activeTab === 0 ? "pink" : "white"
                }`}></span>
              <span className={`moveBorder`} style={bordrWidth}></span>
            </ul>
          </div>
          <div className="tab-content mt-[60px]">
            <div className="flex flex-wrap">
              <div className={` w-full md:w-3/5 pr-[20px] mb-4 mx-auto ${Style.imgWrap}`}>
                <Image width={632} height={453} src={Data[activeTab].img} />
              </div>
              <div className="content-wrap w-full md:w-2/5 text-white">
                <h3 className="">
                  {Data[activeTab].content.title}
                </h3>
                <p className="mb-[20px">{Data[activeTab].content.blurb}</p>
                <ul className=" ml-[18px] list-disc mt-[20px]">
                  {Data[activeTab].content.links.map((link, index) => (
                    <li key={index}>{link.link}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <BtnTransparent text={Data[activeTab].content.cta} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
