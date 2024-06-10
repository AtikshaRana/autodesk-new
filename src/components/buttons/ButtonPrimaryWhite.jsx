import Link from "next/link";

function ButtonPrimaryWhite({ blok, handleClick, href, trackingAttr }) {
  return (
    <Link
      href={href}
      className={`button btn-primary-white relative inline-block cursor-pointer rounded-[4px] bg-white px-[20px] py-[12px] uppercase text-black transition-all duration-200 hover:bg-[#5F60FF] hover:text-white ${blok?.icon === "Arrow" && `pr-[46px]`}`}
      onClick={handleClick}
      {...trackingAttr}
    >
      <span>
        {blok?.icon === "Arrow" && (
          <span className="absolute right-[16px] top-[50%] h-[24px] w-[24px] translate-y-[-50%] bg-contain bg-center bg-no-repeat">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <defs>
                <style>{`.cls-2{fill:none;stroke:#000;strokeLinecap:round;strokeLinejoin:round;strokeWidth:1.5px} .button:hover .cls-2{stroke:#fff;}`}</style>
              </defs>
              <g id="Group_7005" transform="rotate(90 12 12)">
                <path id="Path_238" fill="none" d="M0 0h24v24H0z" />
                <circle
                  id="Ellipse_299"
                  cx="9"
                  cy="9"
                  r="9"
                  className="cls-2"
                  transform="translate(3 3)"
                />
                <path
                  id="Line_286"
                  d="M4 0L0 4"
                  className="cls-2"
                  transform="translate(8 8)"
                />
                <path
                  id="Line_287"
                  d="M0 0v8"
                  className="cls-2"
                  transform="translate(12 8)"
                />
                <path
                  id="Line_288"
                  d="M4 4L0 0"
                  className="cls-2"
                  transform="translate(12 8)"
                />
              </g>
            </svg>
          </span>
        )}
        {blok?.text}
      </span>
    </Link>
  );
}

export default ButtonPrimaryWhite;
