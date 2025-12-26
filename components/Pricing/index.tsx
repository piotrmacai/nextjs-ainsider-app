"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="pt-15 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: t('pricing.header.header1'),
                subtitle: t('pricing.header.header2'),
                description: t('pricing.header.desc1'),
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="mx-auto max-w-[1207px] px-4 md:px-8 xl:px-0 relative mt-15 xl:mt-20">
          <div className="absolute -bottom-15 -z-1 w-full h-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7.5 xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              {/* <h3 className="text-black dark:text-white font-bold text-3xl xl:text-sectiontitle3 mb-7.5">
                <span className="text-regular text-waterloo dark:text-manatee">
                  Od 
                </span> 
                 {" "} PLN 999
              </h3> */}
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                {t('pricing.marketing.header')}
              </h4>
              <p>  {t('pricing.marketing.desc')}</p>

              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    {t('pricing.marketing.item1')}
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    {t('pricing.marketing.item2')}
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0 opacity-40">
                    {t('pricing.marketing.item3')}
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0 opacity-40">
                    {t('pricing.marketing.item4')}
                  </li>
                </ul>
              </div>


              <a
                href="/contact"
              >
                <button
                  aria-label="purchase this plan"
                  className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                >
                  <span className="hover:pr-2 duration-500">{t('pricing.marketing.more')}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </a>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <div className="absolute top-7.5 -right-3.5 -rotate-90 rounded-tl-full rounded-bl-full bg-primary font-medium text-white text-metatitle uppercase py-1.5 px-4.5">
                popular
              </div>

              {/* <h3 className="text-black dark:text-white font-bold text-3xl xl:text-sectiontitle3 mb-7.5">
                <span className="text-regular text-waterloo dark:text-manatee">
                  Od
                </span> 
                {" "} PLN 999
              </h3> */}
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                {t('pricing.web.header')}
              </h4>
              <p>{t('pricing.web.desc')}</p>

              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    {t('pricing.web.item1')}
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    {t('pricing.web.item2')}
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    {t('pricing.web.item3')}
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0 opacity-40">
                    {t('pricing.web.item4')}
                  </li>
                </ul>
              </div>

              <a
                href="/contact"
              >
                <button
                  aria-label="purchase this plan"
                  className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                >
                  <span className="hover:pr-2 duration-500">{t('pricing.web.more')}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </a>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              {/* <h3 className="text-black dark:text-white font-bold text-3xl xl:text-sectiontitle3 mb-7.5">
                <span className="text-regular text-waterloo dark:text-manatee">
                  Od
                </span>
                {" "} PLN 999
              </h3> */}
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                {t('pricing.ai.header')}
              </h4>
              <p>{t('pricing.ai.desc')}</p>

              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    {t('pricing.ai.item1')}
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    {t('pricing.ai.item2')}
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    {t('pricing.ai.item3')}
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                    {t('pricing.ai.item4')}
                  </li>
                </ul>
              </div>

              <a href="/contact">
                <button
                  aria-label="purchase this plan"
                  className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                >
                  <span className="hover:pr-2 duration-500"> {t('pricing.ai.more')}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
