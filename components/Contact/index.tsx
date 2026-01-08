"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import NotionFormPL from "../NotionForm";
import NotionFormEN from "../NotionFormEn";
import LindyEmbed from "@/components/LindyAi";
import "@/i18n/i18n";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const { t, i18n } = useTranslation();

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-2 md:px-4 2xl:px-0">
        <div className="mx-auto dark:bg-[#1A1A1C] relative pt-10 lg:pt-15 xl:pt-20 px-4.5 lg:px-8 xl:px-12 overflow-hidden">
          {/* Modern Contact Title */}
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h1 className="text-black dark:text-white text-4xl xl:text-5xl tracking-tight font-extrabold mb-4 drop-shadow-sm">
              {t('contact.pageTitle')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium max-w-2xl">
              {t('contact.pageTitleDesc')}
            </p>


          </div>
          <div className="absolute -z-1 rounded-lg left-0 top-0 w-full h-2/3 bg-gradient-to-t from-[#fff] to-[#f7faff47] dark:bg-gradient-to-t dark:from-[#24283E] dark:to-[#252A42]"></div>
          <div className="absolute -z-1 bottom-[-255px] left-0 w-full h-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>
          {/* <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-15">
              {t('contact.headermain')}
              </h2> */}
          <div className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-8 xl:gap-20 md:justify-between">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-3/5 lg:w-3/4 shadow-solid-8 rounded-lg bg-white dark:bg-black dark:border dark:border-strokedark p-7.5 xl:p-15"
            >
              <h2 className="text-black dark:text-white text-2xl xl:text-sectiontitle2 font-semibold mb-15">
                {t('contact.header1')}
              </h2>
              <h3 className="text-black dark:text-white text-lg xl:text-xl font-semibold mb-15">
                {t('contact.header1.2')}
              </h3>

              {i18n.language?.startsWith("pl") ? <NotionFormPL /> : <NotionFormEN />}


            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 lg:w-[26%] md:p-4 xl:pt-15"
            >
              <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-semibold mb-12.5">
                {t('contact.header2')}
              </h2>

              <div className="mb-7 5">


                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  {t('contact.calendly')}
                </h4>
                <p>
                  <a href="https://calendly.com/macaipiotr/30min">{t('contact.header3')}</a>
                </p>
              </div>
              <div className="mb-7 5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  {t('contact.email')}
                </h4>
                <p>
                  <a href="mailto:piotr@ainsider.co">piotr@ainsider.co</a>
                </p>
              </div>
              <div className="mb-7 5">
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  {t('contact.number')}
                </h4>
                <p>
                  <a href="#">+48 730 776 541</a>
                </p>
              </div>
              <div>
                <h4 className="font-medium text-black dark:text-white text-metatitle3 mb-4">
                  Messenger
                </h4>
                <p>
                  <a href="https://www.facebook.com/piotrmacai/">{t('contact.mess')}</a>
                </p>
              </div>



            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
