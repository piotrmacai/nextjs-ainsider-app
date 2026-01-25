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
import VibeCodingFeaturesTab from "@/components/FeaturesTabVibeCoding";
import HeaderAi from "@/components/HeaderAi";
import HeaderWeb from "@/components/HeaderWeb";
import { Metadata } from "next";
import VibeCodingHero from "@/components/Web/VibeCodingHero";
import WebFeature from "@/components/Web/WebFeature";
import VibeCodingAbout from "@/components/About/VibeCodingAbout";
import SenjaWidget from "@/components/SenjaWidget";
import Motion from "@/components/Motion/MotionWeb";
import VibeCodingPricing from "@/components/Vibe-Coding/Pricing";

export const metadata: Metadata = {
  title: "Ainsider.co Portfolio",
  description: "With AI and Web Technology Projects",
  // other metadata
};

const ServicesPage = async () => {
  return (
    <>
      <VibeCodingHero />
      <WebFeature />
      <Motion />
      <VibeCodingAbout />
      <VibeCodingFeaturesTab />
      <VibeCodingPricing />
      <SenjaWidget />
      <Contact />
      <Brands />
    </>
  );
};

export default ServicesPage;