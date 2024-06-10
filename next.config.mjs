const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a-us.storyblok.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
