import ServicesHero from "@/components/Services/ServicesHero";
import GenAiPortfolio from "@/components/Portfolio/GenAiPortfolio";
import GenAiArtworks from "@/components/Portfolio/GenAiPortfolio/GenAiArtworks";
import GenAiAbout from "@/components/Portfolio/GenAiPortfolio/GenAiAbout";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import AinsiderStore from "@/components/AinsiderStore";
import AiHero from "@/components/Ai/AiHero";
import CTA from "@/components/CTA";
import FeaturesTab from "@/components/FeaturesTab";
import AiFeaturesTab from "@/components/FeaturesTabAi";
import HeaderWeb from "@/components/HeaderWeb";
import { Metadata } from "next";
import Feature from "@/components/Features";
import AiFeature from "@/components/Ai/AiFeature";
import AiAbout from "@/components/About/AiAbout";
import Motion from "@/components/Motion/MotionAgents";

export const metadata: Metadata = {
  title: "Aiware.me Portfolio",
  description: "With AI and Web Technology Projects",
  // other metadata
};

const ServicesPage = async () => {
  return (
    <>
      <AiHero />
      <AiFeature />
      <AiAbout />
      <AinsiderStore />
      <Motion />
      <FeaturesTab />
      <CTA />
      {/* <AiFeaturesTab/>    */}
      <Contact />
      <Brands />
    </>
  );
};

export default ServicesPage;