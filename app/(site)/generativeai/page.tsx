
import GenAiPortfolio from "@/components/Portfolio/GenAiPortfolio";
import GenAiArtworks from "@/components/Portfolio/GenAiPortfolio/GenAiArtworks";
import GenAiAbout from "@/components/Portfolio/GenAiPortfolio/GenAiAbout";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
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
    <GenAiPortfolio />
  
    <GenAiArtworks/>
    <GenAiAbout/> 
     <Brands/>
    <CTA/>
    <Contact/>
    <Voiceflow/>
    </>
  );
};

export default PortfolioPage;