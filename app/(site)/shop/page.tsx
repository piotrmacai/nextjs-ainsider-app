import ServicesHero from "@/components/Services/ServicesHero";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import StoreHero from "@/components/Store/StoreHero";
import SenjaWidget from "@/components/SenjaWidget";
import WooProductGrid from "@/components/WooProductGrid";
import Products from "@/components/Store/Products";

export const metadata: Metadata = {
  title: "Ainsider.co Portfolio",
  description: "With AI and Web Technology Projects",
  // other metadata
};

const ServicesPage = async () => {
  return (
    <>
      <StoreHero />
      <Products />
      {/* <WooProductGrid/> */}
      {/* <SenjaWidget/>   */}
      <Contact />
      <Brands />
    </>
  );
};

export default ServicesPage;