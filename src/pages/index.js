import React from "react";
import Layout from "./layout";
import TitleSubtitleDescriptionModule from "@/components/TitleSubtitleDescriptionModule";
import HeroBannerModule from "@/components/HeroBannerModule";
import CustomerLogosModule from "@/components/CustomerLogosModule";
import MediaModule from "@/components/MediaModule";
import TwoColHighlightWithImg from "@/components/TwoColHighlightWithImg";
import TabsModule from "@/components/TabsModule";
import QuoteModule from "@/components/QuoteModule";
import CtaBannerModule from "@/components/CtaBannerModule";
export default function page() {
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
    videoUrl: "/video/homepage-hero-transparent-mock.webm",
    description: {},
  };

  const logoModule = {
    sectionPaddingTop: "half",
    _uid: "e9ab2d21-af65-4572-8795-565c0ec44b30",
    logos: [
      {
        _uid: "be450b26-0ece-4103-9502-0a61d5494ebd",
        image: {
          ImageUrl:
            "https://a-us.storyblok.com/f/1018383/105x51/9b1344646c/dpr-logo.svg",
          imageAlt: "gaylor",
        },
        component: "Image",
      },
      {
        _uid: "6148ffe1-3312-4b2f-8fcb-7a57faecc4fc",
        image: {
          ImageUrl: "/images/princeton.png",
          imageAlt: "princeton",
        },
        component: "Image",
      },
      {
        _uid: "81ba3c75-7768-47c6-861b-b0a8d3e67231",
        image: {
          ImageUrl: "/images/gaylor.png",
          imageAlt: "gaylor",
        },

        component: "Image",
      },
      {
        _uid: "c9eaa5bc-53d2-43ed-8cad-ee8adaa27dc8",
        image: {
          ImageUrl: "/images/boldt.png",
          imageAlt: "boldt",
        },
        component: "Image",
      },
      {
        _uid: "7a534183-7742-4edb-98db-f5036b79a3c1",
        image: {
          ImageUrl:
            "https://a-us.storyblok.com/f/1018383/115x51/34ce56d683/walsh-green-1.svg",
          imageAlt: "walsh-green",
        },

        component: "Image",
      },
    ],
    subtitle:
      "Construction management software trusted by builders on 2M+ projects  ",
    component: "CustomerLogosModule",
  };
  const mediaBlock = {
    title: "Your single source of truth for every project",
    description:
      "With Autodesk Construction Cloud, your project teams can collaborate securely and quickly, so you can deliver projects on time and on budget.      ",
    sectionPaddingBottom: "Standard",
    sectionPaddingTop: "Standard",
    size: "Large",
    media: [
      {
        image: {
          filename: "/images/media-block.avif",
          altText: "Media block",
        },
      },
    ],
    cta: [
      {
        _uid: "24f412dc-2d63-4934-9c31-40e4b900dc8f",
        text: "SEE ALL PRODUCTS",
        style: "Button Primary",
        icon: "Arrow",
        linkUrl: {
          linktype: "story",
          fieldtype: "multilink",
          cached_url: "us/_design-system/connected-two-col-highlights",
        },
        component: "CTA",
      },
    ],
  };
  const TwoColData = {
    backgroundColor: "Gray Gradient",
    sectionPaddingBottom: "Standard",
    sectionPaddingTop: "Standard",
    videoUrl:
      "https://a-us.storyblok.com/f/1018383/x/a690a8c4d5/homepage-hero-transparent-mock.webm",
    image: [
      {
        _uid: "a82149e9-e9cf-468a-94ae-e0faa44d0c68",
        image: "/images/General-Contractors.avif",
        altText:
          "Construction cost management software for construction cost forecasting",
      },
    ],
    component: "twoColHighlightsWithImage",
    highlights: [
      {
        _uid: "9150ec5c-6f0b-44b9-8777-1c5df8d145d0",
        title: "General Contractors",
        description:
          "Spend less time in the weeds and more time building. Give your teams the real-time data they need to get the job done.",
        ctas: [
          {
            _uid: "24f412dc-2d63-4934-i-40e4b900dc8f",
            text: "EXPLORE GENERAL CONTRACTOR SOLUTIONS",
            style: "Button Primary",
            icon: "Arrow",
            linkUrl: {
              linktype: "story",
              fieldtype: "multilink",
              cached_url: "us/_design-system/connected-two-col-highlights",
            },
            component: "CTA",
          },
        ],
      },
    ],
    imageAlign: "center",
    description: "",
    imageFullWidth: false,
    addShadowToImage: false,
    showImageOnMobile: true,
    isMobileScreenshot: false,
  };
  const TwoColData2 = {
    backgroundColor: "Gray Gradient",
    sectionPaddingBottom: "Standard",
    sectionPaddingTop: "Standard",
    videoUrl:
      "https://a-us.storyblok.com/f/1018383/x/a690a8c4d5/homepage-hero-transparent-mock.webm",
    image: [
      {
        _uid: "a82149e9-e9cf-468a-94ae-e0faa44d0c68",
        image: "/images/specialty-contractors.avif",
        altText:
          "Construction cost management software for construction cost forecasting",
      },
    ],
    component: "twoColHighlightsWithImage",
    highlights: [
      {
        _uid: "9150ec5c-6f0b-44b9-8777-1c5df8d145d0",
        title: "Specialty Contractors",
        description:
          "Set your teams up for success at any stage with robust solutions for planning, fabrication, and field work.          ",
        ctas: [
          {
            _uid: "24f412dc-2d63-4934-i-40e4b900dc8f",
            text: "EXPLORE SPECIALTY CONTRACTOR SOLUTIONS",
            style: "Button Primary",
            icon: "Arrow",
            linkUrl: {
              linktype: "story",
              fieldtype: "multilink",
              cached_url: "us/_design-system/connected-two-col-highlights",
            },
            component: "CTA",
          },
        ],
      },
    ],
    imageAlign: "center",
    description: "",
    imageOnLeft: true,
    imageFullWidth: false,
    addShadowToImage: false,
    showImageOnMobile: true,
    isMobileScreenshot: false,
  };
  const TwoColData3 = {
    backgroundColor: "Gray Gradient",
    sectionPaddingBottom: "Standard",
    sectionPaddingTop: "Standard",
    videoUrl:
      "https://a-us.storyblok.com/f/1018383/x/a690a8c4d5/homepage-hero-transparent-mock.webm",
    image: [
      {
        _uid: "a82149e9-e9cf-468a-94ae-e0faa44d0c68",
        image: "/images/owners.avif",
        altText:
          "Construction cost management software for construction cost forecasting",
      },
    ],
    component: "twoColHighlightsWithImage",
    highlights: [
      {
        _uid: "9150ec5c-6f0b-44b9-8777-1c5df8d145d0",
        title: "Owners",
        description:
          "Manage construction lifecycle costs across your portfolio and make more informed decisions with the latest BIM data.          ",
        ctas: [
          {
            _uid: "24f412dc-2d63-4934-i-40e4b900dc8f",
            text: "EXPLORE OWNER SOLUTIONS",
            style: "Button Primary",
            icon: "Arrow",
            linkUrl: {
              linktype: "story",
              fieldtype: "multilink",
              cached_url: "us/_design-system/connected-two-col-highlights",
            },
            component: "CTA",
          },
        ],
      },
    ],
    imageAlign: "center",
    description: "",
    imageFullWidth: false,
    addShadowToImage: false,
    showImageOnMobile: true,
    isMobileScreenshot: false,
  };
  const IntroBlok2 = {
    alignment: "Center",
    backgroundColor: "White",
    component: "TitleSubtitleDescriptionModule",
    cta: [],
    title: "Working together is no longer hard work",
    description:
      "Manage every construction project from design to done, with connected tools for every workflow.",
    eyebrow: "",
    eyebrowIsH1: false,
    sectionPaddingBottom: "",
    sectionPaddingTop: "Standard",
    size: "Large",
  };
  const tabContent = {
    backgroundColor: "White",
    component: "TabsModule",
    sectionPaddingBottom: "Standard",
    sectionPaddingTop: "Half",
    cta: [
      {
        component: "CTA",
        forwardUTMParams: false,
        icon: "Arrow",
        linkUrl: {
          fieldtype: "multilink",
          id: "",
          linktype: "url",
          url: "/workflows/",
        },
        style: "Link with Underline",
        text: "All capabilities",
        _uid: "fd695061-ab4d-45ff-b903-2109bb514037",
      },
    ],
    tabs: [
      {
        component: "Tab",
        tabName: "Artificial Intelligence",
        content: [
          {
            backgroundColor: "White",
            component: "TwoColHighlightsWithImageModule",
            highlight: [
              {
                component: "Highlight",
                description:
                  "Leverage Autodesk AI to help automate everyday construction workflows and surface insights to streamline decision making.",
                title: "Artificial Intelligence",
                cta: [
                  {
                    component: "CTA",
                    forwardUTMParams: false,
                    icon: "Arrow",
                    linkUrl: {
                      cached_url:
                        "/workflows/artificial-intelligence-construction/",
                      fieldtype: "multilink",
                      id: "",
                      linktype: "url",
                      url: "/workflows/artificial-intelligence-construction/",
                    },
                    style: "Button Primary",
                    text: "SEE MORE AI",
                    _uid: "fd695061-ab4d-45ff-b903-2109bb514037",
                  },
                ],
              },
            ],
            imageFullWidth: false,
            imageOnLeft: false,
            layoutHeight: "Short",
            media: [
              {
                alt: "Construction Management Software with AI",
                copyright: "",
                fieldtype: "asset",
                filename:
                  "https://a-us.storyblok.com/f/1018383/620x541/ee01409b4a/ai-for-construction-project-management.svg",
                focus: "",
                id: 695963,
                is_external_url: false,
                is_private: false,
              },
            ],
          },
        ],
        _uid: "56e85ede-e2b4-413f-bb07-8a3ff5de4de0",
      },
      {
        component: "Tab",
        tabName: "Document Management",
        content: [
          {
            backgroundColor: "White",
            component: "TwoColHighlightsWithImageModule",
            highlight: [
              {
                component: "Highlight",
                description:
                  "Stop searching for information. Centralize and manage all your documents in one place, from design to operations.",
                title: "Document Management",
                cta: [
                  {
                    component: "CTA",
                    forwardUTMParams: false,
                    icon: "Arrow",
                    linkUrl: {
                      cached_url:
                        "/workflows/construction-document-management/",
                      fieldtype: "multilink",
                      id: "",
                      linktype: "url",
                      url: "/workflows/construction-document-management/",
                    },
                    style: "Button Primary",
                    text: "SEE MORE DOCUMENT MANAGEMENT",
                    _uid: "fd695061-ab4d-45ff-b903-2109bb514037",
                  },
                ],
              },
            ],
            imageFullWidth: false,
            imageOnLeft: false,
            layoutHeight: "Short",
            media: [
              {
                alt: "Construction Management Software with AI",
                copyright: "",
                fieldtype: "asset",
                filename: "/images/doc-management.avif",
                focus: "",
                id: 695963,
                is_external_url: false,
                is_private: false,
              },
            ],
          },
        ],
        _uid: "dd7280ae-a6e4-454b-96111a87ef3",
      },
      {
        component: "Tab",
        tabName: "Bid Management",
        content: [
          {
            backgroundColor: "White",
            component: "TwoColHighlightsWithImageModule",
            highlight: [
              {
                component: "Highlight",
                description:
                  "Find and choose the right builders for every project from the largest crowd-sourced construction network.",
                title: "Bid Management",
                cta: [
                  {
                    component: "CTA",
                    forwardUTMParams: false,
                    icon: "Arrow",
                    linkUrl: {
                      cached_url: "/workflows/construction-bid-management/",
                      fieldtype: "multilink",
                      id: "",
                      linktype: "url",
                      url: "/workflows/construction-bid-management/",
                    },
                    style: "Button Primary",
                    text: "SEE MORE BID MANAGEMENT",
                    _uid: "fd695061-ab4d-45ff-b903-2109bb514037",
                  },
                ],
              },
            ],
            imageFullWidth: false,
            imageOnLeft: false,
            layoutHeight: "Short",
            media: [
              {
                alt: "Construction Management Software with AI",
                copyright: "",
                fieldtype: "asset",
                filename: "/images/big-management.avif",
                focus: "",
                id: 695963,
                is_external_url: false,
                is_private: false,
              },
            ],
          },
        ],
        _uid: "dd7280a-454b-96cc-5ce111a87ef3",
      },
      {
        component: "Tab",
        tabName: "Model Coordination",
        content: [
          {
            backgroundColor: "White",
            component: "TwoColHighlightsWithImageModule",
            highlight: [
              {
                component: "Highlight",
                description:
                  "Identify issues and reduce rework before breaking ground. Catch, clear, and resolve clashes before they become problems.                  ",
                title: "Model Coordination",
                cta: [
                  {
                    component: "CTA",
                    forwardUTMParams: false,
                    icon: "Arrow",
                    linkUrl: {
                      cached_url: "/workflows/bim-coordination-collaboration/",
                      fieldtype: "multilink",
                      id: "",
                      linktype: "url",
                      url: "/workflows/bim-coordination-collaboration/",
                    },
                    style: "Button Primary",
                    text: "SEE MORE MODEL COORDINATION",
                    _uid: "fd695061-ab4d-45ff-b903-2109bb514037",
                  },
                ],
              },
            ],
            imageFullWidth: false,
            imageOnLeft: false,
            layoutHeight: "Short",
            media: [
              {
                alt: "Construction Management Software with AI",
                copyright: "",
                fieldtype: "asset",
                filename: "/images/coordination.avif",
                focus: "",
                id: 695963,
                is_external_url: false,
                is_private: false,
              },
            ],
          },
        ],
        _uid: "dd80ae-a6e4-454b-96cc-5ce111a87ef3",
      },
      {
        component: "Tab",
        tabName: "Project Management",
        content: [
          {
            backgroundColor: "White",
            component: "TwoColHighlightsWithImageModule",
            highlight: [
              {
                component: "Highlight",
                description:
                  "Connect your field and office teams with configurable and intuitive RFIs, submittals, daily reports, and much more.                  ",
                title: "Project Management",
                cta: [
                  {
                    component: "CTA",
                    forwardUTMParams: false,
                    icon: "Arrow",
                    linkUrl: {
                      cached_url: "/workflows/construction-project-management/",
                      fieldtype: "multilink",
                      id: "",
                      linktype: "url",
                      url: "/workflows/construction-project-management/",
                    },
                    style: "Button Primary",
                    text: "SEE MORE PROJECT MANAGEMENT",
                    _uid: "fd695061-ab4d-45ff-b903-2109bb514037",
                  },
                ],
              },
            ],
            imageFullWidth: false,
            imageOnLeft: false,
            layoutHeight: "Short",
            media: [
              {
                alt: "Construction Management Software with AI",
                copyright: "",
                fieldtype: "asset",
                filename: "/images/project-management.avif",
                focus: "",
                id: 695963,
                is_external_url: false,
                is_private: false,
              },
            ],
          },
        ],
        _uid: "428a50cc-6a80-48c913b-308b5f69d1a9",
      },
    ],
  };
  const mediaBlock2 = {
    title: "Integrate with the software you already use    ",
    description:
      "Connect Autodesk Construction Cloud construction management software to your existing tech stack, with over 400 pre-built integrations for ERPs, CRMs, document management, analytics tools, and more.",
    sectionPaddingBottom: "Standard",
    sectionPaddingTop: "Standard",
    size: "Large",
    media: [
      {
        image: {
          filename:
            "https://a-us.storyblok.com/f/1018383/908x478/2f05de21b1/autodesk-construction-cloud-integrations-908x477.svg",
          altText: "Media block",
        },
      },
    ],
    cta: [
      {
        _uid: "24f412dc-2d63-4934-9c31-40e4b900dc8f",
        text: "SEE ALL INTEGRATIONS",
        style: "Button Primary",
        icon: "Arrow",
        linkUrl: {
          linktype: "story",
          fieldtype: "multilink",
          cached_url: "us/_design-system/connected-two-col-highlights",
        },
        component: "CTA",
      },
    ],
  };
  const quoteData = {
    backgroundColor: "White",
    component: "QuoteModule",
    quotes: [
      {
        companyName: "MultiGreen",
        component: "Quote",
        jobTitle: "Director of Development",
        logoImage: {
          alt: "MultiGreen logo",
          copyright: "",
          fieldtype: "asset",
          filename:
            "https://a-us.storyblok.com/f/1018383/340x124/501d0ace54/testimonials-multigreen-logo-170x61-2x.png",
        },
        name: "Levi Naas",
        portraitImage: {
          alt: "Levi Naas, MultiGreen",
          copyright: "",
          fieldtype: "asset",
          filename:
            "https://a-us.storyblok.com/f/1018383/666x666/2612102921/testimonial-levi-naas-photo-333x333-2x.png",
        },
        quote:
          "Autodesk Build is making the complex simple. With our teams connected and documents centralized, data is easily referenceable and allows teams to focus on higher-value areas.",
        _uid: "2e0ce8a7-8bac-4bc6-b87b-0ad69727b1e9",
      },
      {
        companyName: "MultiGreen",
        component: "Quote",
        jobTitle: "Virtual Construction Civil Lead",
        logoImage: {
          alt: "Miron logo",
          copyright: "",
          fieldtype: "asset",
          filename:
            "https://a-us.storyblok.com/f/1018383/106x50/f6d82a9b68/miron-logo.svg",
        },
        name: "Jay Mathesi",
        portraitImage: {
          alt: "Jay Mathes, Miron",
          copyright: "",
          fieldtype: "asset",
          filename:
            "https://a-us.storyblok.com/f/1018383/666x666/502d452fbb/testimonial-jay-mathes-photo-333x333-2x.png",
        },
        quote:
          "We can do the entire project in Autodesk Construction Cloud instead of doing BIM coordination in a separate piece of software first.",
        _uid: "a727fef5-99cc-424c-a1c7-7ad13f52ea01",
      },
    ],
  };
  const ctaBannerData = {
    backgroundColor: "White",
    backgroundMedia: [
      {
        altText: "",
        component: "Image",
        image: {
          alt: "",
          copyright: "",
          fieldtype: "asset",
          filename:
            "https://a-us.storyblok.com/f/1018383/2880x899/099798e469/homepage-cta-banner-offset-optimized.png",
        },
      },
    ],

    hasTopOffset: true,
    sectionPaddingBottom: "Standard",
    sectionPaddingTop: "Standard",
    size: "Large",
    subtitle: "",
    textAlignment: "Left Aligned",
    title: "Getting started is easy",
    cta: [
      {
        component: "CTA",
        dataAnalytics: "CTA Demo",
        forwardUTMParams: false,
        icon: "Arrow",
        linkUrl: {
          cached_url: "/contact",
          fieldtype: "multilink",
          id: "",
          linktype: "url",
          url: "/contact",
        },

        style: "Button Primary",
        text: "Get a demo",
        _uid: "499308cc-dd0f-45bb-b6d5-846e6740caf6",
      },
      {
        component: "CTA",
        dataAnalytics: "CTA Demo",
        forwardUTMParams: false,
        icon: "Arrow",
        linkUrl: {
          cached_url: "/products/",
          fieldtype: "multilink",
          id: "",
          linktype: "url",
          url: "/products/",
        },

        style: "Button Secondary",
        text: "Try it free",
        _uid: "2b6b3a49-2593-4914-bf80-53060038116f",
      },
    ],
  };
  return (
    <Layout>
      <HeroBannerModule blok={bannerData} />
      <CustomerLogosModule blok={logoModule} />
      <MediaModule blok={mediaBlock} />
      <TitleSubtitleDescriptionModule blok={IntroBlok} />
      <TwoColHighlightWithImg blok={TwoColData} />
      <TwoColHighlightWithImg blok={TwoColData2} />
      <TwoColHighlightWithImg blok={TwoColData3} />
      <TitleSubtitleDescriptionModule blok={IntroBlok2} />
      <TabsModule blok={tabContent} />
      <MediaModule blok={mediaBlock2} />
      <QuoteModule blok={quoteData} />
      <CtaBannerModule blok={ctaBannerData} />
    </Layout>
  );
}
