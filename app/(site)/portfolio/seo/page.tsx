"use client"
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
// import { useTranslation } from 'react-i18next';
import WebsitesData from "@/components/Portfolio/websitesData";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleBlogPage = () => {
  // const { t } = useTranslation();

  return (
    <>
      <title>{`Smart Websites with CMS - Details`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                  Project Details
                </h4>

                <ul>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Link:</p>
                    <a className="text-white transition-all duration-300 hover:text-primary" href="https://oskmachowski.pl/" target="_blank" rel="noopener noreferrer">https://oskmachowski.pl/</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">OSK Machowski</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">E-learning & Education</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Tech Stack:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Next.js, React, Tailwind, AI Assistant</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  Smart Websites with CMS
                </h2>
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/65]">
                    <Image
                      src={"/images/portfolio/osk.png"}
                      alt="Smart Websites with CMS"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>

                <div className="blog-details">
                  <div className="flex flex-col gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <div>
                      <h4 className="font-bold text-lg text-black dark:text-white mb-2">Problem:</h4>
                      <p className="text-gray-600 dark:text-gray-300">Slow & unoptimized sites.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black dark:text-white mb-2">Solution:</h4>
                      <p className="text-gray-600 dark:text-gray-300">Ultra-fast SEO-ready website + AI Assistant.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black dark:text-white mb-2">Effect:</h4>
                      <p className="text-gray-600 dark:text-gray-300">Higher conversion & Google ranking.</p>
                    </div>
                  </div>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-10">
              Other Website Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {WebsitesData.map((site, key) => (
                <motion.div
                  key={key}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: key * 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top rounded-lg bg-white dark:bg-blacksection p-4 shadow-solid-8 hover:shadow-solid-13 transition-all duration-300"
                >
                  <Link href={site.urlLink} target="_blank" className="block relative aspect-[16/9] mb-4">
                    <Image
                      src={site.mainImage}
                      alt={site.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </Link>
                  <h3 className="font-semibold text-lg text-black dark:text-white mb-2 hover:text-primary transition-colors">
                    <Link href={site.urlLink} target="_blank">
                      {site.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {site.metadata}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
