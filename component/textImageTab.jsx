"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "../node_modules/next/image";
import BtnTransparent from "./button/btnTransparent";
import Style from "./../styles/imgTextTab.module.scss";
import IntroWithCta from "../component/introWithCta"
const Data = [
  {
    logo: '/logos/doordash.svg',
    src: "/",
    img: "/tab-image.svg",
    content: {
      quotationsImg: "/logos/vector.png",
      title: "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omitur necessitus eum ad, pro eripuit minimum comprehensam stet prompta reformidans.”",
      name: "Connie Robertson",
      occupation: "CMO at Swan Bitcoin",
      cta: "Read customer story",
      defualtCta: "defualt",
    },
    imgWithContent: {
      img: "/logos/girl.png",

      count: [
        {
          num: "+85",
          discription: "Lorem Ipsum Dolor Sit ",
        },
        {
          num: "5x",
          discription: "Lorem Ipsum Dolor Sit ",
        },
      ]
    }
  },
  {
    logo: '/logos/yelp.svg',
    src: "/",
    img: "/tab-image.svg",
    content: {
      quotationsImg: "/logos/vector.png",
      title: "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omitur necessitus eum ad, pro eripuit minimum comprehensam stet prompta reformidans.”",
      name: "Connie Robertson",
      occupation: "CMO at Swan Bitcoin",
      cta: "Read customer story",
      defualtCta: "defualt",
    },
    imgWithContent: {
      img: "/logos/girl.png",

      count: [
        {
          num: "+85",
          discription: "Lorem Ipsum Dolor Sit ",
        },
        {
          num: "5x",
          discription: "Lorem Ipsum Dolor Sit ",
        },
      ]
    }
  },
  {
    logo: '/logos/HelloFresh.svg',
    src: "/",
    img: "/tab-image.svg",
    content: {
      quotationsImg: "/logos/vector.png",
      title: "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omitur necessitus eum ad, pro eripuit minimum comprehensam stet prompta reformidans.”",
      name: "Connie Robertson",
      occupation: "CMO at Swan Bitcoin",
      cta: "Read customer story",
      defualtCta: "defualt",
    },
    imgWithContent: {
      img: "/logos/girl.png",

      count: [
        {
          num: "+85",
          discription: "Lorem Ipsum Dolor Sit ",
        },
        {
          num: "5x",
          discription: "Lorem Ipsum Dolor Sit ",
        },
      ]
    }
  },
  {
    logo: '/logos/nikon.svg',
    src: "/",
    img: "/tab-image.svg",
    content: {
      quotationsImg: "/logos/vector.png",
      title: "Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omitur necessitus eum ad, pro eripuit minimum comprehensam stet prompta reformidans.”",
      name: "Connie Robertson",
      occupation: "CMO at Swan Bitcoin",
      cta: "Read customer story",
      defualtCta: "defualt",
    },
    imgWithContent: {
      img: "/logos/girl.png",
      count: [
        {
          num: "+85",
          discription: "Lorem Ipsum Dolor Sit ",
        },
        {
          num: "5x",
          discription: "Lorem Ipsum Dolor Sit ",
        },
      ]
    }
  },
];
export default function TextImgTab() {
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
  const intro = {
    highLightedText: "Our Impact",
    normalText: "on customers success across industries ",
  }

  return (
    <section className={`bg-skyblue img-text-tab ${Style.imgTextTab}`}>
      <div className="container">
        <IntroWithCta bg={"white"} data={intro}/>
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
                <div className={` activeVal mx-auto ${Style.logoWrap}`}>
                      <Image className={Style.logo} width={220} height={500} src={Data[activeTab].logo} alt="logo"/>
                    </div>
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
                    className={`md:text-white w-full md:w-1/4 cursor-pointer text-[16px] px-[8px] py-[15px] z-[1] ${
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
                    <div className={` mx-auto ${Style.logoWrap}`}>
                      <Image className={Style.logo} width={220} height={500} src={data.logo} alt="logo"/>
                    </div>
                  </li>
                ))}
              </div>

              <span className={`sideBorder  `}></span>
              <span className={`moveBorder ${
                  activeTab === 0 ? "show" : ""
                }` } style={bordrWidth}></span>
            </ul>
          </div>
          <div className="tab-content mt-[60px]">
            <div className="flex flex-wrap  rounded-[30px] overflow-hidden">
            <div className="content-wrap w-1/2 text-white bg-yello p-[50px]">
              <div className="quotation">
                <Image width={64} height={64} src={Data[activeTab].content.quotationsImg} /> 
              </div>
                <h4 className="text-black dUp:text-[32px] font-[600] my-4">
                  {Data[activeTab].content.title}
                </h4>
                <h4 className=" text-black">{Data[activeTab].content.name}</h4>
                <span className="text-black">
                {Data[activeTab].content.occupation}
                </span>
                <div className="mt-5">
                  <BtnTransparent text={Data[activeTab].content.cta} />
                </div>
              </div>
              <div className={`w-1/2  mx-auto ${Style.imgWrap}`}>
                <div className={`${Style.imgWithCount}`}>
                  <Image className={Style.image} width={632} height={453} src={Data[activeTab].imgWithContent.img}/>
                </div>
                <div className={`bg-darkBlue ${Style.counter}`}>
                  <div className="flex p-[20px] justify-around">
                    {Data[activeTab].imgWithContent.count.map((data , index) => ( 
                      <div key={index} className="countWithText pr-4">
                        <h2 className="text-yello">{data.num}</h2>
                        <p className="text-white">{data.discription}</p>
                      </div>
                    ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
