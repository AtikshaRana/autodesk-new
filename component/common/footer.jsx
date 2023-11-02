import React from "react";
import Image from "next/image";
import Link from "next/link";
import BtnTransparent from "../button/btnTransparent";
import BtnPink from "../button/btnPink";

export default function Footer() {
  const icons = [
    {
      src: "/footer/youtube.svg",
    },
    {
      src: "/footer/linkedin.svg",
    },
    {
      src: "/footer/Instagram.svg",
    },
    {
      src: "/footer/x-twitter.svg",
    },
    {
      src: "/footer/FB.svg",
    },
  ];
  const footerData = [
    {
      title: "Developers ",
      links: [
        {
          link: "Overview",
          src: "/",
        },
        {
          link: "APIs",
          src: "/",
        },
        {
          link: "Plugins",
          src: "/",
        },
        {
          link: "Guides",
          src: "/",
        },
        {
          link: "Tutorials",
          src: "/",
        },
        {
            link: "Engineering Blogs",
            src: "/",
          },
      ],
    },
    {
        title: "Support",
      links: [
        {
          link: "Help Center",
          src: "/",
          outerlink: "true",
        },
        {
          link: "System Status ",
          src: "/",
          outerlink: "true",
        },
        {
          link: "Contact Support",
          src: "/",
        },
      ],
    },
    {
        title: "Partners",
      links: [
        {
          link: "Overview",
          src: "/",
        },
        {
          link: "System Status ",
          src: "/",
        },
      ],
    },
  ];
  return (
    <footer className="pt-[80px] pb-[50px] bg-black">
      <div className="container">
        <div className="flex w-full justify-between">
          <div className="logo-with-icons">
            <div className="logo mb-[40px]">
              <Image width={140} height={49} src="/footer/logo.svg" />
            </div>
            <ul className="flex w-[246px] justify-between">
              {icons.map((src, index) => (
                <li key={index}>
                  <Link href="/">
                    <Image width={30} height={30} src={src.src} />
                  </Link>
                </li>
              ))}
            </ul>
            <BtnTransparent text="Contact us" />
          </div>
          <div className="links flex ml-[40px]">
            {footerData.map((mainLinks, index) => {
              return (
                <div key={index} className="mr-[40px]">
                    <h4 className="text-white font-[600] text-[16px] mb-[30px]">{mainLinks.title}</h4>
                  <ul>
                    {mainLinks.links.map((links, index) => (
                    <li className="mb-[20px]" key={index}> <Link className="text-white" href={links.src}>{links.link}</Link></li>
                    ))
                    }
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="form-wrap">
          <h4 className="text-white font-[600] text-[16px] mb-[30px]">Subscribe to receive updates!</h4>
          <form className=" max-w-[272px] w-full">
           <div className="mb-[20px]">
            <label for="first-name" class="uppercase text-white text-[14px] mb-2  block font-700">first name</label>
            <input type="text" id="first-name" name="first" maxlength="255" class=" p-[8px] bg-black border rounded-[4px] border-white w-full text-white" required="required"></input>
           </div>
           <div>
            <label for="last-name" class="uppercase text-white text-[14px] mb-2 block font-700">Last name</label>
            <input type="text" id="last-name" name="last" maxlength="255" class=" p-[8px] bg-black border rounded-[4px] border-white w-full text-white" required="required"></input>
           </div>
           <BtnPink text='subscribe'/>
          </form>
          </div>
        </div>
        <div className="copyright flex justify-between mt-[40px]">
            <p className="text-white">© 2023 Sift Science, Inc. All rights reserved. Sift and the Sift logo are trademarks or registered trademarks of Sift Science, Inc.</p>
            <ul className="flex justify-between">
                <li className="mr-[10px]">
                    <Link className="text-white" href="/">Privacy & Terms</Link>
                </li>
                <li>
                    <Link className="text-white" href="/">Sitemap</Link>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
}
