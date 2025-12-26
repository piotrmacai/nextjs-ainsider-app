"use client";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import WebsitesData from "@/components/Portfolio/websitesData";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SingleBlogPage = () => {
  const { t } = useTranslation();

  const websites = WebsitesData.filter((site) =>
    site.tags?.some((tag) => ["web", "ecommerce"].includes(tag))
  );

  return (
    <>
      <title>{`Smart Websites with CMS - Details`}</title>

      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl mt-2 mb-7.5">
                  {t("webPortfolioPage.detailsTitle")}
                </h4>

                <ul>
                  <li className="mb-3">
                    <p>{t("webPortfolioPage.techStack")}:</p>
                    <p className="text-white">
                      Next.js, React, Tailwind CSS, TypeScript
                    </p>
                  </li>

                  <li className="mb-3">
                    <p>{t("webPortfolioPage.cmsBuilders")}:</p>
                    <p className="text-white">
                      WordPress, Webflow, Shopify, Sanity, Strapi
                    </p>
                  </li>

                  <li className="mb-3">
                    <p>{t("webPortfolioPage.features")}:</p>
                    <p className="text-white">
                      SEO Optimized, Fast Performance, AI Integration
                    </p>
                  </li>

                  <li>
                    <p>{t("webPortfolioPage.category")}:</p>
                    <p className="text-white">
                      Custom Websites & Landing Pages
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 mb-5">
                  {t("webPortfolioPage.mainTitle")}
                </h2>

                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/65]">
                    <Image
                      src="/images/portfolio/osk.png"
                      alt="Smart Websites with CMS"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>

                <div className="blog-details">
                  <div className="flex flex-col gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        {t("webPortfolioPage.problemTitle")}:
                      </h4>
                      <p>{t("webPortfolioPage.problemText")}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        {t("webPortfolioPage.solutionTitle")}:
                      </h4>
                      <p>{t("webPortfolioPage.solutionText")}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        {t("webPortfolioPage.effectTitle")}:
                      </h4>
                      <p>{t("webPortfolioPage.effectText")}</p>
                    </div>
                  </div>
                </div>

                <SharePost />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-10">
              {t("webPortfolioPage.otherProjectsTitle")}
            </h2>

            <div className="flex flex-col gap-8">
              {websites.map((site, key) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: key * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col md:flex-row gap-6 bg-white dark:bg-blacksection rounded-2xl p-6 shadow-solid-8"
                >
                  <Link
                    href={site.urlLink}
                    target="_blank"
                    className="block relative w-full md:w-1/3 aspect-[16/10]"
                  >
                    <Image
                      src={site.mainImage}
                      alt={site.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </Link>

                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3">
                      <Link href={site.urlLink} target="_blank">
                        {site.title}
                      </Link>
                    </h3>

                    <p className="text-sm mb-5">
                      {site.metadata}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {site.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-primary/5 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
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

export default SingleBlogPage;
