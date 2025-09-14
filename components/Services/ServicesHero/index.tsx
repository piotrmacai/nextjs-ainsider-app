'use client'

import React from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const GenAiPortfolio = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="pb-10 lg:py-15 xl:py-20 px-10">
        <div className="flex flex-row mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className="flex flex-col md:w-1/2 md:px-8 mt-4 md:mt-8">
            <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
              🔥   {t('services.header1')}
            </h4>
            <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16">
            {t('services.header2')}
              <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
              </span>
            </h1>
            <p>{t('services.desc')}</p>
                     <div className="mt-10 gap-4 flex flex-col md:flex-row">
            <a href="#services">
            <button
                  className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                >
                  {t('services.quote')}
                </button>
                </a>
{/* 
                <a href="https://www.skool.com/ainsider-6149/about?ref=d207b2af5b914ff09daac8af70f1162c" target="_blank">
            <button
                  className="flex bg-blackho hover:bg-black dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                >
                  Skool
                </button>
                </a> */}
                </div>
          </div>
          <div className="flex flex-col md:w-1/2">
            <div className="relative aspect-[700/444]">
              <Image
                className="shadow-solid-l"
                src="/images/hero/hero-dark.svg"
                alt="Hero"
                fill
              />
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default GenAiPortfolio;