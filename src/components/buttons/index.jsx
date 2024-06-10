"use client";

import { PageContext } from "@/components/PageProvider";
import ButtonPlain from "@/components/buttons/ButtonPlain";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import ButtonPrimaryWhite from "@/components/buttons/ButtonPrimaryWhite";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";
import ButtonSecondaryBlackBorder from "@/components/buttons/ButtonSecondaryBlackBorder";
import LinkUnderline from "@/components/buttons/LinkUnderline";
import LinkUnderlineWhite from "@/components/buttons/LinkUnderlineWhite";
import { multilinkToUrl } from "@/utils/multilinkToUrl";
import { composeTrackingAttr } from "@/utils/tracking";
import { initWistiaPopover, loadWistiaScript } from "@/utils/wistia";
import { useContext, useEffect, useState } from "react";

export default function Button({ blok, bg }) {
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

  const renderButtonVariant = () => {
    switch (blok.style) {
      case "Button Primary":
        return bg === "black" ? (
          <ButtonPrimaryWhite
            blok={blok}
            handleClick={handleClick}
            href={href}
            trackingAttr={trackingAttr}
          />
        ) : (
          <ButtonPrimary blok={blok} trackingAttr={trackingAttr} href={href} />
        );
      case "Button Primary White":
        return (
          <ButtonPrimaryWhite
            blok={blok}
            handleClick={handleClick}
            href={href}
            trackingAttr={trackingAttr}
          />
        );
      case "Link with Underline":
        return bg === "black" ? (
          <LinkUnderlineWhite
            blok={blok}
            handleClick={handleClick}
            href={href}
            trackingAttr={trackingAttr}
          />
        ) : (
          <LinkUnderline
            blok={blok}
            handleClick={handleClick}
            href={href}
            trackingAttr={trackingAttr}
          />
        );
      case "Link with Underline White":
        return (
          <LinkUnderlineWhite
            blok={blok}
            handleClick={handleClick}
            href={href}
            trackingAttr={trackingAttr}
          />
        );
      case "Button Secondary":
        return (
          <ButtonSecondary
            blok={blok}
            handleClick={handleClick}
            href={href}
            trackingAttr={trackingAttr}
          />
        );
      case "Button Secondary with Border Black":
        return (
          <ButtonSecondaryBlackBorder
            blok={blok}
            handleClick={handleClick}
            href={href}
            trackingAttr={trackingAttr}
          />
        );
      default:
        return (
          <ButtonPlain
            blok={blok}
            handleClick={handleClick}
            href={href}
            trackingAttr={trackingAttr}
          />
        );
    }
  };

  // Handle Wistia popover links
  // Wistia Docs: https://docs.wistia.com/docs/popover-embed-customization
  if (wistiaId) {
    return (
      <span>
        <span
          className={`wistia_embed wistia_async_${wistiaId} popover=true popoverContent=link absolute`}
        />
        {renderButtonVariant()}
      </span>
    );
  }

  return renderButtonVariant();
}
