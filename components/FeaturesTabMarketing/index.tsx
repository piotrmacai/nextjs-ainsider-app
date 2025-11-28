"use client";
import React, { useState } from "react";
import Image from "next/image";
import FeaturesTabItem from "./FeaturesTabItem";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import getTranslatedFeaturesTabData from "./featuresTabData";

const MarketingFeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");
  const { t } = useTranslation();
  const featuresTabData = getTranslatedFeaturesTabData();

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
  };

  const getTabHeader = (tabId: string) => {
    switch (tabId) {
      case "tabOne":
        return t('heroMarketingSection.FeaturesTab.header.tabOne');
      case "tabTwo":
        return t('heroMarketingSection.FeaturesTab.header.tabTwo');
      case "tabThree":
        return t('heroMarketingSection.FeaturesTab.header.tabThree');
      default:
        return '';
    }
  };

  const tabIds = ["tabOne", "tabTwo", "tabThree"];

  return (
    <>
      {/* */}
      <section className="pt-10 pb-27 lg:pb-30 relative overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 relative">

          {/* Efekt tła zostaje bez zmian */}
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%] opacity-50 blur-xl">
            <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5 rounded-full" />
          </div>

          {/* GŁÓWNY KONTENER GLASSMORHISM */}
          <div className="p-4 md:p-8 lg:p-10 rounded-2xl backdrop-blur-lg bg-white/20 dark:bg-black/20 border border-white/30 dark:border-black/30 shadow-2xl dark:shadow-none">

            {/* */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              // Zmiana: Usunięto tło kontenera i obramowanie. Został tylko cień.
              className="animate_top rounded-full p-1.5 flex flex-wrap md:flex-nowrap items-center justify-center gap-1 mb-15 xl:mb-21.5 shadow-inner dark:shadow-inner"
            >
              {tabIds.map((tabId, index) => (
                <div
                  key={tabId}
                  onClick={() => handleTabClick(tabId)}
                  className={`relative cursor-pointer w-full md:w-auto flex items-center gap-2 py-3 px-5 rounded-full transition-all duration-300 ${currentTab === tabId
                      // Aktywna karta: utrzymanie kontrastowego tła dla widoczności
                      ? "bg-primary text-white shadow-lg shadow-primary/40 dark:shadow-primary/20"
                      // Nieaktywna karta: czyste, minimalistyczne, bez tła
                      : "text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-black/50"
                    }`}
                >
                  <div className={`text-sm font-semibold ${currentTab === tabId ? 'text-white' : 'text-primary dark:text-white/70'}`}>
                    {`0${index + 1}`}
                  </div>
                  <h5 className={`text-sm xl:text-regular font-medium ${currentTab === tabId ? 'text-white' : 'text-black dark:text-white'}`}>
                    {getTabHeader(tabId)}
                  </h5>
                </div>
              ))}
            </motion.div>
            {/* */}

            {/* */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top mx-auto max-w-c-1154"
            >
              {featuresTabData.map((feature, key) => (
                <div
                  className={feature.id === currentTab ? "block" : "hidden"}
                  key={key}
                >
                  {/* FeaturesTabItem jest teraz wewnątrz Glassmorphism Container */}
                  <FeaturesTabItem featureTab={feature} key={key} />
                </div>
              ))}
            </motion.div>
            {/* */}

          </div>
          {/* KONIEC GŁÓWNEGO KONTENERA */}

        </div>
      </section>
      {/* */}
    </>
  );
};

export default MarketingFeaturesTab;