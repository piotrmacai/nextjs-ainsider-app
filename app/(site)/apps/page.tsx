
import AppsPortfolio from "@/components/Portfolio/AppsPortfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Piotr Macai - AI | Web | Automation For Business",
  description: "Web & AI and Automation solutions Tailored To The Needs Of Your Company That Help Businesses To Grow. Discover my services tailored to the needs of your company.",
  openGraph: {
    title: "Piotr Macai - AI | Web | Automation For Business",
    description:"Web & AI and Automation solutions Tailored To The Needs Of Your Company That Help Businesses To Grow. Discover my services tailored to the needs of your company.",
    images: [
      {
        url: './images/about/logobig.jpg', // Updated path to your image
        alt: 'Potr Macai Business Development', // Optional: alt text for the image
      },
    ]
  }, 
  // inne metadane
};

const PortfolioPage = async () => {
  return (
    <>
    <AppsPortfolio />
    </>
  );
};

export default PortfolioPage;
