"use client"
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import { useTranslation } from 'react-i18next';

const SingleBlogPage = async () => {
  const { t } = useTranslation();

  return (
    <>
      <title>{`Blog Details - Solid`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
            

              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                {t('mainPortfolio.details')}
                </h4>

                <ul>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Link:</p>
                    <a href="https://macai.studio" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 hover:text-primary">macai.tools</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>  {t('mainPortfolio.company')}</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Macai</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>{t('mainPortfolio.industry')}</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Design & Developer</p>
                  </li>

                  {/* <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Cel:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">https://link.com</p>
                  </li> */}
                </ul>
              </div>

            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                        
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                {t('mainPortfolio.voicebot2.header')}
                </h2>
                <div className="mb-10 w-full overflow-hidden ">
           
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src={"/images/portfolio/voicebot.jpg"}
                      alt="Ai Tools Bot"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>


                <div className="blog-details">
                  <p>
                  {t('mainPortfolio.voicebot2.desc1')}                  </p>
                  <p>
                  {t('mainPortfolio.voicebot2.desc2')}                  </p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;