"use client";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import AppsData from "@/components/Portfolio/AppsPortfolio/appsPortfolioData";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SingleBlogPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <title>{t("aiappsPortfolioPage.mainTitle")}</title>

      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="rounded-md shadow-solid-13 bg-white dark:bg-blacksection border p-9 mb-10">
                <h4 className="font-semibold text-2xl mb-7.5">
                  {t("aiappsPortfolioPage.detailsTitle")}
                </h4>

                <ul>
                  <li className="mb-3">
                    <p>{t("aiappsPortfolioPage.linkLabel")}:</p>
                    <a
                      className="text-white hover:text-primary transition-all"
                      href="https://github.com/piotrmacai/Gemini-Chatbot-App"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gemini Chatbot App
                    </a>
                  </li>

                  <li className="mb-3">
                    <p>{t("aiappsPortfolioPage.typeLabel")}:</p>
                    <p className="text-white hover:text-primary transition-all">
                      {t("aiappsPortfolioPage.typeValue")}
                    </p>
                  </li>

                  <li className="mb-3">
                    <p>{t("aiappsPortfolioPage.categoryLabel")}:</p>
                    <p className="text-white hover:text-primary transition-all">
                      {t("aiappsPortfolioPage.categoryValue")}
                    </p>
                  </li>

                  <li>
                    <p>{t("aiappsPortfolioPage.techStackLabel")}:</p>
                    <p className="text-white hover:text-primary transition-all">
                      n8n, Gemini Pro, React, Vercel AI SDK
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="rounded-md shadow-solid-13 bg-white dark:bg-blacksection border p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl mb-5">
                  {t("aiappsPortfolioPage.mainTitle")}
                </h2>

                <div className="mb-10">
                  <div className="relative aspect-[97/60]">
                    <Image
                      src="/images/portfolio/geminin8n.png"
                      alt={t("aiappsPortfolioPage.mainTitle")}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                  <div>
                    <h4 className="font-bold mb-2">
                      {t("aiappsPortfolioPage.problemTitle")}:
                    </h4>
                    <p>{t("aiappsPortfolioPage.problemText")}</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">
                      {t("aiappsPortfolioPage.solutionTitle")}:
                    </h4>
                    <p>{t("aiappsPortfolioPage.solutionText")}</p>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">
                      {t("aiappsPortfolioPage.effectTitle")}:
                    </h4>
                    <p>{t("aiappsPortfolioPage.effectText")}</p>
                  </div>
                </div>

                <div className="mt-8 leading-relaxed">
                  <p className="mb-6">
                    {t("aiappsPortfolioPage.descriptionP1")}
                  </p>
                  <p>{t("aiappsPortfolioPage.descriptionP2")}</p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-10">
              {t("aiappsPortfolioPage.otherProjectsTitle")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AppsData.map((project, key) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: key * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg bg-white dark:bg-blacksection p-4 shadow-solid-8"
                >
                  <Link
                    href={project.urlLink}
                    target="_blank"
                    className="block relative aspect-[16/9] mb-4"
                  >
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </Link>

                  <h3 className="font-semibold text-lg mb-2">
                    <Link href={project.urlLink} target="_blank">
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.metadata}
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
