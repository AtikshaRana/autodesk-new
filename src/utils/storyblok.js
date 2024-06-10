import components from "@/components";
import FallbackComponent from "@/components/FallbackComponent";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

function initStoryblokComponents() {
  storyblokInit({
    components: components,
    customFallbackComponent: FallbackComponent,
    enableFallbackComponent: true,
  });
}

function initStoryblokApi() {
  storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      region: "us",
    },
  });
}

export { initStoryblokApi, initStoryblokComponents };
