import Link from "next/link";

function PlainBtn({ blok, handleClick, href, trackingAttr }) {
  const arrow =
    'before:content-[""] before:absolute before:top-[50%] before:right-[16px] before:w-[20px] before:h-[20px] before:bg-[url("/icons/arrow-right-circle.svg")] before:bg-contain before:bg-no-repeat before:bg-center before:translate-y-[-50%] ';

  return (
    <Link
      href={href}
      className={`button plainBtn text-bold relative inline-block cursor-pointer rounded-[4px] border-[1px] border-transparent px-[20px] py-[12px] uppercase text-black transition-all  duration-300 hover:border-[1px] hover:border-iris focus:outline-[#5F60FF] ${blok.icon === "Arrow" && `pr-[46px] ${arrow}`}`}
      onClick={handleClick}
      {...trackingAttr}
    >
      {blok.text}
    </Link>
  );
}

export default PlainBtn;
