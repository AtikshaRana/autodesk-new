
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const headData = [
  {
    name: 'Why Sift',
    src: '/',
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Secure your growth"
          },
          {
            link: "Trusted leaders"
          },
          {
            link: "Better machine learning"
          },
          {
            link: "Strength in numbers"
          },
          {
            link: "Optimize your entire customer lifecycle"
          }
        ]
      },
      {
        title: "Even more",
        links: [
          {
            link: "Customers"
          },
          {
            link: "Community"
          },
          {
            link: "Professional services"
          },
          {
            link: "Partners"
          },
          {
            link: "Patents"
          }
        ]
      }
    ]
  },
  {
    name: 'Solutions',
    src: '/',
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Solutions your growth"
          },
          {
            link: "Trusted leaders"
          },
          {
            link: "Better machine learning"
          },
          {
            link: "Strength in numbers"
          },
          {
            link: "Optimize your entire customer lifecycle"
          }
        ]
      },
      {
        title: "Even more",
        links: [
          {
            link: "Solutions Customers"
          },
          {
            link: "Community"
          },
          {
            link: "Professional services"
          },
          {
            link: "Partners"
          },
          {
            link: "Patents"
          }
        ]
      }
    ]
  },
  {
    name: 'Platform',
    src: '/',
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Platform your growth"
          },
          {
            link: "Trusted leaders"
          },
          {
            link: "Better machine learning"
          },
          {
            link: "Strength in numbers"
          },
          {
            link: "Optimize your entire customer lifecycle"
          }
        ]
      },
      {
        title: "Even more",
        links: [
          {
            link: "Platform Customers"
          },
          {
            link: "Community"
          },
          {
            link: "Professional services"
          },
          {
            link: "Partners"
          },
          {
            link: "Patents"
          }
        ]
      }
    ]
  },
  {
    name: 'Resources',
    src: '/',
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Resources your growth"
          },
          {
            link: "Trusted leaders"
          },
          {
            link: "Better machine learning"
          },
          {
            link: "Strength in numbers"
          },
          {
            link: "Optimize your entire customer lifecycle"
          }
        ]
      },
      {
        title: "Even more",
        links: [
          {
            link: "Resources Customers"
          },
          {
            link: "Community"
          },
          {
            link: "Professional services"
          },
          {
            link: "Partners"
          },
          {
            link: "Patents"
          }
        ]
      }
    ]
  },
  {
    name: 'Company',
    src: '/',
    inner: [
      {
        title: "Explore why",
        links: [
          {
            link: "Company your growth"
          },
          {
            link: "Trusted leaders"
          },
          {
            link: "Better machine learning"
          },
          {
            link: "Strength in numbers"
          },
          {
            link: "Optimize your entire customer lifecycle"
          }
        ]
      },
      {
        title: "Even more",
        links: [
          {
            link: "Company Customers"
          },
          {
            link: "Community"
          },
          {
            link: "Professional services"
          },
          {
            link: "Partners"
          },
          {
            link: "Patents"
          }
        ]
      }
    ]
  }
];

function Header() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? null : index));
  };

  return (
    <div className="pt-8 inner-wrap w-[400px] h-[100vh]">
      <div className="logo pl-8 mb-[20px]">
        <Image width={138} height={48} src="/header/logo.png" alt="Logo"/>
      </div>
      <ul className="link-lists list-none">
        {
          headData.map((data, index) => {
            return <li key={index} className={` mb-[4px] ${index === activeTab ? 'showContent' : ''}`} onClick={() => handleTabClick(index)}>
            <Link href="/" className="bg-skyblue p-[15px] block font-[600] text-[18px]">{data.name}</Link>
            <div className={`inner-content p-[15px] ${index === activeTab ? 'h-auto block' : 'h-0 hidden'}`}>
              {data.inner.map((inner, index)=> {
                return <div className="wrap ">
                  <h3 key={index} className="blue font-[700] text-[14px] uppercase text-blue pb-3 border-b-[1px]">{inner.title}</h3>
                    <ul>
                      {inner.links.map((links, index) => {
                        return     <li>
                        <Link href="/">{links.link}</Link>
                      </li>

                      })

                      }
                  
                    </ul>
                </div>
              })}
            </div>
          </li>
          })
        }
      </ul>
    </div>
  );
}

export default Header;
