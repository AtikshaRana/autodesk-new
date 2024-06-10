"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { modifyStr } from "@/utils/strings";
import ArrowIcons from "@/components/buttons/ButtonIcons";

// import { PageContext } from "@/components/PageProvider";
import { multilinkToUrl } from "@/utils/multilinkToUrl";
import { composeTrackingAttr } from "@/utils/tracking";
import { initWistiaPopover, loadWistiaScript } from "@/utils/wistia";
import { useContext, useEffect, useState } from "react";

function DynamicBtn({ blok, bg }) {
  const twConfig = {
    link_with_underline_white: "link-with-underline-white",
    button_primary: "button-primary",
    button_primary_white: "button-primary-white",
    link_with_underline: "link-with-underline",
    button_secondary: "button-secondary",
    button_secondary_with_border_black: "button-secondary-with-border-black",
    button_tertiary: "button-tertiary",
  };

  const renderButton = () => {
    return (
      <Link
        href={"#"}
        className={clsx(
          "button relative mb-[1px] inline-block cursor-pointer rounded-[4px] ",
          twConfig[modifyStr(blok?.style)],
          blok?.icon && "icon !pr-[46px]",
          blok?.type == "Login" && "login-btn",
          bg,
        )}
      >
        {blok?.text}
        <span className="absolute right-[16px] top-[50%] h-[24px] w-[24px] translate-y-[-50%] bg-contain bg-center bg-no-repeat">
          <ArrowIcons ctaIcon={blok} bg={bg} />
        </span>
      </Link>
    );
  };

  return <>{renderButton()}</>;
}

export default DynamicBtn;
