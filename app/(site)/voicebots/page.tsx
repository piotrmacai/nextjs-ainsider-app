import ServicesHero from "@/components/Services/ServicesHero";
import GenAiPortfolio from "@/components/Portfolio/GenAiPortfolio";
import GenAiArtworks from "@/components/Portfolio/GenAiPortfolio/GenAiArtworks";
import GenAiAbout from "@/components/Portfolio/GenAiPortfolio/GenAiAbout";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";

import AiVoiceHero from "@/components/AiVoice/AiVoiceHero";
import AiAboutOne from "@/components/Ai/AboutOne";
import AiAboutTwo from "@/components/Ai/AboutTwo";
import CTAToPortfolio from "@/components/CTAToPortfolio";
import CTA from "@/components/CTA";
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
import Feature from "@/components/Features";
import AiVoiceFeature from "@/components/AiVoice/AiVoiceFeature";
import AiVoiceAbout from "@/components/About/AiVoiceAbout";
// import ElevenLabsWidget from "@/components/Elevenlabs"; 

export const metadata: Metadata = {
  title: "Aiware.me Portfolio",
  description: "With AI and Web Technology Projects",
  // other metadata
};

const ServicesPage = async () => {
  return (
    <>
    <AiVoiceHero />   
    <AiVoiceFeature/>  
    <AiVoiceAbout/>
     <AiAboutOne/>        
    <AiAboutTwo/>      
    <CTAToPortfolio/> 
    <FeaturesTab />    
    <CTA/>   
    {/* <AiFeaturesTab/>    */}
    <Brands/>   
    <Contact/>
    {/* <ElevenLabsWidget /> */}
    </>
  );
};

export default ServicesPage;