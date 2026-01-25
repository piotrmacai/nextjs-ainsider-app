import { Metadata } from "next";
import Hero from "@/components/Hero";
import AiwareHero from "@/components/AiwareHero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";

import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";

import Motion from "@/components/Motion/MotionOrbit";
import ServiceTimeline from "@/components/ServiceTimeline";
import AinsiderStore from "@/components/AinsiderStore";
import VibeCodingSection from "@/components/VibeCodingSection";
import AiwareHeroTwo from "@/components/AiwareHeroTwo";

export const metadata: Metadata = {
  title: "Ainsider AI Company - AI | Web | Resources | Automations For Business",
  description: "Tailored To The Needs Of Your Company Web & AI and Automation solutions that help businesses to grow. Discover our services tailored to the needs of your company.",
  openGraph: {
    title: "Ainsider AI Company - AI | Web | Resources | Automations For Business",
    description: "Tailored To The Needs Of Your Company Web & AI and Automation solutions that help businesses to grow. Discover our services tailored to the needs of your company.",
    images: [
      {
        url: '/images/logo/webLogo.png', // Updated path to your image
        alt: 'Ainsider AI Company', // Optional: alt text for the image
      },
    ]
  },
  // inne metadane
};

export default function Home() {
  return (
    <main>
      <AiwareHeroTwo />
      <div id="services">
        <Feature />
      </div>
      <AinsiderStore />
      <Motion />
      {/* <FeaturesTabMarketing /> */}
      {/* <MainAbout/> */}
      <ServiceTimeline />
      {/* <WooProductGrid/> */}
      <VibeCodingSection />
      <CTA />
      {/* <SenjaWidget/>   */}
      {/* <Brands /> */}
      <Contact />
      < Socials />
    </main>
  );
}
