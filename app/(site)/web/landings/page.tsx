import ServicesHero from "@/components/Services/ServicesHero";
import GenAiPortfolio from "@/components/Portfolio/GenAiPortfolio";
import GenAiArtworks from "@/components/Portfolio/GenAiPortfolio/GenAiArtworks";
import GenAiAbout from "@/components/Portfolio/GenAiPortfolio/GenAiAbout";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Feature from "@/components/Features";
import AboutWeb from "@/components/About/AboutWeb";
import AboutCRM from "@/components/About/AboutCRM";
import AboutAi from "@/components/About/AboutAi";
import AboutMarketing from "@/components/About/AboutMarketing";
import FeaturesTab from "@/components/FeaturesTab";
import WebFeaturesTab from "@/components/FeaturesTabWeb";
import AiFeaturesTab from "@/components/FeaturesTabAi";
import MarketingFeaturesTab from "@/components/FeaturesTabMarketing";
import FeaturesTabCRM from "@/components/FeaturesTabCRM";
import HeaderAi from "@/components/HeaderAi";
import HeaderWeb from "@/components/HeaderWeb";
import { Metadata } from "next";
import WebHero from "@/components/Web/WebHero";
import LandingsWebHero from "@/components/Web/WebHero/LandingsWebHero";
import LandingsAbout from "@/components/About/LandingsAbout";
import Motion from "@/components/Motion/MotionWeb";

export const metadata: Metadata = {
  title: "Ainsider.co Portfolio",
  description: "With AI and Web Technology Projects",
  // other metadata
};

const ServicesPage = async () => {
  return (
    <>
      <LandingsWebHero />
      <Motion />
      <LandingsAbout />
      {/* < FeaturesTab /> */}

      {/* <HeaderWeb/> */}
      {/* <AboutWeb/> */}
      <WebFeaturesTab />


      {/* <AboutCRM/> */}
      {/* <FeaturesTabCRM/> */}

      <CTA />
      <Brands />
      <Contact />
    </>
  );
};

export default ServicesPage;