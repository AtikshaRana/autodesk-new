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

  const { dataProduct } = useContext(PageContext);
  const trackingAttr = composeTrackingAttr({
    analytics: blok?.dataAnalytics,
    product: blok?.dataProduct || dataProduct,
  });
  const href = multilinkToUrl(blok.linkUrl);
  const wistiaId = href.includes("#wistia_")
    ? href.substring("#wistia_".length)
    : null;
  const [wistiaScriptLoaded, setWistiaScriptLoaded] = useState(false);

  useEffect(() => {
    if (wistiaScriptLoaded) {
      initWistiaPopover(wistiaId);
    }
  }, [wistiaScriptLoaded]);

  const handleClick = (e) => {
    if (blok?.mutinyConversion) {
      triggerMutinyConversion(blok.mutinyConversion);
    }

    if (wistiaId && !wistiaScriptLoaded) {
      e.preventDefault();
      loadWistiaScript(setWistiaScriptLoaded);
    }
  };

  const renderButton = () => {
    return (
      <Link
        href={href}
        className={clsx(
          "button relative inline-block cursor-pointer rounded-[4px] ",
          twConfig[modifyStr(blok?.style)],
          blok?.icon && "icon !pr-[46px]",
          bg,
        )}
        onClick={handleClick}
        {...trackingAttr}
      >
        {blok?.text}
        <span className="absolute right-[16px] top-[50%] h-[24px] w-[24px] translate-y-[-50%] bg-contain bg-center bg-no-repeat">
          <ArrowIcons ctaIcon={blok} bg={bg} />
        </span>
      </Link>
    );
  };

  if (wistiaId) {
    return (
      <span>
        <span
          className={`wistia_embed wistia_async_${wistiaId} popover=true popoverContent=link absolute`}
        />
        {renderButton()}
      </span>
    );
  } else {
    return <>{renderButton()}</>;
  }
}

export default DynamicBtn;
