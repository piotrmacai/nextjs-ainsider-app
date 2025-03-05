import ServicesHero from "@/components/Services/ServicesHero";
import GenAiPortfolio from "@/components/Portfolio/GenAiPortfolio";
import GenAiArtworks from "@/components/Portfolio/GenAiPortfolio/GenAiArtworks";
import GenAiAbout from "@/components/Portfolio/GenAiPortfolio/GenAiAbout";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Feature from "@/components/Features";
import AboutWeb from "@/components/AboutWeb";
import AboutAi from "@/components/AboutAi";
import AboutMarketing from "@/components/AboutMarketing";
import FeaturesTab from "@/components/FeaturesTab";
import WebFeaturesTab from "@/components/FeaturesTabWeb";
import AiFeaturesTab from "@/components/FeaturesTabAi";
import MarketingFeaturesTab from "@/components/FeaturesTabMarketing";
import HeaderAi from "@/components/HeaderAi";
import HeaderWeb from "@/components/HeaderWeb";
import { Metadata } from "next";
import WebHero from "@/components/Web/WebHero";
import Voiceflow from "@/components/Voiceflow";

export const metadata: Metadata = {
  title: "Aiware.me Portfolio",
  description: "With AI and Web Technology Projects",
  // other metadata
};

const ServicesPage = async () => {
  return (
    <>
    <WebHero/>
    <Feature/>
    < FeaturesTab />
    <div id="headerWeb">
      {/* <HeaderWeb/> */}
      <AboutWeb/>
      <WebFeaturesTab/>
      </div>
      <div id="headerMarketing">
      <AboutMarketing/>
      <MarketingFeaturesTab/>
      </div> 
      <CTA/> 
     <Brands/>
    <Contact/>
    <Voiceflow/>
    </>
  );
};

export default ServicesPage;