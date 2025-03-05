'use client'

import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import { useTranslation } from 'react-i18next';
import SupportBotFeaturesTab from "@/components/FeaturesTabAi/SupportBot";
import FeaturesTab from "@/components/FeaturesTab";
import Contact from "@/components/Contact";
import Voiceflow from "@/components/Voiceflow";

const EcomBot = async () => {
  const { t } = useTranslation();

  return (
    <>
      <title>{`Aiware - Support AI Assitant`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">



            
{/* FIRST ROW */}       
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
              <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                        
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                {t('ecombot.header')}
                </h2>
                <div className="mb-10 w-full overflow-hidden ">
           
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src={"/images/portfolio/ecombot.png"}
                      alt="Ai Tools Bot"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>


                <div className="blog-details">
                  <p className="text-black dark:text-white">
                  {t('ecombot.desc1')}                  
                   </p>
                  {/* <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src={"/images/portfolio/ainsidertoolsbot.jpg"}
                      alt="Ai Tools Bot"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div> */}
                  <p className="text-white dark:text-white">
                    {t('ecombot.desc2')}
                  </p>


                  <p className="text-black dark:text-white">{t('ecombot.forwho')}</p> 
                   <p className="text-black dark:text-white">{t('ecombot.who1')} </p>
                   <p className="text-black dark:text-white"> {t('ecombot.who2')}</p>
                   <p className="text-black dark:text-white"> {t('ecombot.who3')}</p>
                   <p className="text-black dark:text-white"> {t('ecombot.who4')}</p>
  
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2.5 font-medium text-white dark:text-black bg-black dark:bg-white rounded-full py-3 px-6 hover:opacity-90"
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
                {/* {t('ecombot.details')} */}
                Chat Engine
                </h4>
                <ul>      

                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="Wtransition-all duration-300 hover:text-primary">Langchain</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="transition-all duration-300 hover:text-primary">Flowise</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className=" transition-all duration-300 hover:text-primary">Voiceflow</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="transition-all duration-300 hover:text-primary">Botpress</p>
                    </li>
                </ul>
              </div>

              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                {/* {t('ecombot.details')} */}
                AI Engine
                </h4>
                <ul>      
                <li className="last:mb-0 mb-2 transition-all duration-300">                    
                  <p className="transition-all duration-300 hover:text-primary">OpenAI</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                    <p className="transition-all duration-300 hover:text-primary">Claude Anthropic</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="transition-all duration-300 hover:text-primary">Meta LLama</p>
                    </li>
                    <li className="last:mb-0 mb-2 transition-all duration-300">
                        <p className="transition-all duration-300 hover:text-primary">Mistral AI</p>
                    </li>
                </ul>
              </div>

              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                  {t('ecombot.integrationsText')}
                </h4>
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
                </ul>
              </div>

              
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                  {t('ecombot.channels')}
                </h4>
                <ul>
                <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>{t('ecombot.web')}</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Telegram</p></li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Whatsapp</p>
                  </li>
                </ul>
              </div>

            </div>

        </div>



{/* SECOND ROW */}          
<div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5 mt-8">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                        
                <div className="mb-10 w-full overflow-hidden ">
   
                </div>


                {/* <div className="blog-details">
                   <p className="text-white transition-all duration-300 hover:text-primary"
                  >{t('ecombot.desc2')}
                  </p>
                </div> */}

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
      <Voiceflow/>
    </>
  );
};

export default EcomBot;
 