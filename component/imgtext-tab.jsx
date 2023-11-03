"use client";
import React, { useState } from "react";
import Image from "../node_modules/next/image";
import BtnTransparent from "./button/btnTransparent";
const Data = [
  {
  title: `Use Case one`,
    src: "/",
    img: "/tab-image.svg",
    content: {
        title: "Ullamcorper quam nec risus vel cursus nec",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
        links: [
            {
                link: "Sed ut perspiciatis unde omnis"
            },
            {
                link: "Voluptatem accusantium dolore laudant"
            },
            {
                link: "Totam rem aperiam eaque ipsa tellus"
            }
        ],
        cta: "Learn more",
    }
  },
  {
   title: "Use Case Two ",
    src: "/",
    img: "/tab-image.svg",
    content: {
        title: "Two quam nec risus vel cursus nec",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
        links: [
            {
                link: "Sed ut perspiciatis unde omnis"
            },
            {
                link: "Voluptatem accusantium dolore laudant"
            },
            {
                link: "Totam rem aperiam eaque ipsa tellus"
            }
        ],
        cta: "Learn more",
    }
  },
  {
  title: "Use Case three",
    src: "/",
    img: "/tab-image.svg",
    content: {
        title: "three quam nec risus vel cursus nec",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
        links: [
            {
                link: "Sed ut perspiciatis unde omnis"
            },
            {
                link: "Voluptatem accusantium dolore laudant"
            },
            {
                link: "Totam rem aperiam eaque ipsa tellus"
            }
        ],
        cta: "Learn more",
    }
  },
  {
  title: "Use Case Four ",
    src: "/",
    img: "/tab-image.svg",
    content: {
        title: "Four quam nec risus vel cursus nec",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
        links: [
            {
                link: "Sed ut perspiciatis unde omnis"
            },
            {
                link: "Voluptatem accusantium dolore laudant"
            },
            {
                link: "Totam rem aperiam eaque ipsa tellus"
            }
        ],
        cta: "Learn more",
    }
  },
  {
  title: "Use Case Five",
    src: "/",
    img: "/tab-image.svg",
    content: {
        title: "Five quam nec risus vel cursus nec",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
        links: [
            {
                link: "Sed ut perspiciatis unde omnis"
            },
            {
                link: "Voluptatem accusantium dolore laudant"
            },
            {
                link: "Totam rem aperiam eaque ipsa tellus"
            }
        ],
        cta: "Learn more",
    }
  },
  {
    title: "Use Case six",
    src: "/",
    img: "/banner-bg.png",
    content: {
        title: "six quam nec risus vel cursus nec",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis tortor sit euismod pellentesque consequat egestas. Integer donec felis, sed tempor turpis.",
        links: [
            {
                link: "Sed ut perspiciatis unde omnis"
            },
            {
                link: "Voluptatem accusantium dolore laudant"
            },
            {
                link: "Totam rem aperiam eaque ipsa tellus"
            }
        ],
        cta: "Learn more",
    }
  },
];
export default function ImgTextTab() {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
    setActiveTab(index);
    setTop(index * liHeights[activeTab] + (index * 8))
  };
  return (
    <section className=" bg-blue">
      <div className="container">
        <div className="tab-wrap">
          <ul className="links flex">
            {Data.map((data, index) => (
              <li className="text-white w-1/6 cursor-pointer" key={index} onClick={() => handleTabClick(index)}>{data.title}</li>
            ))}
          </ul>
          <div className="tab-content mt-[60px]">
           <div className="flex">
            <div className="img-wrap w-3/5 pr-[20px]">
                <Image width={632} height={453} src={Data[activeTab].img} />
            </div>
            <div className="content-wrap w-2/5 text-white">
                <h3  className=" mb-[20px] text-[40px] font-[700]">{Data[activeTab].content.title}</h3>
                <p className="mb-[20px">{Data[activeTab].content.blurb}</p>
                <ul className=" ml-[18px] list-disc">
                    {
                        Data[activeTab].content.links.map((link, index) => (
                            <li>{link.link}</li>
                        ))
                    }
                </ul>
                <BtnTransparent text={Data[activeTab].content.cta}/>
            </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}
