import TitleSubtitleDescriptionModule from "@/components/TitleSubtitleDescriptionModule";
import Layout from "./layout";
export default function Home() {
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
      <TitleSubtitleDescriptionModule blok={IntroBlok} />
    </Layout>
  );
}
