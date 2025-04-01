"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import SectionHeader from "../Common/SectionHeader";

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  image: string;
  imageDark: string;
}

const ServiceTimeline = () => {
  const { t } = useTranslation();
  
  const timelineSteps: TimelineStep[] = [
    {
      id: "step1",
      title: t('serviceTimeline.step1.title'),
      description: t('serviceTimeline.step1.description'),
      image: "/images/features/undraw_solution_mindset.svg",
      imageDark: "/images/features/undraw_solution_mindset.svg",
    },
    {
      id: "step2",
      title: t('serviceTimeline.step2.title'),
      description: t('serviceTimeline.step2.description'),
      image: "/images/features/undraw_online_stats.svg",
      imageDark: "/images/features/undraw_online_stats.svg",
    },
    {
      id: "step3",
      title: t('serviceTimeline.step3.title'),
      description: t('serviceTimeline.step3.description'),
      image: "/images/features/undraw_predictive.svg",
      imageDark: "/images/features/undraw_predictive.svg",
    },
    {
      id: "step4",
      title: t('serviceTimeline.step4.title'),
      description: t('serviceTimeline.step4.description'),
      image: "/images/features/undraw_solution_mindset.svg",
      imageDark: "/images/features/undraw_solution_mindset.svg",
    },
  ];

  return (
    <>
      <section className="pt-8 pb-12 lg:py-15 xl:py-20 px-10 relative">
        <SectionHeader
          headerInfo={{
            title: t('serviceTimeline.title.one'),
            subtitle: t('serviceTimeline.title.two'),
            description: t('serviceTimeline.title.three'),
          }}
        />
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 mt-14 relative">
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
            <Image
              fill
              className="dark:hidden"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              className="hidden dark:block"
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-stroke dark:bg-strokedark md:ml-px -ml-px h-full"></div>

            {/* Timeline Steps */}
            <div className="space-y-12 md:space-y-16">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="animate_top relative"
                >
                  {/* Timeline node */}
                  <div className="absolute left-6 md:left-1/2 -ml-3.5 md:-ml-3.5 top-5 h-7 w-7 rounded-full border-4 border-primary bg-white dark:bg-blacksection z-10"></div>

                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Step number */}
                    <div className="md:w-1/2 pl-14 md:pl-0 md:pr-8 md:text-right mb-8 md:mb-0">
                      <div className="inline-block mb-2 w-12.5 h-12.5 rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                        <p className="text-black dark:text-white font-medium text-metatitle3">
                          {(index + 1).toString().padStart(2, '0')}
                        </p>
                      </div>
                      <h3 className="text-black dark:text-white text-xl xl:text-2xl font-bold mb-3">{t(step.title)}</h3>
                      <p className="text-body-color dark:text-body-color-dark">{t(step.description)}</p>
                    </div>

                    {/* Image */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} relative mx-auto pl-14 md:pl-0`}>
                      <div className="relative aspect-[562/366] md:h-52 lg:h-64">
                        <Image 
                          src={step.image} 
                          alt={t(step.title)} 
                          fill 
                          className="dark:hidden object-contain"
                        />
                        <Image 
                          src={step.imageDark} 
                          alt={t(step.title)} 
                          fill 
                          className="hidden dark:block object-contain" 
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTimeline;