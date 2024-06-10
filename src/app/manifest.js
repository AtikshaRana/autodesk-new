export default function manifest() {
  return {
    name: "Welcome to Autodesk Construction Cloud",
    manifest_version: "1.0",
    version: "1.0",
    short_name: "Autodesk Construction Cloud",
    start_url: "/",
    background_color: "#000000",
    theme_color: "#000000",
    display: "minimal-ui",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
