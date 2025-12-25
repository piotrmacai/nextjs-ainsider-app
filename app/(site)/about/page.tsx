"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

const AboutPage: React.FC = () => {
    const { t } = useTranslation();

    const projectKeys = [
        "ainsider",
        "store",
        "github",
        "twitter",
        "newsletter",
        "art",
    ];

    return (
        <>
            <title>{`Ainsider AI - About`}</title>

            <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <section className="about-page">
                        {/* Header */}
                        <header className="mb-10">
                            <h1 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6">
                                {t("about-page.title")}
                            </h1>

                            <div className="flex flex-wrap gap-4 text-body-color dark:text-body-color-dark mt-4">
                                <Link
                                    href="https://twitter.com/piotrmacai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <Twitter size={20} />
                                    <span className="sr-only">Twitter</span>
                                </Link>

                                <Link
                                    href="https://github.com/piotrmacai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <span className="font-bold text-lg">Git</span>
                                    <span className="sr-only">GitHub</span>
                                </Link>

                                <Link
                                    href="https://linkedin.com/in/piotrmacai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <Linkedin size={20} />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>

                                {/* <Link
                                    href="https://behance.net/macaistudio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <span className="font-bold text-lg">Be</span>
                                    <span className="sr-only">Behance</span>
                                </Link> */}
                            </div>
                        </header>

                        {/* Description */}
                        <div className="about-description mb-16 space-y-4 text-lg text-body-color dark:text-body-color-dark">
                            <p>{t("about-page.description.p1")}</p>
                            <p>{t("about-page.description.p2")}</p>
                            <p>{t("about-page.description.p3")}</p>
                        </div>

                        {/* Projects */}
                        <section className="about-projects mb-16">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-black dark:text-white mb-8">
                                {t("about-page.projects.title")}
                            </h2>

                            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projectKeys.map((key) => (
                                    <li
                                        key={key}
                                        className="group rounded-lg bg-white p-6 shadow-solid-13 transition-all hover:shadow-solid-4 dark:bg-blacksection dark:border dark:border-strokedark"
                                    >
                                        <h3 className="text-xl font-medium text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
                                            {t(`about-page.projects.items.${key}.title`)}
                                        </h3>

                                        <p className="text-base text-body-color dark:text-body-color-dark mb-5 line-clamp-3">
                                            {t(`about-page.projects.items.${key}.description`)}
                                        </p>

                                        <a
                                            href={t(`about-page.projects.items.${key}.url`)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors font-medium"
                                        >
                                            {t("about-page.projects.visit")}
                                            <svg
                                                className="w-4 h-4 ml-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Skills */}
                        <section className="about-skills">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-black dark:text-white mb-8">
                                {t("about-page.skills.title")}
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                <div>
                                    <h3 className="text-xl font-medium mb-2">
                                        {t("about-page.skills.design.title")}
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>{t("about-page.skills.design.items.0")}</li>
                                        <li>{t("about-page.skills.design.items.1")}</li>
                                        <li>{t("about-page.skills.design.items.2")}</li>
                                        <li>{t("about-page.skills.design.items.3")}</li>
                                    </ul>
                                    <p className="mt-2">
                                        {t("about-page.skills.design.cta")}{" "}
                                        <Link
                                            href="https://behance.net/macaistudio"
                                            target="_blank"
                                            className="text-primary hover:underline"
                                        >
                                            Behance
                                        </Link>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-2">
                                        {t("about-page.skills.frontend.title")}
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>{t("about-page.skills.frontend.items.0")}</li>
                                        <li>{t("about-page.skills.frontend.items.1")}</li>
                                        <li>{t("about-page.skills.frontend.items.2")}</li>
                                        <li>{t("about-page.skills.frontend.items.3")}</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-2">
                                        {t("about-page.skills.ai.title")}
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>{t("about-page.skills.ai.items.0")}</li>
                                        <li>{t("about-page.skills.ai.items.1")}</li>
                                        <li>{t("about-page.skills.ai.items.2")}</li>
                                        <li>{t("about-page.skills.ai.items.3")}</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-2">
                                        {t("about-page.skills.backend.title")}
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>{t("about-page.skills.backend.items.0")}</li>
                                        <li>{t("about-page.skills.backend.items.1")}</li>
                                        <li>{t("about-page.skills.backend.items.2")}</li>
                                        <li>{t("about-page.skills.backend.items.3")}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="h-px bg-stroke dark:bg-strokedark w-full mb-6" />

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <span className="text-lg font-medium">
                                    {t("about-page.skills.connect.label")}
                                </span>

                                <div className="flex flex-wrap gap-6">
                                    <Link href="https://twitter.com/piotrmacai" target="_blank">
                                        <Twitter size={20} />
                                    </Link>
                                    <Link href="https://github.com/piotrmacai" target="_blank">
                                        <span className="font-bold text-lg">Git</span>
                                    </Link>
                                    <Link href="https://linkedin.com/in/piotrmacai" target="_blank">
                                        <Linkedin size={20} />
                                    </Link>
                                    <Link href="https://behance.net/macaistudio" target="_blank">
                                        <span className="font-bold text-lg">Be</span>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
