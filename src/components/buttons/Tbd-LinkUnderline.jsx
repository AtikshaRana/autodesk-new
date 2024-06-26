import ArrowIcons from "@/components/buttons/ButtonIcons";
import Link from "next/link";

function UnderlineLink({ blok, handleClick, href, trackingAttr }) {
  return (
    <Link
      className={`button underlineLink text-bold group relative inline-block cursor-pointer rounded-[4px] py-[8px] uppercase text-black underline transition-all duration-200 hover:text-[#5F60FF] focus:text-[#5F60FF] focus:opacity-[1] ${blok.icon === "Arrow" && `pr-[46px]`}`}
      href={href}
      // className={`button  ${blok?.icon === "Play" && "videoBtn"} btnSecondary relative inline-block cursor-pointer rounded-[4px] bg-transparent px-[20px]  py-[12px] uppercase text-white outline outline-[1px] outline-white transition-all duration-200 hover:outline-[#5F60FF] ${blok?.icon && "pr-[46px]"}`}
      onClick={handleClick}
      {...trackingAttr}
    >
      <span className="absolute right-[16px] top-[50%] h-[24px] w-[24px] translate-y-[-50%] bg-contain bg-center bg-no-repeat">
        <ArrowIcons ctaIcon={blok} bg={"black"} />
      </span>

      {blok?.text}
    </Link>
  );
}

export default UnderlineLink;
