
import AutomationHero from "@/components/Automation/AutomationHero";
import AutomationFeature from "@/components/Automation/AutomationFeature";
import AutomationFeaturesTab from "@/components/Automation/AutomationFeaturesTab";
import AutomationFunFact from "@/components/Automation/AutomationFunFact";
import AutomationPricing from "@/components/Automation/AutomationPricing";
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
    <AutomationHero />
    <AutomationFeature/>
    <AutomationFeaturesTab/>
    <AiPortfolio/>
    <AutomationFunFact/>
    <AutomationPricing/>
    <Contact/>
    </>
  );
};

export default PortfolioPage;