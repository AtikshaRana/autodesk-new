import legacyPageData from "@/public/data/legacy-page-data.json";
import { multilinkToUrl } from "@/utils/multilinkToUrl";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  let footerData = JSON.parse(legacyPageData?.result?.data?.bottomNav?.content);
  let socialIcons = footerData.socialLinks;
  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer relative mx-auto w-full max-w-[1920px] bg-black py-20 pb-10 md:py-[20px]">
      <div className="container">
        <div className="wrapper flex flex-wrap ">
          {footerData.menus.map((item, i) => {
            return (
              <div
                className="footer_list w-1/5 pr-5 md:w-full md:last:mb-0 lg:mb-[15px] tablet:w-[50%] "
                key={i}
              >
                <h6 className="mb-7 uppercase text-white">
                  {item?.heading?.[0]?.textToHyperlink}
                </h6>
                <ul>
                  {item.menu1.map((list, index) => {
                    return (
                      <li
                        key={index}
                        className={` mb-3 text-white ${list?.icon.length > 0 && "flex items-center"}`}
                      >
                        {list.icon.length > 0 && (
                          <div className="iconWrap mr-2">
                            <Image
                              src={`https:${list?.icon?.[0]?.image}`}
                              height={18}
                              width={18}
                              alt="image"
                            />
                          </div>
                        )}
                        <Link
                          className=" text-white"
                          href={multilinkToUrl(list?.link)}
                          target="_blank"
                        >
                          {list.textToHyperlink}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-16 md:mt-[20px]">
          <div className="wrapper flex flex-wrap items-center">
            <div className="col-policy mr-[20px] w-[62%] md:order-2 md:mr-0 md:w-full">
              <Link
                href="https://www.autodesk.com/company/legal-notices-trademarks/privacy-statement?_ga=2.254122760.1430555354.1713426746-2055187556.1708148316"
                className="relative inline-block font-[400]  text-dull-white hover:text-white"
              >
                Privacy
              </Link>
              <Link
                href={
                  "https://www.autodesk.com/company/legal-notices-trademarks/ccpa-do-not-sell?_ga=2.14455223.1430555354.1713426746-2055187556.1708148316"
                }
                className="relative inline-block font-[400]  text-dull-white hover:text-white"
              >
                Do not sell or share my personal information
              </Link>
              <a
                className="relative inline-block cursor-pointer font-[400] text-dull-white hover:text-white"
                data-opt-in-preferences
              >
                Cookie preferences
              </a>
              <Link
                href={
                  "https://www.autodesk.com/genuine/report-piracy?_ga=2.43614693.1387722681.1713431566-2055187556.1708148316"
                }
                className="relative inline-block font-[400] text-dull-white  hover:text-white"
              >
                Report Noncompliance
              </Link>
              <Link
                href={
                  "https://www.autodesk.com/company/terms-of-use/en/general-terms?_ga=2.215650135.1387722681.1713431566-2055187556.1708148316"
                }
                className="relative inline-block font-[400]  text-dull-white hover:text-white"
              >
                Terms of use
              </Link>
              <Link
                href={
                  "https://www.autodesk.com/company/legal-notices-trademarks?_ga=2.215650135.1387722681.1713431566-2055187556.1708148316"
                }
                className="relative inline-block font-[400] text-dull-white hover:text-white"
              >
                Legal
              </Link>
              <span className="text-s relative inline-block font-[400]  text-dull-white hover:text-white ">
                © {currentYear} Autodesk, Inc. All rights reserved
              </span>
            </div>
            <div className="col_icons flex flex-wrap items-center md:order-1 md:mb-[20px] md:w-full">
              {socialIcons.map((socialIcon) => {
                return (
                  <div
                    key={socialIcon._uid}
                    className="icon_wrap relative mr-5 w-5 items-center"
                  >
                    <Link
                      className="empty-link"
                      href={socialIcon?.link?.url}
                    ></Link>
                    <Image
                      src={`https:${socialIcon?.contentToHyperlink?.[0]?.image}`}
                      alt="icons"
                      width={20}
                      height={20}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
