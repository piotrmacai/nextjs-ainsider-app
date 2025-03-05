"use client"

import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { useTranslation } from 'react-i18next';
import Voiceflow from "@/components/Voiceflow";


const PolicyPrivacy = () => {
    const { t } = useTranslation();

    return (
      <>
        <title>{`Privacy and cookies policy`}</title>
        <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
             
  
              <div className="lg:w-full">
                <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                  <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  {t('privacy.head')} 
                  </h2>
  
                  <div className="blog-details">
  
                    <p>
                    {t('privacy.head1')}                 
                     </p>
                     <p>
                    {t('privacy.desc1')}                 
                     </p>
                     <p>
                     {t('privacy.head2')}                  
                     </p>
                     <p>
                    {t('privacy.desc2')}                 
                     </p>
                     <p>
                     {t('privacy.head3')}                  
                     </p>
                     <p>
                    {t('privacy.desc3')}                 
                     </p>
                     <p>
                     {t('privacy.head4')}               
                     </p>
                     <p>
                    {t('privacy.desc4')}                 
                     </p>
                     <p>
                     {t('privacy.head5')}               
                     </p>
                     <p>
                    {t('privacy.desc5')}                 
                     </p>
                     <p>
                     {t('privacy.head6')}               
                     </p>
                     <p>
                    {t('privacy.desc6')}                 
                     </p>

                     <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  {t('privacy.headcook')} 
                  </h2>
                    <p>
                     {t('privacy.headcook1')}               
                     </p>
                     <p>
                    {t('privacy.cook1')}                 
                    </p>
                    <p>
                     {t('privacy.headcook2')}               
                     </p>
                     <p>
                    {t('privacy.cook2')}                 
                    </p>
                    <p>
                    {t('privacy.cook3')}                 
                    </p>
                    <p>
                     {t('privacy.headcook3')}               
                     </p>
                     <p>
                    {t('privacy.cook4')}                 
                    </p>
                    <p>
                     {t('privacy.headcook4')}               
                     </p>
                     <p>
                    {t('privacy.cook5')}                 
                    </p>
                    <p>
                     {t('privacy.headcook5')}               
                     </p>
                     <p>
                    {t('privacy.cook6')}                 
                    </p>
                    <p>
                     {t('privacy.headcook6')}               
                     </p>
                     <p>
                    {t('privacy.cook7')}                 
                    </p>
  



                  </div>
  

                </div>
              </div>
            </div>
          </div>
        </section>
        <Voiceflow/>
      </>
    );
  };

export default PolicyPrivacy;