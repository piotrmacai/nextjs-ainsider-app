"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import SectionHeader from "../../Common/SectionHeader";

const AiVoiceAbout = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <!-- ===== Benefits Section Start ===== --> */}
      <section className="py-10 lg:py-15 xl:py-20 mb-8 overflow-hidden">
       
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
             <SectionHeader
              headerInfo={{
                title: t('aivoiceabout.title'),
                subtitle: t('aivoiceabout.subtitle1'),
                description: t('aivoiceabout.subtitle2'),
              }}
            />
          <div className="flex items-center gap-8 lg:gap-32.5 mt-16">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-2/5 relative mx-auto aspect-[588/526.5]"
            >
               <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-3/5 md:mr-8"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase">
                  {t('aivoiceabout.section1.header1')}
                </span>{" "}
                {/* {t('aivoiceabout.section1.header2')} */}
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl mb-6">
                {t('aivoiceabout.section1.header1')}
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  {/* {t('aivoiceabout.section1.header4')} */}
                </span>
              </h2>
              <p className="mb-8 text-lg">
                {t('aivoiceabout.section1.desc1')}
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/5">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                  {t('aivoiceabout.section1.desc2')}
                  </h5>
                  <p>{t('aivoiceabout.section1.desc3')}</p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/5">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    {t('aivoiceabout.section1.desc4')}
                  </h5>
                  <p>{t('aivoiceabout.section1.desc5')} </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Advanced Features Section ===== --> */}
      <section className="hidden md:flex">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-3/5"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                {t('aivoiceabout.section2.header1')}
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl mb-6">
                {t('aivoiceabout.section2.header2')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-meta flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-2">{t('aivoiceabout.section2.desc2')}</h5>
                    <p>{t('aivoiceabout.section2.desc1')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-meta flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-2">{t('aivoiceabout.section2.header3')}</h5>
                    <p>{t('aivoiceabout.section2.desc2')}</p>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="/contact"
                  className="flex items-center gap-2.5 text-black dark:text-white mt-7.5 hover:text-primary dark:hover:text-primary"
                >
                  <span className="hover:pr-2 duration-500">{t('aivoiceabout.section2.button')}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:hidden"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                  <svg
                    className="hidden dark:block"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-2/5 relative mx-auto aspect-[588/526.5]"
            >
             <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>

          {/* <!-- ===== Benefits Section Start ===== --> */}
          <section className="py-10 lg:py-15 xl:py-20 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-2/5 relative mx-auto aspect-[588/526.5]"
            >
               <Image
                src="/images/shape/shape-06.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/shape/shape-06.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-3/5 md:mr-8"
            >
                  <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase">
                  {t('aivoiceabout.section3.header1')}
                </span>{" "}
                {/* {t('aivoiceabout.section3.header2')} */}
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl mb-6">
                {t('aivoiceabout.section3.header2')}
              </h2>
              <p className="mb-8 text-lg">
                {t('aivoiceabout.section3.desc1')}
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/5">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                  {t('aivoiceabout.section3.header3')}
                  </h5>
                  <p>{t('aivoiceabout.section3.desc3')}</p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/5">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                  {t('aivoiceabout.section3.header4')}
                  </h5>
                  <p>{t('aivoiceabout.section3.desc4')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Advanced Features Section ===== --> */}
      <section className="hidden md:flex">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5 md:pr-4">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-3/5"
            >
                <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase">
                  {t('aivoiceabout.section4.header1')}
                </span>{" "}
                {/* {t('aivoiceabout.section4.desc1')} */}
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl mb-6">
                {t('aivoiceabout.section4.header2')}
              </h2>
              <p className="mb-8 text-lg">
                {t('aivoiceabout.section4.desc1')}
              </p>
              <p className="mb-8 text-lg">
                {t('aivoiceabout.section4.desc2')}
              </p>

              <div>
                <a
                  href="/contact"
                  className="flex items-center gap-2.5 text-black dark:text-white mt-7.5 hover:text-primary dark:hover:text-primary"
                >
                  <span className="hover:pr-2 duration-500">{t('aivoiceabout.section4.button')}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:hidden"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                  <svg
                    className="hidden dark:block"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-2/5 relative mx-auto aspect-[588/526.5]"
            >
             <Image
                src="/images/apps/chatbot1.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/apps/chatbot1.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
};

export default AiVoiceAbout;
