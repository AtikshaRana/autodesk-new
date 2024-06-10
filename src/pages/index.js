import TitleSubtitleDescriptionModule from "@/components/TitleSubtitleDescriptionModule";
import HeroBannerModule from "@/components/HeroBannerModule";
import Layout from "./layout";
export default function Home() {
  const bannerData = {
    id: "product-name",
    backgroundImg: "/images/HeroBanner.avif",
    backgroundImgOnMobile: "/images/PhoneBannerImage.avif",
    component: "herobannerModule",
    sectionPaddingBottom: "standard",
    sectionPaddingTop: "large",
    title: "Build it with Autodesk ",
    subtitle:
      "Achieve results that matter—safer, faster, and with less stress—on Autodesk’s leading construction management platform. ",
    cta: [
      {
        _uid: "24f412dc-2d63-4934-9c31-40e4b900dc8f",
        text: "GET A DEMO",
        style: "Button Primary",
        icon: "Arrow",
        linkUrl: {
          linktype: "story",
          fieldtype: "multilink",
          cached_url: "us/_design-system/connected-two-col-highlights",
        },
        component: "CTA",
      },
      {
        _uid: "24f412dc",
        text: "WATCH VIDEO",
        style: "Button Secondary",
        icon: "Arrow",
        linkUrl: {
          linktype: "story",
          fieldtype: "multilink",
          cached_url: "us/_design-system/connected-two-col-highlights",
        },
        component: "CTA",
      },
    ],
    videoUrl:
      "https://a-us.storyblok.com/f/1018383/x/a690a8c4d5/homepage-hero-transparent-mock.webm",
    description: {},
  };
  const IntroBlok = {
    alignment: "Center",
    backgroundColor: "Gray Gradient",
    component: "TitleSubtitleDescriptionModule",
    cta: [],
    description:
      "Keep your projects on track with real-time insights into costs, schedules, and more. When you know where every project stands today, you can get more done tomorrow.",
    eyebrow: "",
    eyebrowIsH1: false,
    sectionPaddingBottom: "",
    sectionPaddingTop: "Standard",
    size: "Large",
    title: "Construction software built for builders",
  };

  return (
    <Layout>
      <HeroBannerModule blok={bannerData} />
      <TitleSubtitleDescriptionModule blok={IntroBlok} />
    </Layout>
  );
}
