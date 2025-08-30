'use client'

import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import { useTranslation } from 'react-i18next';
import SupportBotFeaturesTab from "@/components/FeaturesTabAi/SupportBot";
import FeaturesTab from "@/components/FeaturesTab";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import MotionN8n from "@/components/Motion/MotionN8n";
import { motion } from "framer-motion";
import { Shield, Palette, Headphones, Layers, BarChart3, Rocket } from "lucide-react";

const PersonalAssistant = () => {
  const { t } = useTranslation();

  return (
    <>
      <title>{`Aiware - Support AI Assitant`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

{/* HERO ROW */}          
<section className="pt-12 md:pt-16 xl:pt-20 pb-4 xl:pb-6 mb-6 px-3 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex flex-col md:flex-row"> {/* Added flex and flex-col for mobile view */}
          <div className="md:w-1/2 sm:w-full md:block mb-8 md:mb-0 md:mt-12"> {/* Added mb-8 for mobile view */}
            <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
              Hello: {t('we')} Ainsider AI
            </h4>
            <h1 className="text-black dark:text-white text-2xl xl:text-hero font-bold mb-5 pr-16">
              {t('personalassistant.header')} 
              <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5">
              </span>
            </h1>
            <h4 className="text-black dark:text-white text-lg font-medium mt-4 mr-12 sm:mr-4 mb-5.5">
              {t('personalassistant.desc1')}
            </h4>

            <motion.div
              variants={{ hidden: {opacity: 0, y: -20, },
                visible: { opacity: 1,y: 0,},
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">

              <li>
              <a href="https://x.com/piotrmacai" target="_blank">
                  <svg
                    className="fill-[#7B7A84]  hover:fill-primary transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.643 4.93701C22.808 5.21401 21.911 5.40301 20.968 5.48601C21.93 4.89801 22.668 3.99301 23.016 2.91301C22.116 3.45901 21.119 3.86101 20.058 4.10001C19.208 3.20301 17.998 2.62501 16.658 2.62501C13.998 2.62501 11.793 4.83001 11.793 7.49001C11.793 7.76501 11.823 8.03001 11.875 8.28401C7.728 8.08601 4.1 6.12001 1.671 3.14001C1.37 3.71101 1.205 4.35001 1.205 5.03001C1.205 6.65001 2.021 8.08001 3.22 8.96001C2.435 8.93901 1.67 8.73101 1 8.36101C1 8.38001 1 8.39901 1 8.41901C1 10.761 2.711 12.669 4.9 13.004C4.6 13.089 4.295 13.132 3.98 13.132C3.751 13.132 3.525 13.107 3.303 13.063C3.768 14.941 5.636 16.274 7.836 16.312C6.107 17.504 3.991 18.215 1.725 18.215C1.435 18.215 1.148 18.195 0.867 18.16C2.016 19.472 4.413 20.255 7.022 20.255C16.647 20.255 21.568 13.179 21.568 7.89001C21.568 7.68001 21.561 7.47101 21.552 7.26301C22.461 6.62301 23.212 5.83501 23.643 4.93701Z"
                      fill=""
                    />
                  </svg>
                </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank">
                    <svg
                      className="fill-[#7B7A84] hover:fill-primary transition-all duration-300"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
    <li>
  <a href="https://github.com/yourusername" target="_blank">
    <svg
      className="fill-[#7B7A84] hover:fill-primary transition-all duration-300"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0.297C5.37 0.297 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.297 12 0.297Z"
      />
    </svg>
  </a>
</li>

                <li>
                  <a href="https://huggingface.co/Piotr-Macai" target="_blank">
                    
                  <Image src="/images/brand/hf-logo-pirate.svg" alt="git" width={24} height={24} className="fill-[#7B7A84] hover:fill-primary transition-all duration-300"/>
                  </a>
                </li>

              </ul>
            </motion.div>

          
          </div>

          <div className="md:w-1/2 sm:w-full md:block p-8 md:p-3"> {/* Removed the hidden class for mobile view */}
            <div className="relative 2xl:-mr-7.5">
              <Image
                src="/images/shape/shape-01.png"
                alt="shape"
                width={46}
                height={246}
                className="absolute -left-11.5 top-0"
              />
              <Image
                src="/images/shape/shape-02.svg"
                alt="shape"
                width={36.9}
                height={36.7}
                className="absolute right-0 bottom-0 z-10"
              />
              <Image
                src="/images/shape/shape-03.svg"
                alt="shape"
                width={21.64}
                height={21.66}
                className="absolute -right-6.5 bottom-0 z-1"
              />
              <div className="relative aspect-[700/444] w-full">
                <Image
                  className="dark:hidden shadow-solid-l"
                  src="/images/hero/hero-dark.svg"
                  alt="Hero"
                  fill
                />
                <Image
                  className="dark:block shadow-solid-l"
                  src="/images/hero/hero-dark.svg"
                  alt="Hero"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
   


            
{/* FIRST ROW */}       
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
              <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                        
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                 {t('personalassistant.header')}
                </h2>
                <div className="mb-10 w-full overflow-hidden ">
           
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Feature 1 */}
  <div className="flex flex-col items-start rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Shield className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
      {t('personalassistant.features.privacy.title')}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      {t('personalassistant.features.privacy.desc')}
    </p>
  </div>

  {/* Feature 2 */}
  <div className="flex flex-col items-start rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Palette className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
      {t('personalassistant.features.personalization.title')}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      {t('personalassistant.features.personalization.desc')}
    </p>
  </div>

  {/* Feature 3 */}
  <div className="flex flex-col items-start rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Headphones className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
      {t('personalassistant.features.support.title')}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      {t('personalassistant.features.support.desc')}
    </p>
  </div>

  {/* Feature 4 */}
  <div className="flex flex-col items-start rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Layers className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
      {t('personalassistant.features.integrations.title')}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      {t('personalassistant.features.integrations.desc')}
    </p>
  </div>

  {/* Feature 5 */}
  <div className="flex flex-col items-start rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <BarChart3 className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
      {t('personalassistant.features.analytics.title')}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      {t('personalassistant.features.analytics.desc')}
    </p>
  </div>

  {/* Feature 6 */}
  <div className="flex flex-col items-start rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
      <Rocket className="h-6 w-6" />
    </div>
    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
      {t('personalassistant.features.installation.title')}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      {t('personalassistant.features.installation.desc')}
    </p>
  </div>
</div>

                 
                </div>


                <div className="blog-details space-y-4">
                  <div className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <p className="text-black dark:text-white">
                      {t('personalassistant.desc1')}                  
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Headphones className="w-5 h-5 mt-1 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <p className="text-white dark:text-white">
                      {t('personalassistant.desc2')}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 mt-1 flex-shrink-0 text-purple-600 dark:text-purple-400" />
                    <p className="text-black dark:text-white">{t('personalassistant.forwho')}</p>
                  </div>
                  
                  <ul className="space-y-0.5 pl-8">
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm mr-2">
                        <BarChart3 className="w-3 h-3" />
                      </span>
                      <p className="text-black dark:text-white">{t('personalassistant.who1')}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm mr-2">
                        <Layers className="w-3 h-3" />
                      </span>
                      <p className="text-black dark:text-white">{t('personalassistant.who2')}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-sm mr-2">
                        <Palette className="w-3 h-3" />
                      </span>
                      <p className="text-black dark:text-white">{t('personalassistant.who3')}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-sm mr-2">
                        <Rocket className="w-3 h-3" />
                      </span>
                      <p className="text-black dark:text-white">{t('personalassistant.who4')}</p>
                    </li>
                  </ul>
                </div>

      
              </div>
            </div>
        
            
            <div className="md:w-1/2 lg:w-[32%]">
            

              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-4">
                {t('personalassistant.details')}
                LLM Apps
                </h4>
                {/* <p className="text-dark dark:text-white mb-6">
                    {t('bot.appengine')}
                  </p> */}
                <ul>      

                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="Wtransition-all duration-300 hover:text-primary">OpenWebUI</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="Wtransition-all duration-300 hover:text-primary">LMStudio</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="transition-all duration-300 hover:text-primary">Telegram</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="transition-all duration-300 hover:text-primary">Slack</p>
                    </li>  
                      <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className=" transition-all duration-300 hover:text-primary">Custom chatbot apps</p>
                    </li>
                </ul>
              </div>

              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-4">
                {/* {t('personalassistant.details')} */}
                LLM Engine
                </h4>
                <p className="text-dark dark:text-white mb-6">
                  {t('bot.llmengine')}
                </p>
                <ul>      
                <li className="last:mb-0 mb-2 transition-all duration-300">                    
                  <p className="transition-all duration-300 hover:text-primary">ChatGPT OSS</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">                    
                  <p className="transition-all duration-300 hover:text-primary">Deepseek</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">                    
                  <p className="transition-all duration-300 hover:text-primary">Qwen</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="transition-all duration-300 hover:text-primary">Mistral AI</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                    <p className="transition-all duration-300 hover:text-primary">Meta Gemma</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="transition-all duration-300 hover:text-primary">Meta LLama</p>
                    </li>
                </ul>
              </div>

              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-4">
                  {t('personalassistant.integrationsText')}
                </h4>
                <p className="text-dark dark:text-white mb-8">
                {t('bot.integrations')}
                </p>
                <ul>
                  <li className="last:mb-0 mb-2 transition-all duration-300">
                    <p>Google Workspace</p></li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                    <p>Google Drive</p>
                  </li>
                  <li className="last:mb-0 mb-2 transition-all duration-300">
                    <p>Gmail</p>
                  </li>
                  <li className="last:mb-0 mb-2 transition-all duration-300">
                    <p>Hubspot</p>
                  </li>
                  <li className="last:mb-0 mb-2 transition-all duration-300">
                    <p>Airtable</p>
                  </li>
                  <li className="last:mb-0 mb-2 transition-all duration-300">
                    <p>Notion</p>
                  </li>
                  <li className="last:mb-0 mb-2 transition-all duration-300">
                    <p>Any type of documents</p>
                  </li>
                </ul>
              </div>

              
              {/* <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-4">
                  {t('personalassistant.channels')}
                </h4>
                <p className="text-dark dark:text-white mb-8">
                {t('bot.channels')}
                </p>
                <ul>
                <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>{t('personalassistant.web')}</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>OpenWebUI - custom ChatGPT</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Local Chat</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Telegram</p></li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Slack</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Gmail</p>
                  </li>
                </ul>
              </div> */}

            </div>

        </div>


        <MotionN8n />
        

{/* SECOND ROW */}          
        <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5 mt-8">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">       
                <div className="mb-10 w-full overflow-hidden ">
                </div>
  
                <div className="blog-details">
                    < FeaturesTab />
                </div>

                <div className="blog-details">
                    < Contact />
                </div>

                 </div>
            </div>

        </div>
      </section>
    </>
  );
};

export default PersonalAssistant;
