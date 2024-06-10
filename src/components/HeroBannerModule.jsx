"use client"
import Image from "next/image";
import DynamicBtn from "@/components/buttons/DynamicBtn";
import Link from "next/link";
import { clsx } from "clsx";
import VideoBlock from "./Video";

export default function HeroBannerModule({ blok }) {

  return (
    <section
      id={blok?.id}
      className={`${blok.component} retalive flex min-h-[645px] items-center md:py-[40px] lg:min-h-[500px] tablet:py-[60px]  ${`pb-${blok?.sectionPaddingBottom}`} ${`pt-${blok?.sectionPaddingTop}`}  ${blok?.background == "Gradient" ? "bg-bannerGradient" : "bg-black"} overflow-hidden`}
    >
      {blok?.backgroundImg && (
        <div className="bg absolute right-0 top-0 z-[1] h-full w-full md:hidden">
          <Image
            className=" h-full w-full bg-right object-cover"
            src={blok?.backgroundImg}
            alt="rating"
            width={900}
            height={900}
            quality={75}
          />
        </div>
      )}
      {blok?.backgroundImgOnMobile && (
        <div className="bg absolute bottom-0 right-0 z-[0] h-auto w-full md-up:hidden  xs:h-[55%]  ">
          <Image
            className=" h-full bg-right object-cover object-right"
            src={blok?.backgroundImgOnMobile}
            alt="rating"
            width={900}
            height={900}
            quality={75}
          />
        </div>
      )}

      <div className="container">
        <div
          className={`wrapper ml-[-10px] flex w-[calc(100%+20px)] flex-wrap items-center md:ml-0 md:w-full lg:mt-[50px]`}
        >
          <div
            className={clsx(
              "z-[2] mx-[10px]  md:w-full",
              blok?.foregroundImg || blok?.videoUrl || blok?.backgroundImg
                ? "w-[calc(45%-20px)]"
                : "w-[calc(100%-20px)]",
            )}
          >
            <div>
              {blok?.img && (
                <div className="mb-[40px] h-[62px] w-full max-w-[300px] md:mb-[20px]">
                  <Image
                    className=" h-full bg-right object-cover"
                    src={blok?.img}
                    alt="rating"
                    width={300}
                    height={62}
                    quality={75}
                  />
                </div>
              )}
              <span className="mb-[7px] block text-[16px] font-[700] uppercase text-gold md:text-[14px] ">
                CONSTRUCTION MANAGEMENT SOFTWARE
              </span>
              <h1 className="text-white">{blok?.title}</h1>
              <p
                className={clsx(
                  "mt-[11px]  text-gray xl-up:text-[21px]",
                  blok?.foregroundImg || blok?.videoUrl
                    ? "max-w-[525px]"
                    : "w-full",
                )}
              >
                {blok?.subtitle}
              </p>
              <div className="btn-wrap mt-[30px] md:mt-[20px] ">
                {blok?.cta?.map((cta) => {
                  return <DynamicBtn key={cta._uid} blok={cta} bg="black" />;
                })}
              </div>
              <div class="mt-[50px] text-white md:mt-[20px] lg:hidden">
                <div class="markdown">
                  <p class="body-default">
                    <Image
                      className=" h-full bg-right object-cover"
                      src={
                        "https://a-us.storyblok.com/f/1018383/118x22/ed27a7c69d/star-ratings.svg/m/100x0"
                      }
                      alt="rating"
                      width={100}
                      height={18}
                      quality={75}
                    />
                    Based on +17,000 reviews
                  </p>
                </div>
              </div>
              {blok?.logoDescription && (
                <div className="mt-[20px] flex flex-wrap md:hidden lg-up:justify-between ">
                  {blok?.logoDescription.map((data) => (
                    <div
                      key={data._uid}
                      className="group relative mt-[20px] flex items-center pr-[25px]"
                    >
                      <Link
                        className=" absolute h-full w-full"
                        href={"#"}
                        target="_blank"
                      ></Link>
                      <div className="mr-[10px] h-[20px] w-[20px] ">
                        {data?.icon && data?.icon == "appleIcon" ? (
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <mask
                              id="mask0_1314_7298"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_1314_7298)"></g>
                            <g clip-path="url(#clip0_1314_7298)">
                              <mask
                                id="mask1_1314_7298"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="4"
                                y="2"
                                width="16"
                                height="19"
                              >
                                <path
                                  d="M20 2.5H4V20.6333H20V2.5Z"
                                  className=" fill-white group-hover:fill-[#5F60FF]"
                                />
                              </mask>
                              <g mask="url(#mask1_1314_7298)">
                                <path
                                  d="M19.9995 15.809C19.6699 16.5791 19.2648 17.3163 18.7898 18.0105C17.9981 19.1753 16.8898 20.6332 15.5249 20.6332C14.3057 20.644 13.9938 19.8618 12.3392 19.8618C10.6845 19.8618 10.3378 20.6332 9.11856 20.6332C7.74736 20.6332 6.69125 19.3157 5.91223 18.154C3.71609 14.8957 3.4865 11.0713 4.84029 9.03796C5.80298 7.59087 7.3246 6.74854 8.74964 6.74854C10.1747 6.74854 11.1247 7.5199 12.3201 7.5199C13.4855 7.5199 14.1964 6.74854 15.878 6.74854C17.1447 6.74854 18.4953 7.42271 19.4548 8.58902C16.3134 10.266 16.8248 14.6396 19.9995 15.809Z"
                                  className="fill-white group-hover:fill-[#5F60FF]"
                                />
                                <path
                                  d="M14.6082 5.44509C15.2146 4.68143 15.6785 3.60306 15.5107 2.5C14.5132 2.56634 13.3415 3.18497 12.6606 3.99183C12.0415 4.72463 11.5317 5.80917 11.7312 6.8644C12.8221 6.89834 13.9495 6.26428 14.6082 5.44509Z"
                                  className="fill-white group-hover:fill-[#5F60FF]"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_1314_7298">
                                <rect
                                  width="16"
                                  height="19"
                                  className=" fill-white group-hover:fill-[#5F60FF]"
                                  transform="translate(4 2.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        ) : (
                          <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            className="group-hover:fill-[#5F60FF]"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <mask
                              id="mask0_3299_2645"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="16"
                              height="18"
                            >
                              <path
                                d="M16 0.5H0V17.5364H16V0.5Z"
                                className="fill-white group-hover:fill-[#5F60FF]"
                              />
                            </mask>
                            <g mask="url(#mask0_3299_2645)">
                              <path
                                d="M0.567879 0.5C0.204437 0.607897 0 0.982697 0 1.50515V16.5539C0 17.0736 0.198758 17.4256 0.548004 17.5364L8.31091 9.01819L0.567879 0.5ZM1.90807 0.911713L8.80213 8.48722L11.102 5.96584L1.90807 0.911713ZM11.7494 6.3236L9.28199 9.01819L11.7579 11.7298L15.1283 9.87853C15.753 9.52644 16 9.36176 16 9.02671C16 8.69166 15.753 8.52981 15.1283 8.17489L11.7494 6.3236ZM8.80213 9.56052L1.88536 17.1445L11.1134 12.0933L8.80213 9.56052Z"
                                className="fill-white group-hover:fill-[#5F60FF]"
                              />
                            </g>
                          </svg>
                        )}
                        <Image
                          className=" h-full bg-right object-cover brightness-0 "
                          src={data?.logo}
                          alt="rating"
                          width={16}
                          height={19}
                          quality={75}
                        />
                      </div>
                      <p className="text-white group-hover:text-iris">
                        {data?.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div
            className={clsx(
              "z-[2] mx-[10px]  md:mt-[20px] md:w-full",
              blok?.foregroundImg || blok?.videoUrl
                ? "w-[calc(55%-20px)]"
                : "w-0 overflow-hidden",
            )}
          >
            {blok?.videoUrl && (

              <div className="media-wrap ml-auto max-w-[600px]" loading="lazy">
                <VideoBlock blok={blok?.videoUrl} />
              </div>
            )}
            {blok?.foregroundImg && (
              <div className="media-wrap ml-auto max-w-[600px] md:mx-auto">
                <Image
                  src={blok?.foregroundImg}
                  alt={blok?.alt}
                  width={600}
                  height={600}
                />
              </div>
            )}
          </div>
        </div>
        {blok?.logoDescription && (
          <div className="mt-[20px] flex flex-wrap lg-up:justify-between md-up:hidden ">
            {blok?.logoDescription.map((data) => (
              <div
                key={data._uid}
                className="group relative mt-[20px] flex items-center pr-[25px]"
              >
                <Link
                  className=" absolute h-full w-full"
                  href={"#"}
                  target="_blank"
                ></Link>
                <div className="mr-[10px] h-[20px] w-[20px] ">
                  {data?.icon && data?.icon == "appleIcon" ? (
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <mask
                        id="mask0_1314_7298"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_1314_7298)"></g>
                      <g clip-path="url(#clip0_1314_7298)">
                        <mask
                          id="mask1_1314_7298"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="4"
                          y="2"
                          width="16"
                          height="19"
                        >
                          <path
                            d="M20 2.5H4V20.6333H20V2.5Z"
                            className=" fill-white group-hover:fill-[#5F60FF]"
                          />
                        </mask>
                        <g mask="url(#mask1_1314_7298)">
                          <path
                            d="M19.9995 15.809C19.6699 16.5791 19.2648 17.3163 18.7898 18.0105C17.9981 19.1753 16.8898 20.6332 15.5249 20.6332C14.3057 20.644 13.9938 19.8618 12.3392 19.8618C10.6845 19.8618 10.3378 20.6332 9.11856 20.6332C7.74736 20.6332 6.69125 19.3157 5.91223 18.154C3.71609 14.8957 3.4865 11.0713 4.84029 9.03796C5.80298 7.59087 7.3246 6.74854 8.74964 6.74854C10.1747 6.74854 11.1247 7.5199 12.3201 7.5199C13.4855 7.5199 14.1964 6.74854 15.878 6.74854C17.1447 6.74854 18.4953 7.42271 19.4548 8.58902C16.3134 10.266 16.8248 14.6396 19.9995 15.809Z"
                            className="fill-white group-hover:fill-[#5F60FF]"
                          />
                          <path
                            d="M14.6082 5.44509C15.2146 4.68143 15.6785 3.60306 15.5107 2.5C14.5132 2.56634 13.3415 3.18497 12.6606 3.99183C12.0415 4.72463 11.5317 5.80917 11.7312 6.8644C12.8221 6.89834 13.9495 6.26428 14.6082 5.44509Z"
                            className="fill-white group-hover:fill-[#5F60FF]"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1314_7298">
                          <rect
                            width="16"
                            height="19"
                            className=" fill-white group-hover:fill-[#5F60FF]"
                            transform="translate(4 2.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      className="group-hover:fill-[#5F60FF]"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <mask
                        id="mask0_3299_2645"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="16"
                        height="18"
                      >
                        <path
                          d="M16 0.5H0V17.5364H16V0.5Z"
                          className="fill-white group-hover:fill-[#5F60FF]"
                        />
                      </mask>
                      <g mask="url(#mask0_3299_2645)">
                        <path
                          d="M0.567879 0.5C0.204437 0.607897 0 0.982697 0 1.50515V16.5539C0 17.0736 0.198758 17.4256 0.548004 17.5364L8.31091 9.01819L0.567879 0.5ZM1.90807 0.911713L8.80213 8.48722L11.102 5.96584L1.90807 0.911713ZM11.7494 6.3236L9.28199 9.01819L11.7579 11.7298L15.1283 9.87853C15.753 9.52644 16 9.36176 16 9.02671C16 8.69166 15.753 8.52981 15.1283 8.17489L11.7494 6.3236ZM8.80213 9.56052L1.88536 17.1445L11.1134 12.0933L8.80213 9.56052Z"
                          className="fill-white group-hover:fill-[#5F60FF]"
                        />
                      </g>
                    </svg>
                  )}
                  {data?.logo && (
                    <Image
                      className=" h-full bg-right object-cover brightness-0 "
                      src={data?.logo}
                      alt="rating"
                      width={16}
                      height={19}
                      quality={75}
                    />
                  )}
                </div>
                <p className="text-white group-hover:text-iris">
                  {data?.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
