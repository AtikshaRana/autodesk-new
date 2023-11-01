import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
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
  return (
    <div className="pt-8 inner-wrap w-[400px] h-[100vh]">
      <div className="logo pl-8 mb-[20px]">
        <Image width={138} height={48} src="/header/logo.png" alt="Logo"/>
      </div>
      <ul className="link-lists list-none">
        {
          data.map((data, index) => {
            return <li className="p-[15px] mb-[4px] bg-skyblue">
            <Link href="/" className=" font-[600] text-[18px]">{data.name}</Link>
            <div className="inner-content"></div>
          </li>
          })
        }
      </ul>
    </div>
  );
}

export default Header;
