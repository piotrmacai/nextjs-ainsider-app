import { Feature } from "@/types/feature";
import { useTranslation } from 'react-i18next';

const getTranslatedFeatures = () => {
  const { t } = useTranslation();

  const featuresData: Feature[] = [   
    {
      id: 1,
      icon: "/images/icon/undraw_innovative.svg",
      title: t('features.websitesTitle'),
      description: t('features.websitesDescription'),
    }, 
    {
      id: 2,
      icon: "/images/icon/undraw_active.svg",
      title: t('features.aiTitle'),
      description: t('features.aiDescription'),
     },   
     {
      id: 3,
      icon: "/images/icon/undraw_ecom.svg",
      title: t('features.ecommerceTitle'),
      description: t('features.ecommerceDescription'),
    }, 
    {
      id: 4,
      icon: "/images/icon/undraw_website_builder.svg",
      title: t('features.designTitle'),
      description: t('features.designDescription'),
     },     
    {
      id: 4,
      icon: "/images/icon/undraw_social.svg",
      title: t('features.marketingTitle'),
      description: t('features.marketingDescription'),
    },    
     {
      id: 6,
      icon: "/images/icon/undraw_product_iteration.svg",
      title: t('features.automationsTitle'),
      description: t('features.automationsDescription'),
    }, 
    {
      id: 7,
      icon: "/images/icon/undraw_chat-withai.svg",
      title: t('features.storeTitle'),
      description: t('features.storeDescription'),
    }, 
    {
      id: 8,
      icon: "/images/icon/undraw_online-community.svg",
      title: t('features.auditTitle'),
      description: t('features.auditDescription'),
     },   
     {
      id: 9,
      icon: "/images/icon/undraw_chat-bot.svg",
      title: t('features.trainingTitle'),
      description: t('features.trainingDescription'),
    }, 
   
 
   
  ];

  return featuresData;
};

export default getTranslatedFeatures;

// import { Feature } from "@/types/feature";
// import { t } from "i18next";
// import { useTranslation } from 'react-i18next';

// const featuresData: Feature[] = [
//   {
//     id: 1,
//     icon: "/images/icon/undraw_innovative.svg",
//     title: t('features.websitesTitle'),
//     description: t('features.websitesDescription'),
//     },
    //    {
    // id: 2,
    // icon: "/images/icon/undraw_social.svg",
    // title: "Marketing & Lead Generation",
    // description:
    // "I understand that reaching your target audience and turning new customers into loyal customers is definitely the main priorities for your business - that i will help You with it at all.",
    // },
    // {
    // id: 3,
    // icon: "/images/icon/undraw_active.svg",
    // title: "AI Assistant and Agents",
    // description:
    // "With the help of AI, I will create AI Assistants and Agents tailored to your needs, which will help you with the most important aspects of your business.",
    // },    
    // {
    // id: 4,
    // icon: "/images/icon/undraw_website_builder.svg",
    // title: "Design & Branding with AI",
    // description:
    // "Together we can create a complete branding for Your organization, including photos and videos, as product sessions and AI influencers. I also train generative AI models for individual needs.",
    // },
    // {
    // id: 5,
    // icon: "/images/icon/undraw_ecom.svg",
    // title: "Ecommerce and Internet Platforms",
    // description:
    // "Tailored to your e-commerce business and internet platforms that increase sales, improve user experiences, and grow your business.",
    // },  
    // {
    // id: 6,
    // icon: "/images/icon/undraw_product_iteration.svg",
    // title: "Automations and CRMs",
    // description:
    // "I will implement a Management Systems tailored to Your needs with automations of the most repetitive and time consuming tasks, which will give a lot of time in whatever You do.",
    // },

// ];

// export default featuresData;




// import { Feature } from "@/types/feature";
// import { t } from "i18next";
// import { useTranslation } from 'react-i18next';

// const featuresData: Feature[] = [
//   {
//     id: 1,
//     icon: "/images/icon/undraw_innovative.svg",
//     title: t('features.websitesTitle'),
//     description: t('features.websitesDescription'),
//     },
//        {
//     id: 2,
//     icon: "/images/icon/undraw_social.svg",
//     title: "Marketing & Lead Generation",
//     description:
//     "I understand that reaching your target audience and turning new customers into loyal customers is definitely the main priorities for your business - that i will help You with it at all.",
//     },
//     {
//     id: 3,
//     icon: "/images/icon/undraw_active.svg",
//     title: "AI Assistant and Agents",
//     description:
//     "With the help of AI, I will create AI Assistants and Agents tailored to your needs, which will help you with the most important aspects of your business.",
//     },    
//     {
//     id: 4,
//     icon: "/images/icon/undraw_website_builder.svg",
//     title: "Design & Branding with AI",
//     description:
//     "Together we can create a complete branding for Your organization, including photos and videos, as product sessions and AI influencers. I also train generative AI models for individual needs.",
//     },
//     {
//     id: 5,
//     icon: "/images/icon/undraw_ecom.svg",
//     title: "Ecommerce and Internet Platforms",
//     description:
//     "Tailored to your e-commerce business and internet platforms that increase sales, improve user experiences, and grow your business.",
//     },  
//     {
//     id: 6,
//     icon: "/images/icon/undraw_product_iteration.svg",
//     title: "Automations and CRMs",
//     description:
//     "I will implement a Management Systems tailored to Your needs with automations of the most repetitive and time consuming tasks, which will give a lot of time in whatever You do.",
//     },

// ];

// export default featuresData;
