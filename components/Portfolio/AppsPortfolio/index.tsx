'use client'

import React, { useState, useEffect } from "react";
import PortfolioItem from "../portfolioItem";
import PortfolioData from "./appsPortfolioData";
import Image from "next/image";
import Link from "next/link";
// import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const AppsPortfolio = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [filteredPortfolio, setFilteredPortfolio] = useState(PortfolioData);
  const { t } = useTranslation();
 
  useEffect(() => {
    if (selectedTag === "all") {
      setFilteredPortfolio(PortfolioData);
    } else {
      const filteredItems = PortfolioData.filter((item) =>
        item.tags.includes(selectedTag)
      );
      setFilteredPortfolio(filteredItems);
    }
  }, [selectedTag]);

  const handleTagSelection = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <>
 <section className="pb-2 lg:py-15 xl:py-10 px-10 sm:px-2 py-10">
        <div className="flex flex-row mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
              <div className="flex flex-col justify-center items-center w-full">
                    <h2 className="text-black dark:text-white text-xl xl:text-hero font-bold mt-8 mb-6 sm:pr-2">
                     🔥 Insdr            
                    </h2>
                    <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 sm:pr-2">
                    {t('apps.header')}
                      <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                      </span>
                    </h1>
                    {/* <p className="text-black dark:text-white">{t('apps.desc')}</p> */}
                    <p className="text-black dark:text-white mt-2 mb-6">{t('apps.desc1')}</p>

                    <h2 className="text-xl xl:text-hero font-bold mt-6 sm:pr-2">
                      {t('apps.headertut')}               
                    </h2>
                    <p style={{marginTop:"10px"}}>{t('apps.desctut1')}</p>
                    <p>{t('apps.desctut2')}</p>
                    <p>{t('apps.desctut3')}</p>
              </div>
      </div>
      </section> 


      <section className="pb-10 lg:py-15 xl:py-20 lg:px-10 px-1">
          <div className="flex flex-wrap flex-row justify-center gap-6 mt-1 px-6">
                {/* <div className="flex flex-col justify-center items-center">
                    <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16 ">
                    🔥 Nasze Portfolio
                      <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
                      </span>
                    </h1>
               </div> */}
                 <button
                    className={`mr-2 px-4 py-2 text-lg font-semibold border-bg-blue-500 rounded-2xl bg-gray-100 ${
                      selectedTag === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("all")}
                  >
                    {t('apps.all')}
                  </button>
                 <button
                    className={`mr-2 px-4 py-2 text-lg font-semibold border-bg-blue-500 rounded-2xl bg-gray-100 ${
                      selectedTag === "resources" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("resources")}
                  >
                    {t('apps.resources')}
                  </button>
            
                  <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "writing" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("writing")}
                  >
                    {t('apps.writing')}
                  </button>
                  <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "images" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("images")}
                  >
                    {t('apps.images')}
                  </button>
                  <button
                    className={`mr-2 text-lg font-semibold ${
                      selectedTag === "social media" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                    onClick={() => handleTagSelection("social media")}
                  >
                     {t('apps.socialmedia')}
                  </button>
                      
             
                
         </div>
              <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
                  {filteredPortfolio.map((post, key) => (
                    <PortfolioItem key={key} portfolio={post} />
                  ))}
                </div>
                


              </div>
        </section>


    </>
  );
};

export default AppsPortfolio;
