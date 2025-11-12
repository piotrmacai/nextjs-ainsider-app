"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../../Common/SectionHeader";
import { useTranslation } from 'react-i18next';
import getTranslatedFeatures from "./featuresData";

  const Feature = () => {
    const { t } = useTranslation();
    const featuresData = getTranslatedFeatures();
    return (
      <>
        {/* <!-- ===== Features Start ===== --> */}
        <section id="features" className="py-10 lg:py-10 xl:py-15">
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            {/* <!-- Section Title Start --> */}
            {/* <SectionHeader
              headerInfo={{
                title: t('features.header.title'),
                subtitle: t('features.header.subtitle'),
                description: t('features.header.description'),
              }}
            /> */}
            {/* <!-- Section Title End --> */}
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-4 lg:mt-4 xl:mt-8">
              {/* <!-- Features item Start --> */}
  
              {featuresData.map((feature, key) => (
                <SingleFeature feature={feature} key={key} t={t}/>
              ))}
              {/* <!-- Features item End --> */}
            </div>
          </div>
        </section>
  
        {/* <!-- ===== Features End ===== --> */}
      </>
    );
  };
  
  export default Feature;
  