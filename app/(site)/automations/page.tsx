import ServicesHero from "@/components/Services/ServicesHero";
import GenAiPortfolio from "@/components/Portfolio/GenAiPortfolio";
import GenAiArtworks from "@/components/Portfolio/GenAiPortfolio/GenAiArtworks";
import GenAiAbout from "@/components/Portfolio/GenAiPortfolio/GenAiAbout";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import AiAboutOne from "@/components/Ai/AboutOne";
import AiAboutTwo from "@/components/Ai/AboutTwo";
import AboutWeb from "@/components/AboutWeb";
import AboutAi from "@/components/AboutAi";
import AboutMarketing from "@/components/AboutMarketing";
import FeaturesTab from "@/components/FeaturesTab";
import WebFeaturesTab from "@/components/FeaturesTabWeb";
import AiFeaturesTab from "@/components/FeaturesTabAi";
import MarketingFeaturesTab from "@/components/FeaturesTabMarketing";
import HeaderAi from "@/components/HeaderAi";
import HeaderWeb from "@/components/HeaderWeb";
import AutomationFeature from "@/components/Automation/AutomationFeature";
import AutomationFeaturesTab from "@/components/Automation/AutomationFeaturesTab";
import AutomationAbout from "@/components/About/AutomationAbout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aiware.me Portfolio",
  description: "With AI and Web Technology Projects",
  // other metadata
};

const ServicesPage = async () => {
  return (
    <>
    <ServicesHero />  
    <AutomationFeature/>
    <AutomationAbout/>    
    < FeaturesTab />


    <AiAboutTwo/> 
   
    <AiAboutOne/>  
{/* <AiFeaturesTab/>    */}
      <CTA/>
     <Brands/>
    <Contact/>

    </>
  );
};

export default ServicesPage;