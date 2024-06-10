import Link from "next/link";

function UnderlineLinkWhite({ blok, handleClick, href, trackingAttr }) {
  const underline =
    'after:content-[""] after:absolute after:h-[1px] after:bottom-[5px] after:left-0 after:bg-white';

  return (
    <Link
      href={href}
      className={`button underline-link-white text-bold relative inline-block cursor-pointer rounded-[4px] py-[8px] pr-[20px] uppercase text-white ${underline} transition-all duration-200 hover:text-[#5F60FF] hover:opacity-[0.6] focus:text-[#5F60FF] focus:opacity-[1] ${blok.icon === "Arrow" ? `pr-[46px] after:w-[calc(100%-17px)]` : "after:w-full"}`}
      onClick={handleClick}
      {...trackingAttr}
    >
      {blok?.icon === "Arrow" && (
        <span className="absolute right-[16px] top-[50%] h-[24px] w-[24px] translate-y-[-50%] bg-contain bg-center bg-no-repeat">
          <svg width="24" height="24">
            <defs>
              <style>{`.cls-4{fill:none;strokeLinecap:round;strokeLinejoin:round;strokeWidth:1.5px}`}</style>
            </defs>
            <g id="Group_7005" transform="rotate(90 12 12)">
              <path id="Path_238" fill="none" d="M0 0h24v24H0z" />
              <circle
                id="Ellipse_299"
                cx="9"
                cy="9"
                r="9"
                className="cls-4 stroke-white group-hover:!stroke-iris"
                transform="translate(3 3)"
              />
              <path
                id="Line_286"
                d="M4 0L0 4"
                className="cls-4 stroke-white group-hover:!stroke-iris"
                transform="translate(8 8)"
              />
              <path
                id="Line_287"
                d="M0 0v8"
                className="cls-4 stroke-white group-hover:!stroke-iris"
                transform="translate(12 8)"
              />
              <path
                id="Line_288"
                d="M4 4L0 0"
                className="cls-4 stroke-white group-hover:!stroke-iris"
                transform="translate(12 8)"
              />
            </g>
          </svg>
        </span>
      )}
      {blok.text}
    </Link>
  );
}

export default UnderlineLinkWhite;
