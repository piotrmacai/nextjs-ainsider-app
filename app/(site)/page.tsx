import { Metadata } from "next";
import Hero from "@/components/Hero";
import AiwareHero from "@/components/AiwareHero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";

import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
// import Voiceflow from "@/components/Voiceflow";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import PortfolioCta from "@/components/PortfolioCta";
import Slider from "@/components/Slider"
import HomePortfolio from "@/components/Portfolio/HomePortfolio";
import Socials from "@/components/Socials";
import SenjaWidget from "@/components/SenjaWidget";
import CTAToNewsletter from "@/components/CTAToNewsletter";
import CTAToAinsider from "@/components/CTAToAinsider";
import About from "@/components/About";
import MainAbout from "@/components/About/MainAbout";
import Voiceflow from "@/components/Voiceflow";




export const metadata: Metadata = {
  title: "Ainsider AI Company - AI | Web | Resources | Automations For Business",
  description: "Tailored To The Needs Of Your Company Web & AI and Automation solutions that help businesses to grow. Discover our services tailored to the needs of your company.",
  openGraph: {
    title: "Ainsider AI Company - AI | Web | Resources | Automations For Business",
    description:"Tailored To The Needs Of Your Company Web & AI and Automation solutions that help businesses to grow. Discover our services tailored to the needs of your company.",
    images: [
      {
        url: '/images/logo/logo-white.png', // Updated path to your image
        alt: 'Ainsider AI Company', // Optional: alt text for the image
      },
    ]
  }, 
  // inne metadane
};

export default function Home() {
  return (
    <main>
      <AiwareHero/>
      < Socials />
      <Feature /> 
      <MainAbout/>
      {/* <About />    */}
      <FeaturesTab />      
       <HomePortfolio/>
       {/* <CTAToAinsider/> */}
     
      <CTA />       
      <SenjaWidget/>  
      <Brands />
      <Contact />     
      <Voiceflow/>
      {/* <PortfolioCta/> */}
  
      {/* <Integration /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <div id="headerWeb"> */}
      {/* <HeaderWeb/> */}
      {/* <AboutWeb/>
      <WebFeaturesTab/> */}
      {/* </div> */}
      {/* <div id="headerAi"> */}
      {/* <HeaderAi/>     
      <AboutAi/>
      <AiFeaturesTab/> */}
      {/* </div>  */}
      {/* <div id="headerMarketing"> */}
      {/* <AboutMarketing/> */}
      {/* <MarketingFeaturesTab/> */}
      {/* </div>  */}
      {/* <div id="headerGenAi">
      <GenAiHome/> 
      </div>   */} 
      
       {/* <Pricing />    */}
       {/* <FunFact />  */}
     
  
      {/* <Voiceflow/> */}
      {/* <Blog /> */}
    </main>
  );
}
