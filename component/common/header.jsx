"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState , useRef } from "react";
import Style from "../../styles/header.module.scss"
const headData = [
  {
    name: "Why Sift",
    src: "/",
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Secure your growth",
          },
          {
            link: "Trusted leaders",
          },
          {
            link: "Better machine learning",
          },
          {
            link: "Strength in numbers",
          },
          {
            link: "Optimize your entire customer lifecycle",
          },
        ],
      },
      {
        title: "Even more",
        links: [
          {
            link: "Customers",
          },
          {
            link: "Community",
          },
          {
            link: "Professional services",
          },
          {
            link: "Partners",
          },
          {
            link: "Patents",
          },
        ],
      },
    ],
  },
  {
    name: "Solutions",
    src: "/",
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Solutions your growth",
          },
          {
            link: "Trusted leaders",
          },
          {
            link: "Better machine learning",
          },
          {
            link: "Strength in numbers",
          },
          {
            link: "Optimize your entire customer lifecycle",
          },
        ],
      },
      {
        title: "Even more",
        links: [
          {
            link: "Solutions Customers",
          },
          {
            link: "Community",
          },
          {
            link: "Professional services",
          },
          {
            link: "Partners",
          },
          {
            link: "Patents",
          },
        ],
      },
    ],
  },
  {
    name: "Platform",
    src: "/",
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Platform your growth",
          },
          {
            link: "Trusted leaders",
          },
          {
            link: "Better machine learning",
          },
          {
            link: "Strength in numbers",
          },
          {
            link: "Optimize your entire customer lifecycle",
          },
        ],
      },
      {
        title: "Even more",
        links: [
          {
            link: "Platform Customers",
          },
          {
            link: "Community",
          },
          {
            link: "Professional services",
          },
          {
            link: "Partners",
          },
          {
            link: "Patents",
          },
        ],
      },
    ],
  },
  {
    name: "Resources",
    src: "/",
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Resources your growth",
          },
          {
            link: "Trusted leaders",
          },
          {
            link: "Better machine learning",
          },
          {
            link: "Strength in numbers",
          },
          {
            link: "Optimize your entire customer lifecycle",
          },
        ],
      },
      {
        title: "Even more",
        links: [
          {
            link: "Resources Customers",
          },
          {
            link: "Community",
          },
          {
            link: "Professional services",
          },
          {
            link: "Partners",
          },
          {
            link: "Patents",
          },
        ],
      },
    ],
  },
  {
    name: "Company",
    src: "/",
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Company your growth",
          },
          {
            link: "Trusted leaders",
          },
          {
            link: "Better machine learning",
          },
          {
            link: "Strength in numbers",
          },
          {
            link: "Optimize your entire customer lifecycle",
          },
        ],
      },
      {
        title: "Even more",
        links: [
          {
            link: "Company Customers",
          },
          {
            link: "Community",
          },
          {
            link: "Professional services",
          },
          {
            link: "Partners",
          },
          {
            link: "Patents",
          },
        ],
      },
    ],
  },
];

function Header() {
  const [activeTab, setActiveTab] = useState(null);
  const contentEl = useRef();
  const handleTabClick = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? null : index));
  };

  return (
    <header className={`pt-8 inner-wrap w-[550px] h-[100vh] header ${Style.header}`}>
      <div className="logo pl-8 mb-[20px]">
        <Image width={138} height={48} src="/header/logo.png" alt="Logo" />
      </div>
      <ul className="link-lists list-none">
        {headData.map((data, index) => {
          return (
            <li
              key={index}
              className={`mb-[4px] relative ${
                index === activeTab ? "showContent" : ""
              }`}
            >
              <Link
                href="/"
                className={` ease-in-out duration-[0.3s] p-[15px] block font-[600] text-[18px] ${index === activeTab ? " bg-blue text-white minus-icon" : "bg-skyblue text-black plus-icon"}`} onClick={() => handleTabClick(index)}
              >
                {data.name}
              </Link>
              <div ref={contentEl}
                className={`inner-content px-[15px] pb-[15px] ${Style.transition} 
                ${
                  index === activeTab ? Style.activeLinks : ""
                }`} 
                style={
                  index === activeTab
                    ? {
                        height: contentEl.current.scrollHeight + 'px',
                        transition: 'height 0.5s ease',
                      }
                    : {
                        height: '0',
                        transition: 'height 0.5s ease', 
                      }
                }
              >
                {data.inner.map((inner, index) => {
                  return (
                    <div className="wrap ">
                      <h3
                        key={index}
                        className={`blue py-[15px] font-[700] text-[14px] uppercase text-blue pb-3 ${Style.linkborder}`} 
                      >
                        {inner.title}
                      </h3>
                      <ul>
                        {inner.links.map((links, index) => {
                          return (
                            <li key={index} className={`py-[10px] ${Style.linkborder}`}>
                              <Link href="/" className=" font-[700] text-[16px] leading-[1.2rem] ">{links.link}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
export default Header;
