"use client"
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import { useTranslation } from 'react-i18next';
import Voiceflow from "@/components/Voiceflow";

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
                    <a href="https://ainsider.tools" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 hover:text-primary">https://ainsider.tools</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>{t('mainPortfolio.company')}:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Ainsider</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>{t('mainPortfolio.industry')}</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">AI & Technology</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>{t('mainPortfolio.tech')}</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Wordpress</p>
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
                {t('mainPortfolio.ainsidertools.header')}
                </h2>
                <div className="mb-10 w-full overflow-hidden ">
           
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src={"/images/portfolio/ainsider_tools.jpg"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>


                <div className="blog-details">
                  <p>
                  {t('mainPortfolio.ainsidertools.desc1')}
                  </p>
                  <p>
                  {t('mainPortfolio.ainsidertools.desc2')}              </p>
                <p>
                {t('mainPortfolio.ainsidertools.desc3')}                </p>
                <p>
                {t('mainPortfolio.ainsidertools.desc4')}                </p>
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                {t('mainPortfolio.ainsidertools.header2')}
                </h2>
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src="/images/portfolio/ainsidertools-google.jpg"
                      alt="Website of Machowski Driving School"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                  <p>{t('mainPortfolio.ainsidertools.desc5')}</p>
                  {/* <p>
                    Aenean augue ex, condimentum vel metus vitae, aliquam porta
                    elit. Quisque non metus ac orci mollis posuere. Mauris vel
                    ipsum a diam interdum ultricies sed vitae neque. Nulla
                    porttitor quam vitae pulvinar placerat. Nulla fringilla elit
                    sit amet justo feugiat sodales. Morbi eleifend, enim non
                    eleifend laoreet, odio libero lobortis lectus, non porttitor
                    sem urna sit amet metus. In sollicitudin quam est,
                    pellentesque consectetur felis fermentum vitae.
                  </p> */}

                  {/* <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div> */}

                  {/* <h3 className="pt-8">Nunc elementum elit viverra, tempus quam non</h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                    leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                    vel turpis in dolor volutpat imperdiet in ut mi. Integer non
                    volutpat nulla. Nunc elementum elit viverra, tempus quam
                    non, interdum ipsum.
                  </p> */}
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Voiceflow/>
    </>
  );
};

export default SingleBlogPage;
