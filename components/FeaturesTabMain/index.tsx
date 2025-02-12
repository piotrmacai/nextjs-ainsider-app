"use client";
import React, { useState } from "react";
import Image from "next/image";
import FeaturesTabItem from "./FeaturesTabItem";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import getTranslatedFeaturesTabData from "./featuresTabData";
import SectionHeader from "../Common/SectionHeader";

const MainFeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");
  const { t } = useTranslation();
  const featuresTabData = getTranslatedFeaturesTabData();
  return ( 
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative pb-20 pt-18 lg:pb-25 xl:pb-30">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="animate_top text-center mx-auto">
            <div className="mb-4">
              <h3 className="text-black dark:text-white text-3xl font-bold">
                {t('featuresTab.title.one')} <br />
                {t('featuresTab.title.two')} <br />
                {t('featuresTab.title.three')}
              </h3>
            </div>
          </div>

          {/* Tab Menu */}
          <div className="mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke dark:border-strokedark md:flex-nowrap md:items-center lg:gap-7.5 xl:gap-12.5">
            <button
              className={`relative flex w-full items-center gap-4 bg-gray-2 py-3 px-6 dark:bg-blacksection md:w-auto ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-primary"
                  : ""
              }`}
              onClick={() => setCurrentTab("tabOne")}
            >
              <span className="text-black dark:text-white font-medium">
                {t('featuresTab.header.tabOne')}
              </span>
            </button>
            <button
              className={`relative flex w-full items-center gap-4 bg-gray-2 py-3 px-6 dark:bg-blacksection md:w-auto ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-primary"
                  : ""
              }`}
              onClick={() => setCurrentTab("tabTwo")}
            >
              <span className="text-black dark:text-white font-medium">
                {t('featuresTab.header.tabTwo')}
              </span>
            </button>
            <button
              className={`relative flex w-full items-center gap-4 bg-gray-2 py-3 px-6 dark:bg-blacksection md:w-auto ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-primary"
                  : ""
              }`}
              onClick={() => setCurrentTab("tabThree")}
            >
              <span className="text-black dark:text-white font-medium">
                {t('featuresTab.header.tabThree')}
              </span>
            </button>
          </div>

          {/* Tab Content Items */}
          <div>
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default MainFeaturesTab;
