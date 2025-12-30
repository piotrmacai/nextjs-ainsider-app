"use client";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import WebsitesData from "@/components/Portfolio/websitesData";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SingleBlogPage = () => {
    const { t } = useTranslation();

    // Filter for items tagged with 'automations'
    const automationsPortfolioItems = WebsitesData.filter(item =>
        item.tags?.includes('automations')
    );

    return (
        <>
            <title>{`AI Customer Support Agents - Details`}</title>

            <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
                        <div className="md:w-1/2 lg:w-[32%]">
                            <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                                <h4 className="font-semibold text-2xl mt-2 mb-7.5">
                                    {t("automationsPage.detailsTitle")}
                                </h4>

                                <ul>
                                    <li className="mb-3">
                                        <p>{t("automationsPage.techStack")}:</p>
                                        <p className="text-white">
                                            Next.js, Python, n8n, LangChain, Vercel AI SDK
                                        </p>
                                    </li>
                                    <li className="mb-3">
                                        <p>{t("automationsPage.models")}:</p>
                                        <p className="text-white">
                                            GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3
                                        </p>
                                    </li>
                                    <li className="mb-3">
                                        <p>{t("automationsPage.apis")}:</p>
                                        <p className="text-white">
                                            OpenAI, Anthropic, Google Vertex AI, HuggingFace
                                        </p>
                                    </li>
                                    <li>
                                        <p>{t("automationsPage.category")}:</p>
                                        <p className="text-white">
                                            Custom AI Agents & Chatbots
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 mb-5">
                                    {t("automationsPage.mainTitle")}
                                </h2>

                                <div className="mb-10 w-full overflow-hidden">
                                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                                        <Image
                                            src="/images/portfolio/ainsiderbot.png"
                                            alt="AI Customer Support Agents"
                                            fill
                                            className="object-contain object-center rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="blog-details">
                                    <div className="flex flex-col gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">
                                                {t("automationsPage.problemTitle")}:
                                            </h4>
                                            <p>{t("automationsPage.problemText")}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">
                                                {t("automationsPage.solutionTitle")}:
                                            </h4>
                                            <p>{t("automationsPage.solutionText")}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">
                                                {t("automationsPage.effectTitle")}:
                                            </h4>
                                            <p>{t("automationsPage.effectText")}</p>
                                        </div>
                                    </div>
                                </div>

                                <SharePost />
                            </div>
                        </div>
                    </div>

                    <div className="mt-20">
                        <h2 className="text-2xl font-bold mb-10">
                            {t("automationsPage.otherProjectsTitle")}
                        </h2>

                        <div className="flex flex-col gap-8">
                            {automationsPortfolioItems.map((project, key) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: key * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative flex flex-col md:flex-row gap-6 lg:gap-8 bg-white dark:bg-blacksection rounded-2xl p-6 shadow-solid-8"
                                >
                                    <Link
                                        href={project.urlLink}
                                        target="_blank"
                                        className="block relative w-full md:w-5/12 lg:w-1/3 aspect-[16/10]"
                                    >
                                        <Image
                                            src={project.mainImage}
                                            alt={project.title}
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </Link>

                                    <div className="flex flex-col flex-1 justify-center">
                                        <h3 className="font-bold text-xl mb-3">
                                            <Link href={project.urlLink} target="_blank">
                                                {project.title}
                                            </Link>
                                        </h3>

                                        <p className="text-sm mb-5">{project.metadata}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags?.map((tag, i) => (
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
