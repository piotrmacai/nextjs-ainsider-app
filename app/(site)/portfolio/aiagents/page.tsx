"use client";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import WebsitesData from "@/components/Portfolio/websitesData";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SinglePortfolioPage = () => {
  const { t } = useTranslation();
  const agentsData = WebsitesData.filter((item) =>
    item.tags?.includes("agents")
  );

  return (
    <>
      <title>{t("agentsPortfolioPage.mainTitle")}</title>

      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                  {t("agentsPortfolioPage.detailsTitle")}
                </h4>

                <ul>
                  <li className="mb-3">
                    <p>{t("agentsPortfolioPage.techStack")}:</p>
                    <p className="text-white hover:text-primary transition-all">
                      Next.js, Python, n8n, LangChain, Vercel AI SDK
                    </p>
                  </li>

                  <li className="mb-3">
                    <p>{t("agentsPortfolioPage.models")}:</p>
                    <p className="text-white hover:text-primary transition-all">
                      GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3
                    </p>
                  </li>

                  <li className="mb-3">
                    <p>{t("agentsPortfolioPage.apis")}:</p>
                    <p className="text-white hover:text-primary transition-all">
                      OpenAI, Anthropic, Google Vertex AI, HuggingFace
                    </p>
                  </li>

                  <li>
                    <p>{t("agentsPortfolioPage.category")}:</p>
                    <p className="text-white hover:text-primary transition-all">
                      {t("agentsPortfolioPage.categoryAgents")}
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  {t("agentsPortfolioPage.mainTitle")}
                </h2>

                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/65]">
                    <Image
                      src="/images/portfolio/geminin8n.png"
                      alt={t("agentsPortfolioPage.mainTitle")}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                </div>

                <div className="blog-details">
                  <div className="flex flex-col gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        {t("agentsPortfolioPage.problemTitle")}:
                      </h4>
                      <p>{t("agentsPortfolioPage.problemText")}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        {t("agentsPortfolioPage.solutionTitle")}:
                      </h4>
                      <p>{t("agentsPortfolioPage.solutionText")}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-2">
                        {t("agentsPortfolioPage.effectTitle")}:
                      </h4>
                      <p>{t("agentsPortfolioPage.effectText")}</p>
                    </div>
                  </div>

                  <div className="mt-8 text-base leading-relaxed">
                    <p className="mb-6">
                      {t("agentsPortfolioPage.descriptionP1")}
                    </p>
                    <p>{t("agentsPortfolioPage.descriptionP2")}</p>
                  </div>
                </div>

                <SharePost />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-10">
              {t("agentsPortfolioPage.otherProjectsTitle")}
            </h2>

            <div className="flex flex-col gap-8">
              {agentsData.map((project, key) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: key * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col md:flex-row gap-6 bg-white dark:bg-blacksection rounded-2xl p-6 shadow-solid-8"
                >
                  <Link
                    href={project.urlLink}
                    target="_blank"
                    className="relative w-full md:w-1/3 aspect-[16/10] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </Link>

                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3">
                      <Link href={project.urlLink} target="_blank">
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mb-5">{project.metadata}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold uppercase rounded-full bg-primary/10 text-primary"
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

export default SinglePortfolioPage;
