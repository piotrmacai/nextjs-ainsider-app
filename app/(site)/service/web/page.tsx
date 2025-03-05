
import WebHero from "@/components/Web/WebHero";
import WebFeature from "@/components/Web/WebFeature";
import WebFeaturesTab from "@/components/Web/WebFeaturesTab";
import WebFunFact from "@/components/Web/WebFunFact";
import WebPricing from "@/components/Web/WebPricing";
import WebPortfolio from "@/components/Portfolio/WebPortfolio";
import Contact from "@/components/Contact";
import WebAbout from "@/components/About/WebAbout";
import FeaturesTab from "@/components/FeaturesTab";
import Voiceflow from "@/components/Voiceflow";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aiware.me Portfolio",
  description: "With AI and Web Technology Projects",
  // other metadata
};

const PortfolioPage = async () => {
  return (
    <>
    <WebHero />
    <WebFeature/>
    <WebAbout/>
    <WebFeaturesTab/>
    <WebPortfolio/>
    {/* <WebFunFact/> */}
    <FeaturesTab/>
    <WebPricing/>
    <Contact/>
    <Voiceflow/>
    </>
  );
};

export default PortfolioPage;