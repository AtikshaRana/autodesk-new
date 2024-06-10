import React from "react";
import "@/components/buttons/buttons.css";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Header";
import legacyPageData from "@/public/data/legacy-page-data.json";
export default function layout({ children }) {
  const header = legacyPageData.result.data.topNav.content;
  const headAlternates = legacyPageData.result.pageContext.tagAlternates;
  const parsedHeader = JSON.parse(header);

  return (
    <main>
      <Navigation blok={parsedHeader} alternates={headAlternates} />
      {children}
      <Footer />
    </main>
  );
}
