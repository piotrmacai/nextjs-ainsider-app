"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "../../Common/SectionHeader";
import { useTranslation } from 'react-i18next';

const VibeCodingPricing = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-15 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: t('vibecodingpricing.title'),
                subtitle: t('vibecodingpricing.subtitle'),
                description: t('vibecodingpricing.description'),
              }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1207px] px-4 md:px-8 xl:px-0 relative mt-15 xl:mt-20">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7.5 xl:gap-12.5">
            
            {/* Landing Pages */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h3 className="text-black dark:text-white font-bold text-2xl xl:text-3xl mb-2.5">
                {t('vibecodingpricing.landing.title')}
              </h3>
              <p className="mb-6">{t('vibecodingpricing.landing.description')}</p>
              
              <div className="flex gap-4 mb-6">
                <div className="w-1/2 bg-gray-2 dark:bg-black rounded-lg p-4">
                  {/* <h4 className="font-semibold text-black dark:text-white mb-2">
                    {t('vibecodingpricing.landing.theme.title')}
                  </h4> */}
                  <p className="text-primary font-bold text-lg">{t('vibecodingpricing.landing.pricelandingtheme')}</p>
                </div>
                {/* <div className="w-1/2 bg-meta/5 rounded-lg p-4">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    {t('vibecodingpricing.landing.custom.title')}
                  </h4>
                  <p className="text-primary font-bold text-lg">{t('vibecodingpricing.landing.pricelandingcustom')}</p>
                </div> */}
              </div>

             {/* Landing Pages Features */}
<div className="border-t border-stroke dark:border-strokedark mt-6 pt-6 pb-8">
  <h4 className="font-semibold text-black dark:text-white mb-4">
    {t('vibecodingpricing.landing.features.title')}
  </h4>
  <ul className="space-y-3">
    {(t('vibecodingpricing.landing.features.list', { returnObjects: true }) as string[]).map((feature, index) => (
      <li key={index} className="flex items-start gap-3 text-black dark:text-manatee">
        <svg className="w-5 h-5 text-meta mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        {feature}
      </li>
    ))}
  </ul>
</div>
              
              <div className="mt-6">
                <a href="/contact">
                  <button
                    aria-label={t('vibecodingpricing.cta')}
                    className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                  >
                    {t('vibecodingpricing.cta')}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" fill="currentColor"/>
                    </svg>
                  </button>
                </a>
              </div>
            </div>

            {/* Business Websites */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h3 className="text-black dark:text-white font-bold text-2xl xl:text-3xl mb-2.5">
                {t('vibecodingpricing.business.title')}
              </h3>
              <p className="mb-6">{t('vibecodingpricing.business.description')}</p>
              
              <div className="flex gap-4 mb-6">
                <div className="w-1/2 bg-gray-2 dark:bg-black rounded-lg p-4">
                  {/* <h4 className="font-semibold text-black dark:text-white mb-2">
                    {t('vibecodingpricing.business.theme.title')}
                  </h4> */}
                  <p className="text-primary font-bold text-lg">{t('vibecodingpricing.business.pricebstheme')}</p>
                </div>
                {/* <div className="w-1/2 bg-meta/5 rounded-lg p-4">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    {t('vibecodingpricing.business.custom.title')}
                  </h4>
                  <p className="text-primary font-bold text-lg">{t('vibecodingpricing.business.pricebscustom')}</p>
                </div> */}
              </div>

            {/* Business Websites Features */}
<div className="border-t border-stroke dark:border-strokedark mt-6 pt-6 pb-8">
  <h4 className="font-semibold text-black dark:text-white mb-4">
    {t('vibecodingpricing.business.features.title')}
  </h4>
  <ul className="space-y-3">
    {(t('vibecodingpricing.business.features.list', { returnObjects: true }) as string[]).map((feature, index) => (
      <li key={index} className="flex items-start gap-3 text-black dark:text-manatee">
        <svg className="w-5 h-5 text-meta mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        {feature}
      </li>
    ))}
  </ul>
</div>
              
              <div className="mt-6">
                <a href="/contact">
                  <button
                    aria-label={t('vibecodingpricing.cta')}
                    className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                  >
                    {t('vibecodingpricing.cta')}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" fill="currentColor"/>
                    </svg>
                  </button>
                </a>
              </div>
            </div>

            {/* Ecommerce */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h3 className="text-black dark:text-white font-bold text-2xl xl:text-3xl mb-2.5">
                {t('vibecodingpricing.ecommerce.title')}
              </h3>
              <p className="mb-6">{t('vibecodingpricing.ecommerce.description')}</p>
              
              <div className="flex gap-4 mb-6">
                <div className="w-1/2 bg-gray-2 dark:bg-black rounded-lg p-4">
                  {/* <h4 className="font-semibold text-black dark:text-white mb-2">
                    {t('vibecodingpricing.ecommerce.theme.title')}
                  </h4> */}
                  <p className="text-primary font-bold text-lg">{t('vibecodingpricing.ecommerce.priceecomtheme')}</p>

                </div>
                {/* <div className="w-1/2 bg-meta/5 rounded-lg p-4">
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    {t('vibecodingpricing.ecommerce.custom.title')}
                  </h4>
                  <p className="text-primary font-bold text-lg">{t('vibecodingpricing.ecommerce.priceecomcustom')}</p>
                </div> */}
              </div>

            {/* Ecommerce Features */}
<div className="border-t border-stroke dark:border-strokedark mt-6 pt-6 pb-8">
  <h4 className="font-semibold text-black dark:text-white mb-4">
    {t('vibecodingpricing.ecommerce.features.title')}
  </h4>
  <ul className="space-y-3">
    {(t('vibecodingpricing.ecommerce.features.list', { returnObjects: true }) as string[]).map((feature, index) => (
      <li key={index} className="flex items-start gap-3 text-black dark:text-manatee">
        <svg className="w-5 h-5 text-meta mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        {feature}
      </li>
    ))}
  </ul>
</div>
              
              <div className="mt-6">
                <a href="/contact">
                  <button
                    aria-label={t('vibecodingpricing.cta')}
                    className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
                  >
                    {t('vibecodingpricing.cta')}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" fill="currentColor"/>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VibeCodingPricing;
