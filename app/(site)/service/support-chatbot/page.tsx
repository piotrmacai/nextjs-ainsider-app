
import SupportBotHero from "@/components/SupportChatbot/SupportBotHero";
import SupportBotFeature from "@/components/SupportChatbot/SupportBotFeature";
import SupportBotFeaturesTab from "@/components/SupportChatbot/SupportBotFeaturesTab";
import SupportBotFunFact from "@/components/SupportChatbot/SupportBotFunFact";
import SupportBotAbout from "@/components/SupportChatbot/SupportBotAbout";
import SupportBotPricing from "@/components/SupportChatbot/SupportBotPricing";
import AiPortfolio from "@/components/Portfolio/AiPortfolio";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aiware.me Portfolio",
  description: "With AI and Web Technology Projects",
  // other metadata
};

const PortfolioPage = async () => {
  return (
    <>
    <SupportBotHero />
    <SupportBotFeature/>
    <SupportBotAbout/>
    <SupportBotFeaturesTab/>
    <AiPortfolio/>
    <SupportBotFunFact/>
    <SupportBotPricing/>
    <Contact/>
    </>
  );
};

export default PortfolioPage;