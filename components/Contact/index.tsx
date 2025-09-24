"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import NotionFormEmbed from "../NotionForm";
import BotpressSection from "@/components/BotpressSection";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const { t } = useTranslation();

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
        <div className="mx-auto relative pt-10 lg:pt-15 xl:pt-20 px-4.5 lg:px-8 xl:px-12 overflow-hidden">
              {/* Modern Contact Title */}
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <h1 className="text-black dark:text-white text-4xl xl:text-5xl tracking-tight font-extrabold mb-4 drop-shadow-sm">
              {t('contact.pageTitle', { defaultValue: 'Contact' })}
            </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium max-w-2xl">
              {t('contact.pageTitleDesc')}
            </p>
            <div className="w-full max-w-2xl mt-6 rounded-2xl bg-white/40 dark:bg-black/30 shadow-lg backdrop-blur-md p-4">
            <BotpressSection />
          </div>
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
              {/* <form
                action="https://formspree.io/f/xovqvrlg"
                method="POST"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between gap-7.5 lg:gap-14 mb-7.5">
                  <input
                    type="text" name="name"
                    placeholder={t('contact.form.name')}
                    required
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                  />

                  <input
                    type="email" name="email"
                    placeholder={t('contact.form.email')}
                    required
                    className="w-full lg:w-1/2 bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white pb-3.5"
                  />
                </div>


                <div className="flex mb-11.5">
                  <textarea
                    placeholder={t('contact.form.business')}
                    name="business"
                    rows={4}
                    className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex mb-11.5">
                  <textarea
                    placeholder={t('contact.form.details')}
                    name="message"
                    rows={4}
                    className="w-full bg-transparent border-b border-stroke dark:border-strokedark focus-visible:outline-none focus:border-waterloo dark:focus:border-manatee focus:placeholder:text-black dark:focus:placeholder:text-white"
                  ></textarea>
                </div>


                <div className="flex flex-wrap xl:justify-between ">
                  <div className="flex mb-4 md:mb-0">
                    <input
                       id="fid_preview_checkboxes_option_513B5186-4757-4EB3-947C-549ABBD4E867"
                       name="checkbox"
                       type="checkbox"
                      value=""
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-2"
                    />
                    <label
                      htmlFor="fid_preview_checkboxes_option_513B5186-4757-4EB3-947C-549ABBD4E867"
                      className="max-w-[425px] flex cursor-pointer select-none pl-5 text-sm"
                    >
                    {t('contact.consent')}                
                    </label>
                  </div>

                  <button type="submit" value="Submit" aria-label="send message" className="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 dark:bg-btndark font-medium text-white rounded-full px-6 py-3">
                  {t('contact.button')}
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form> */}
       <NotionFormEmbed />
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
              className="animate_top w-full md:w-2/5 lg:w-[26%] md:p-7.5 xl:pt-15"
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
                  <a href="#">+48 576 287 032</a>
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
