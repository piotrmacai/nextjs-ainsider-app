"use client"


import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import { useTranslation } from 'react-i18next';


const SingleBlogPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <title>{"aiware.cloud - Project Details"}</title>
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
                    <a href="https://ainsider.pl" className="text-white transition-all duration-300 hover:text-primary">Ainsider.pl</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>{t('mainPortfolio.company')}</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Ainsider</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>{t('mainPortfolio.industry')}</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">{t('mainPortfolio.jazda.industry')}</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>{t('mainPortfolio.tech')}</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Tech / AI</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                Ainsider.store
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src="/images/portfolio/ainsiderplimg.png"
                      alt="aimsidertoolspl"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                  <p>{t('mainPortfolio.ainsidertoolspl.desc1')}</p>
                  {/* <p>{t('mainPortfolio.aiwarecloud.desc2')}</p> */}
                
                  {/* <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  {t('mainPortfolio.aiwarecloud.header1')}
                </h2> */}
                {/* <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src="/images/portfolio/aiwareSpeed.jpg"
                      alt="Szkoła Jazdy Machowski website"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                  <p>{t('mainPortfolio.aiwarecloud.desc3')}</p> */}

{/* 
                  <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  {t('mainPortfolio.jazda.header2')}
                </h2>
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src="/images/portfolio/szkolajazdy-fb.jpg"
                      alt="Szkoła Jazdy Machowski website"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                  <p>{t('mainPortfolio.jazda.desc4')}</p> */}

                
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
