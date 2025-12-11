"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import ImageSlider from "./ImageSlider";

// --- Types & Data ---
type SectionId = "overview" | "features" | "integration" | "examples" | "faq";

interface UseCaseProps {
    // We can expand this later to make it fully dynamic
    title?: string;
    subtitle?: string;
}

interface FeatureItem {
    title: string;
    desc: string;
    icon: string;
}

interface FaqItem {
    q: string;
    a: string;
}

interface UseCaseItem {
    tag: string;
    title: string;
    badge: string;
    desc: string;
    benefits: string[];
}

const ProductProductPhoto: React.FC<UseCaseProps> = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState<SectionId>("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const SECTIONS = [
        { id: "overview", label: t('productai.navigation.overview') },
        { id: "features", label: t('productai.navigation.features') },
        { id: "examples", label: t('productai.navigation.examples') },
        { id: "integration", label: t('productai.navigation.integration') },
        { id: "faq", label: t('productai.navigation.faq') },
    ];

    // Smooth scroll handler
    const scrollToSection = (id: SectionId) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMobileMenuOpen(false);
    };

    // Scroll spy to update active section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id as SectionId);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [SECTIONS]);

    return (
        <div className="relative min-h-screen bg-white dark:bg-blacksection text-black dark:text-white font-sans selection:bg-purple-500/30 sm:mt-12 md:mt-24">

            {/* --- BACKGROUND EFFECTS (Borrowed from AiwareHeroTwo) --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 h-full w-full 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] 
          bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-900/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:py-20 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* --- SIDEBAR (Desktop) --- */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t('productai.sidebar.onThisPage')}</h3>
                                <nav className="flex flex-col space-y-1">
                                    {SECTIONS.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id as SectionId)}
                                            className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === section.id
                                                ? "bg-black/5 dark:bg-white/10 text-black dark:text-white translate-x-1"
                                                : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                                }`}
                                        >
                                            {section.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Sidebar CTA */}
                            {/* <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl">
                                <h4 className="font-bold text-lg mb-2">{t('productai.sidebar.tryForFree.title')}</h4>
                                <p className="text-white/80 text-sm mb-4">{t('productai.sidebar.tryForFree.desc')}</p>
                                <Link href="/contact" className="block w-full py-2 px-4 bg-white text-purple-600 rounded-lg text-center text-sm font-bold hover:bg-gray-100 transition-colors">
                                    {t('productai.sidebar.tryForFree.button')}
                                </Link>
                            </div> */}
                        </div>
                    </aside>

                    {/* --- MAIN CONTENT --- */}
                    <main className="flex-1 min-w-0">

                        {/* Mobile Header (Menu Toggle) */}
                        <div className="lg:hidden flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <span className="font-serif italic text-xl">{t('productai.mobile.app')}</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </button>
                        </div>

                        {/* Mobile Menu Dropdown */}
                        {isMobileMenuOpen && (
                            <div className="lg:hidden mb-8 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/50">
                                <nav className="flex flex-col space-y-2">
                                    {SECTIONS.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id as SectionId)}
                                            className={`text-left px-3 py-2 rounded-lg font-medium text-sm ${activeSection === section.id ? 'bg-white dark:bg-white/10 shadow-sm' : ''}`}
                                        >
                                            {section.label}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        )}

                        {/* HERO SECTION */}
                        <section id="overview" className="mb-20 pt-4 scroll-mt-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-6">
                                    {t('productai.hero.badge')}
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    {t('productai.hero.title')}
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
                                    {t('productai.hero.subtitle')}
                                </p>

                                {/* Hero Visual */}
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-gray-900 group">
                                    <Image
                                        src="/images/portfolio/aiproductservice.png"
                                        alt="AI Product Service"
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Overlay Elements (Fake UI) */}
                                    <div className="absolute top-4 left-4 right-4 h-8 bg-white dark:bg-black/50 rounded-lg backdrop-blur-sm flex items-center px-3 gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                </div>
                            </motion.div>
                        </section>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-20"></div>

                        {/* FEATURES SECTION */}
                        <section id="features" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">01</span>
                                {t('productai.features.title')}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {(t('productai.features.list', { returnObjects: true }) as FeatureItem[]).map((feature, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-purple-500/50 transition-colors shadow-lg shadow-gray-200/50 dark:shadow-none">
                                        <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {feature.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mb-20">
                            <ImageSlider />
                        </section>

                        {/* IMPLEMENTATION EXAMPLES SECTION */}
                        <section id="examples" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                {t('productai.usecases.title')}
                            </h2>

                            <div className="grid gap-6">
                                {/* Example 1: Real Estate */}
                                {(() => {
                                    const useCase = t('productai.usecases.realestate', { returnObjects: true }) as UseCaseItem;
                                    return (
                                        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10">
                                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                                <div className="w-full md:w-1/3 shrink-0">
                                                    <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                                                        <span className="font-bold text-lg">{useCase.tag}</span>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                                        {useCase.title}
                                                        <span className="px-2 py-1 rounded text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">{useCase.badge}</span>
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                                        {useCase.desc}
                                                    </p>
                                                    <ul className="space-y-2 mb-6">
                                                        {useCase.benefits.map((benefit, idx) => (
                                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}

                                {/* Example 2: Interior */}
                                {(() => {
                                    const useCase = t('productai.usecases.interior', { returnObjects: true }) as UseCaseItem;
                                    return (
                                        <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10">
                                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                                <div className="w-full md:w-1/3 shrink-0">
                                                    <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                                                        <span className="font-bold text-lg">{useCase.tag}</span>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                                        {useCase.title}
                                                        <span className="px-2 py-1 rounded text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">{useCase.badge}</span>
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                                        {useCase.desc}
                                                    </p>
                                                    <ul className="space-y-2 mb-6">
                                                        {useCase.benefits.map((benefit, idx) => (
                                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                                {benefit}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </div>
                        </section>

                        {/* INTEGRATION SECTION */}
                        <section id="integration" className="mb-20 scroll-mt-24">
                            <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-sm">03</span>
                                    {t('productai.integration.title')}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                                    {t('productai.integration.desc')}
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    {(t('productai.integration.tools', { returnObjects: true }) as string[]).map(tech => (
                                        <div key={tech} className="px-4 py-2 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-700 text-sm font-semibold">
                                            {tech}
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-xl overflow-hidden bg-[#1e1e1e] p-4 font-mono text-sm text-gray-300 shadow-inner">
                                    <div className="flex items-center gap-2 mb-4 opacity-50">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-2 text-xs">integration.py</span>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-gray-500">{t('productai.integration.code.step1')}</p>
                                        <p className="text-gray-300">{t('productai.integration.code.step2')}</p>
                                        <p className="text-gray-300">{t('productai.integration.code.step3')}</p>
                                        <p className="text-green-400">{t('productai.integration.code.step4')}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ SECTION */}
                        <section id="faq" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-sm">04</span>
                                {t('productai.faq.title')}
                            </h2>
                            <div className="space-y-4">
                                {(t('productai.faq.items', { returnObjects: true }) as FaqItem[]).map((faq, i) => (
                                    <details key={i} className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 open:ring-1 open:ring-purple-500/20">
                                        <summary className="font-bold text-lg cursor-pointer flex items-center justify-between list-none">
                                            {faq.q}
                                            <span className="transition-transform group-open:rotate-180">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </span>
                                        </summary>
                                        <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        {/* CTA SECTION */}
                        <section id="cta" className="mb-20 scroll-mt-24">
                            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-8 md:p-12 text-center text-gray-600 dark:text-gray-400 shadow-2xl">
                                <h2 className="text-3xl text-gray-600 dark:text-gray-400 md:text-4xl font-bold mb-4">
                                    {t('productai.cta.title')}</h2>
                                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                    {t('productai.cta.subtitle')}
                                </p>
                                <Link href="/contact" className="inline-block px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">

                                    {t('productai.cta.button')}
                                </Link>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProductProductPhoto;
