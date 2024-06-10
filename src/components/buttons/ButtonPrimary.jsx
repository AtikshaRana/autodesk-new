import Link from "next/link";

function ButtonPrimary({ blok, handleClick, href, trackingAttr }) {
  const arrow =
    'before:content-[""] before:absolute before:top-[50%] before:right-[16px] before:w-[20px] before:h-[20px] before:bg-[url("/icons/arrow-right.svg")] before:bg-contain before:bg-no-repeat before:bg-center before:translate-y-[-50%] ';

  return (
    <Link
      href={href}
      className={`button btnPrimary relative inline-block cursor-pointer rounded-[4px] bg-black px-[20px] py-[12px] uppercase text-white transition-all duration-200 hover:bg-[#5F60FF] ${blok.icon === "Arrow" && `pr-[46px] ${arrow}`}`}
      onClick={handleClick}
      {...trackingAttr}
    >
      {blok.text}
    </Link>
  );
}

export default ButtonPrimary;
