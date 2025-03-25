'use client'

import Image from "next/image";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, 
  Rocket, 
  Zap, 
  LayoutGrid, 
  Link2, 
  Database 
} from 'lucide-react';
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";


const NotionCRM = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('features');

  const featureSections = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: 'Custom Database Design',
      description: 'Tailored database structures that match your unique business workflows.'
    },
    {
      icon: <Link2 className="w-8 h-8 text-green-600" />,
      title: 'API Integration',
      description: 'Seamless connections with your existing tools and platforms.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline your business processes.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Setup',
      price: 499,
      features: [
        'Basic CRM Configuration',
        'Standard Database Design',
        'Email Support'
      ]
    },
    {
      name: 'Pro Implementation',
      price: 999,
      featured: true,
      features: [
        'Advanced CRM Configuration',
        'Custom Database Design',
        'API Integration',
        'Priority Support',
        'Workflow Automation'
      ]
    },
    {
      name: 'Enterprise Solution',
      price: 1999,
      features: [
        'Full Custom CRM',
        'Advanced Integrations',
        'Dedicated Support',
        'Ongoing Optimization',
        'Custom Dashboards'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
      <title>{`Aiware - Notion CRM Implementation`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
           {/* FIRST ROW */}       
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
             <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                 <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                   {t('notioncrm.header')}
                 </h2>
                 <div className="mb-10 w-full overflow-hidden">
                   <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                     <Image
                      src={"/images/portfolio/notion-crm.png"}
                      alt="Notion CRM Implementation"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>

                <div className="blog-details">
                  <p className="text-black dark:text-white mb-4">
                    {t('notioncrm.desc1')}
                  </p>
                  <p className="text-black dark:text-white mb-4">
                    {t('notioncrm.desc2')}
                  </p>

                  <h3 className="text-2xl font-semibold text-black dark:text-white mt-6 mb-4">
                    {t('notioncrm.forwho')}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{t('notioncrm.who1')}</li>
                    <li>{t('notioncrm.who2')}</li>
                    <li>{t('notioncrm.who3')}</li>
                    <li>{t('notioncrm.who4')}</li>
                  </ul>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2.5 font-medium text-white dark:text-black bg-black dark:bg-white rounded-full py-3 px-6 hover:opacity-90 mt-6"
                >
                  {t('cta.contact')}
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </div>
        
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                  Notion CRM Architecture
                </h4>
                <p className="text-dark dark:text-white mb-6">
                  {t('notioncrm.architecture')}
                </p>
                <ul>
                  <li className="mb-2 transition-all duration-300">
                    <p className="transition-all duration-300 hover:text-primary">Custom Database Design</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p className="transition-all duration-300 hover:text-primary">API Integration</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p className="transition-all duration-300 hover:text-primary">Workflow Automation</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p className="transition-all duration-300 hover:text-primary">Custom Views & Dashboards</p>
                  </li>
                </ul>
              </div>

              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-4">
                  Key CRM Features
                </h4>
                <p className="text-dark dark:text-white mb-6">
                  {t('notioncrm.features')}
                </p>
                <ul>
                  <li className="mb-2 transition-all duration-300">
                    <p>Contact Management</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p>Sales Pipeline Tracking</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p>Lead Scoring</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p>Task & Follow-up Automation</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p>Performance Analytics</p>
                  </li>
                </ul>
              </div>

              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-4">
                  Integrations
                </h4>
                <p className="text-dark dark:text-white mb-8">
                  {t('notioncrm.integrations')}
                </p>
                <ul>
                  <li className="mb-2 transition-all duration-300">
                    <p>Google Workspace</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p>Slack</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p>Zapier</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p>Google Drive</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p>Airtable</p>
                  </li>
                  <li className="mb-2 transition-all duration-300">
                    <p>Custom API Connections</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

                  {/* Features Section */}
        {/* <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful CRM Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transform your business with our comprehensive Notion CRM solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featureSections.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Pricing Section */}
        {/* <div id="pricing" className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Wybierz optymalny pakiet dla Twojego biznesu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`
                  bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg 
                  ${plan.featured ? 'border-2 border-blue-600 scale-105' : ''}
                `}
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold text-blue-600 mb-6">
                  ${plan.price}
                  <span className="text-base text-gray-500 ml-2">/ setup</span>
                </p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact" 
                  className={`
                    w-full text-center block py-3 rounded-lg transition
                    ${plan.featured 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  Wybierz plan
                </a>
              </div>
            ))}
          </div>
        </div> */}


          {/* <CTA/> */}

          {/* SECOND ROW */}          
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5 mt-8"> 
            <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
              <div className="blog-details">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </div>
  );
};

export default NotionCRM;

// 'use client'

// import Image from "next/image";
// import { useTranslation } from 'react-i18next';
// import Contact from "@/components/Contact";
// import CTA from "@/components/CTA";

// const NotionCRM = () => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <title>{`Aiware - Notion CRM Implementation`}</title>
//       <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//           {/* FIRST ROW */}       
//           <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
//             <div className="lg:w-2/3">
//               <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
//                 <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
//                   {t('notioncrm.header')}
//                 </h2>
//                 <div className="mb-10 w-full overflow-hidden">
//                   <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
//                     <Image
//                       src={"/images/portfolio/notion-crm.png"}
//                       alt="Notion CRM Implementation"
//                       fill
//                       className="object-contain object-center rounded-md"
//                     />
//                   </div>
//                 </div>

//                 <div className="blog-details">
//                   <p className="text-black dark:text-white mb-4">
//                     {t('notioncrm.desc1')}
//                   </p>
//                   <p className="text-black dark:text-white mb-4">
//                     {t('notioncrm.desc2')}
//                   </p>

//                   <h3 className="text-2xl font-semibold text-black dark:text-white mt-6 mb-4">
//                     {t('notioncrm.forwho')}
//                   </h3>
//                   <ul className="list-disc pl-5 space-y-2">
//                     <li>{t('notioncrm.who1')}</li>
//                     <li>{t('notioncrm.who2')}</li>
//                     <li>{t('notioncrm.who3')}</li>
//                     <li>{t('notioncrm.who4')}</li>
//                   </ul>
//                 </div>

//                 <a
//                   href="/contact"
//                   className="inline-flex items-center gap-2.5 font-medium text-white dark:text-black bg-black dark:bg-white rounded-full py-3 px-6 hover:opacity-90 mt-6"
//                 >
//                   {t('cta.contact')}
//                   <Image
//                     width={20}
//                     height={20}
//                     src="/images/icon/icon-arrow-dark.svg"
//                     alt="Arrow"
//                     className="dark:hidden"
//                   />
//                   <Image
//                     width={20}
//                     height={20}
//                     src="/images/icon/icon-arrow-light.svg"
//                     alt="Arrow"
//                     className="hidden dark:block"
//                   />
//                 </a>
//               </div>
//             </div>
        
//             <div className="md:w-1/2 lg:w-[32%]">
//               <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
//                 <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
//                   Notion CRM Architecture
//                 </h4>
//                 <p className="text-dark dark:text-white mb-6">
//                   {t('notioncrm.architecture')}
//                 </p>
//                 <ul>
//                   <li className="mb-2 transition-all duration-300">
//                     <p className="transition-all duration-300 hover:text-primary">Custom Database Design</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p className="transition-all duration-300 hover:text-primary">API Integration</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p className="transition-all duration-300 hover:text-primary">Workflow Automation</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p className="transition-all duration-300 hover:text-primary">Custom Views & Dashboards</p>
//                   </li>
//                 </ul>
//               </div>

//               <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
//                 <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-4">
//                   Key CRM Features
//                 </h4>
//                 <p className="text-dark dark:text-white mb-6">
//                   {t('notioncrm.features')}
//                 </p>
//                 <ul>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Contact Management</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Sales Pipeline Tracking</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Lead Scoring</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Task & Follow-up Automation</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Performance Analytics</p>
//                   </li>
//                 </ul>
//               </div>

//               <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
//                 <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-4">
//                   Integrations
//                 </h4>
//                 <p className="text-dark dark:text-white mb-8">
//                   {t('notioncrm.integrations')}
//                 </p>
//                 <ul>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Google Workspace</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Slack</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Zapier</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Google Drive</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Airtable</p>
//                   </li>
//                   <li className="mb-2 transition-all duration-300">
//                     <p>Custom API Connections</p>
//                   </li>
//                 </ul>
//               </div>

//               <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
//                 <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-4">
//                   Customization Levels
//                 </h4>
//                 <p className="text-dark dark:text-white mb-8">
//                   {t('notioncrm.customization')}
//                 </p>
//                 <ul>
//                   <li className="mb-3 transition-all duration-300">
//                     <p>Basic Setup</p>
//                   </li>
//                   <li className="mb-3 transition-all duration-300">
//                     <p>Advanced Configuration</p>
//                   </li>
//                   <li className="mb-3 transition-all duration-300">
//                     <p>Full Custom Solution</p>
//                   </li>
//                   <li className="mb-3 transition-all duration-300">
//                     <p>Ongoing Support & Optimization</p>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <CTA/>

//           {/* SECOND ROW */}          
//           <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5 mt-8"> 
//             <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
//               <div className="blog-details">
//                 <Contact />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default NotionCRM;