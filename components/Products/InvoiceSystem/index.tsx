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

const InvoiceSystem: React.FC<UseCaseProps> = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState<SectionId>("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const SECTIONS = [
        { id: "overview", label: t('invoiceai.navigation.overview') },
        { id: "features", label: t('invoiceai.navigation.features') },
        { id: "examples", label: t('invoiceai.navigation.examples') },
        { id: "integration", label: t('invoiceai.navigation.integration') },
        { id: "faq", label: t('invoiceai.navigation.faq') },
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
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t('invoiceai.sidebar.onThisPage')}</h3>
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
                                <h4 className="font-bold text-lg mb-2">{t('invoiceai.sidebar.tryForFree.title')}</h4>
                                <p className="text-white/80 text-sm mb-4">{t('invoiceai.sidebar.tryForFree.desc')}</p>
                                <Link href="/contact" className="block w-full py-2 px-4 bg-white text-purple-600 rounded-lg text-center text-sm font-bold hover:bg-gray-100 transition-colors">
                                    {t('invoiceai.sidebar.tryForFree.button')}
                                </Link>
                            </div> */}
                        </div>
                    </aside>

                    {/* --- MAIN CONTENT --- */}
                    <main className="flex-1 min-w-0">

                        {/* Mobile Header (Menu Toggle) */}
                        <div className="lg:hidden flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <span className="font-serif italic text-xl">{t('invoiceai.mobile.app')}</span>
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
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                            >
                                <div className="flex flex-col items-start relative z-10">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-8 border border-purple-100 dark:border-purple-500/20"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                        {t('invoiceai.hero.badge')}
                                    </motion.div>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-8 tracking-tight leading-[1.1]">
                                        <span className="bg-clip-text text-gray-600 dark:text-gray-300">
                                            {t('invoiceai.hero.title')}
                                        </span>
                                    </h1>

                                    <div className="h-1 w-32 bg-black dark:bg-white rounded-full mb-4" />

                                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-lg">
                                        {t('invoiceai.hero.subtitle')}
                                    </p>

                                    <div className="flex gap-4">
                                        <Link
                                            href="#features"
                                            onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
                                            className="px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-sm hover:transform hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/20"
                                        >
                                            Explore Features
                                        </Link>
                                    </div>
                                </div>

                                {/* Hero Visual */}
                                <div className="relative group perspective-1000 self-end">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-gray-900"
                                    >
                                        <Image
                                            src="/images/portfolio/invoice-interface.jpg"
                                            alt="AI Product Service"
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />

                                        {/* Overlay Elements (Fake UI) */}
                                        <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute bottom-6 left-6 right-6 bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-xl"
                                        >
                                            <div className="flex items-center flex-row gap-3">
                                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-gray-900 dark:text-white">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                        Generation: Status Complete
                                                    </p></div>

                                            </div>
                                        </motion.div>

                                        {/* Additional Floating UI Element */}
                                        {/* <motion.div
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute bottom-6 left-6 right-6 bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-xl"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-gray-900 dark:text-white">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">Status</div>
                                                    <div className="text-sm font-bold text-gray-900 dark:text-white">Analysis Complete</div>
                                                </div>
                                            </div>
                                        </motion.div> */}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </section>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-20"></div>

                        {/* FEATURES SECTION */}
                        <section id="features" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-sm">01</span>
                                {t('invoiceai.features.title')}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {(t('invoiceai.features.list', { returnObjects: true }) as FeatureItem[]).map((feature, i) => (
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
                                {t('invoiceai.usecases.title')}
                            </h2>

                            <div className="grid gap-6">
                                {/* Example 1: Real Estate */}
                                {(() => {
                                    const useCase = t('invoiceai.usecases.realestate', { returnObjects: true }) as UseCaseItem;
                                    return (
                                        <div className="group relative overflow-hidden rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 md:p-10 transition-all hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/10">
                                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                                                <div className="flex flex-col gap-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                                        </div>
                                                        <span className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">{useCase.tag}</span>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
                                                            {/* {useCase.badge && (
                                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                                                                    {useCase.badge}
                                                                </span>
                                                            )} */}
                                                        </div>
                                                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                                            {useCase.desc}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="bg-white dark:bg-black/20 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                        Key Benefits
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {useCase.benefits.map((benefit, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                                <div className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                                                    <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                                </div>
                                                                <span className="text-sm md:text-base">{benefit}</span>
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
                                    const useCase = t('invoiceai.usecases.interior', { returnObjects: true }) as UseCaseItem;
                                    return (
                                        <div className="group relative overflow-hidden rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 md:p-10 transition-all hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10">
                                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                                                <div className="flex flex-col gap-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                                        </div>
                                                        <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">{useCase.tag}</span>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{useCase.title}</h3>
                                                            {/* {useCase.badge && (
                                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                                                    {useCase.badge}
                                                                </span>
                                                            )} */}
                                                        </div>
                                                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                                            {useCase.desc}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="bg-white dark:bg-black/20 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-white/5 shadow-sm">
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                                        Key Benefits
                                                    </h4>
                                                    <ul className="space-y-4">
                                                        {useCase.benefits.map((benefit, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                                <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                                                    <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                                </div>
                                                                <span className="text-sm md:text-base">{benefit}</span>
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
                                    {t('invoiceai.integration.title')}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                                    {t('invoiceai.integration.desc')}
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    {(t('invoiceai.integration.tools', { returnObjects: true }) as string[]).map(tech => (
                                        <div key={tech} className="px-4 py-2 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-700 text-sm font-semibold">
                                            {tech}
                                        </div>
                                    ))}
                                </div>

                                <div className="relative rounded-xl overflow-hidden bg-[#fff] dark:bg-[#1e1e1e] p-4 font-mono text-sm text-gray-600 dark:text-gray-300 shadow-inner">
                                    <div className="flex items-center gap-2 mb-4 opacity-50">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-2 text-xs text-gray-600 dark:text-gray-300">integration.py</span>
                                    </div>
                                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                        <p className="text-gray-600 dark:text-gray-300">{t('invoiceai.integration.code.step1')}</p>
                                        <p className="text-gray-600 dark:text-gray-300">{t('invoiceai.integration.code.step2')}</p>
                                        <p className="text-gray-600 dark:text-gray-300">{t('invoiceai.integration.code.step3')}</p>
                                        <p className="text-gray-600 dark:text-gray-300">{t('invoiceai.integration.code.step4')}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ SECTION */}
                        <section id="faq" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-sm">04</span>
                                {t('invoiceai.faq.title')}
                            </h2>
                            <div className="space-y-4">
                                {(t('invoiceai.faq.items', { returnObjects: true }) as FaqItem[]).map((faq, i) => (
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
                                    {t('invoiceai.cta.title')}</h2>
                                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                    {t('invoiceai.cta.subtitle')}
                                </p>
                                <Link href="/contact" className="inline-block px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">

                                    {t('invoiceai.cta.button')}
                                </Link>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default InvoiceSystem;





// "use client";
// import React, { useState, useEffect } from "react";
// import ImageSlider from "./ImageSlider";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useTranslation } from 'react-i18next';


// // --- Types & Data ---
// type SectionId = "overview" | "features" | "integration" | "examples" | "faq";

// interface UseCaseProps {
//     // We can expand this later to make it fully dynamic
//     title?: string;
//     subtitle?: string;
// }

// const SECTIONS = [
//     { id: "overview", label: "Overview" },
//     { id: "features", label: "Key Features" },
//     { id: "examples", label: "Use Cases" },
//     { id: "integration", label: "Integration" },
//     { id: "faq", label: "FAQ" },
// ];

// const InvoiceSystem: React.FC<UseCaseProps> = ({
//     title,
//     subtitle
// }) => {
//     const [activeSection, setActiveSection] = useState<SectionId>("overview");
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const { t } = useTranslation();

//     const displayTitle = title || t('invoiceai.hero.title');
//     const displaySubtitle = subtitle || t('invoiceai.hero.subtitle');


//     // Smooth scroll handler
//     const scrollToSection = (id: SectionId) => {
//         setActiveSection(id);
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }
//         setIsMobileMenuOpen(false);
//     };

//     // Scroll spy to update active section
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY + 200; // Offset

//             for (const section of SECTIONS) {
//                 const element = document.getElementById(section.id);
//                 if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
//                     setActiveSection(section.id as SectionId);
//                 }
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div className="relative min-h-screen bg-white dark:bg-blacksection text-black dark:text-white font-sans selection:bg-purple-500/30 sm:mt-12 mt-24">

//             {/* --- BACKGROUND EFFECTS --- */}
//             <div className="fixed inset-0 z-0 pointer-events-none">
//                 <div className="absolute inset-0 h-full w-full
//           bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
//           dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
//           bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
//                 />
//                 <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30" />
//                 <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-900/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30" />
//             </div>

//             <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:py-20 max-w-7xl sm:mt-8 mt-16">
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

//                     {/* --- SIDEBAR (Desktop) --- */}
//                     <aside className="hidden lg:block w-64 shrink-0">
//                         <div className="sticky top-24 space-y-8">
//                             <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md">
//                                 <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t('invoiceai.sidebar.onThisPage')}</h3>
//                                 <nav className="flex flex-col space-y-1">
//                                     {SECTIONS.map((section) => (
//                                         <button
//                                             key={section.id}
//                                             onClick={() => scrollToSection(section.id as SectionId)}
//                                             className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === section.id
//                                                 ? "bg-black/5 dark:bg-white/10 text-black dark:text-white translate-x-1"
//                                                 : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
//                                                 }`}
//                                         >
//                                             {t(`invoiceai.navigation.${section.id}`)}
//                                         </button>
//                                     ))}
//                                 </nav>
//                             </div>

//                             {/* Sidebar CTA */}
//                             {/* <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white shadow-xl">
//                                 <h4 className="font-bold text-lg mb-2">{t('invoiceai.sidebar.tryForFree.title')}</h4>
//                                 <p className="text-white/80 text-sm mb-4">{t('invoiceai.sidebar.tryForFree.desc')}</p>
//                                 <Link href="/contact" className="block w-full py-2 px-4 bg-white text-indigo-600 rounded-lg text-center text-sm font-bold hover:bg-gray-100 transition-colors">
//                                     {t('invoiceai.sidebar.tryForFree.button')}
//                                 </Link>
//                             </div> */}
//                         </div>
//                     </aside>

//                     {/* --- MAIN CONTENT --- */}
//                     <main className="flex-1 min-w-0">

//                         {/* Mobile Header (Menu Toggle) */}
//                         <div className="lg:hidden flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
//                             <span className="font-serif italic text-xl">{t('invoiceai.mobile.app')}</span>
//                             <button
//                                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                                 className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
//                             >
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
//                             </button>
//                         </div>

//                         {/* Mobile Menu Dropdown */}
//                         {isMobileMenuOpen && (
//                             <div className="lg:hidden mb-8 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/50">
//                                 <nav className="flex flex-col space-y-2">
//                                     {SECTIONS.map((section) => (
//                                         <button
//                                             key={section.id}
//                                             onClick={() => scrollToSection(section.id as SectionId)}
//                                             className={`text-left px-3 py-2 rounded-lg font-medium text-sm ${activeSection === section.id ? 'bg-white dark:bg-white/10 shadow-sm' : ''}`}
//                                         >
//                                             {t(`invoiceai.navigation.${section.id}`)}
//                                         </button>
//                                     ))}
//                                 </nav>
//                             </div>
//                         )}

//                         {/* HERO SECTION */}
//                         <section id="overview" className="mb-20 pt-4 scroll-mt-24">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6 }}
//                             >
//                                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
//                                     {t('invoiceai.hero.badge')}
//                                 </div>
//                                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
//                                     {displayTitle}
//                                 </h1>
//                                 <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
//                                     {displaySubtitle}
//                                 </p>

//                                 {/* Hero Visual */}
//                                 <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-gray-900 group">
//                                     <iframe
//                                         src="https://player.vimeo.com/video/1143852902?title=0&byline=0&portrait=0"
//                                         className="absolute inset-0 w-full h-full"
//                                         allow="autoplay; fullscreen; picture-in-picture"
//                                         allowFullScreen
//                                     />

//                                     {/* Overlay Elements (Fake UI) */}
//                                     <div className="absolute top-4 left-4 right-4 h-8 bg-white dark:bg-black/50 rounded-lg backdrop-blur-sm flex items-center px-3 gap-2">
//                                         <div className="w-2 h-2 rounded-full bg-red-400" />
//                                         <div className="w-2 h-2 rounded-full bg-yellow-400" />
//                                         <div className="w-2 h-2 rounded-full bg-green-400" />
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </section>

//                         <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-20"></div>

//                         {/* FEATURES SECTION */}
//                         <section id="features" className="mb-20 scroll-mt-24">
//                             <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
//                                 <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-sm">01</span>
//                                 {t('invoiceai.features.title')}
//                             </h2>
//                             <div className="grid md:grid-cols-2 gap-6">
//                                 {(t('invoiceai.features.list', { returnObjects: true }) as any[]).map((feature, i) => (
//                                     <div key={i} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-indigo-500/50 transition-colors shadow-lg shadow-gray-200/50 dark:shadow-none">
//                                         <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
//                                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
//                                         </div>
//                                         <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
//                                         <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//                                             {feature.desc}
//                                         </p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>

//                         {/* <section className="mb-20">
//                             <h2 className="text-2xl font-bold mb-6 text-center text-gray-500 dark:text-gray-400">Trusted by modern teams</h2>
//                             <ImageSlider />
//                         </section> */}

//                         {/* IMPLEMENTATION EXAMPLES SECTION */}
//                         <section id="examples" className="mb-20 scroll-mt-24">
//                             <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
//                                 <span className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white text-sm">02</span>
//                                 {t('invoiceai.usecases.title')}
//                             </h2>

//                             <div className="grid gap-6">
//                                 {/* Example 1 */}
//                                 <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">
//                                     <div className="flex flex-col md:flex-row gap-8 items-start">
//                                         <div className="w-full md:w-1/3 shrink-0">
//                                             <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
//                                                 <span className="font-bold text-lg">{t('invoiceai.usecases.realestate.tag')}</span>
//                                             </div>
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
//                                                 {t('invoiceai.usecases.realestate.title')}
//                                                 <span className="px-2 py-1 rounded text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">{t('invoiceai.usecases.realestate.badge')}</span>
//                                             </h3>
//                                             <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
//                                                 {t('invoiceai.usecases.realestate.desc')}
//                                             </p>
//                                             <ul className="space-y-2 mb-6">
//                                                 {(t('invoiceai.usecases.realestate.benefits', { returnObjects: true }) as string[]).map((benefit, i) => (
//                                                     <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                                         <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
//                                                         {benefit}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Example 2 */}
//                                 <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10">
//                                     <div className="flex flex-col md:flex-row gap-8 items-start">
//                                         <div className="w-full md:w-1/3 shrink-0">
//                                             <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg">
//                                                 <span className="font-bold text-lg">{t('invoiceai.usecases.interior.tag')}</span>
//                                             </div>
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
//                                                 {t('invoiceai.usecases.interior.title')}
//                                                 <span className="px-2 py-1 rounded text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">{t('invoiceai.usecases.interior.badge')}</span>
//                                             </h3>
//                                             <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
//                                                 {t('invoiceai.usecases.interior.desc')}
//                                             </p>
//                                             <ul className="space-y-2 mb-6">
//                                                 {(t('invoiceai.usecases.interior.benefits', { returnObjects: true }) as string[]).map((benefit, i) => (
//                                                     <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                                         <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
//                                                         {benefit}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>

//                         {/* INTEGRATION SECTION */}
//                         <section id="integration" className="mb-20 scroll-mt-24">
//                             <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5">
//                                 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
//                                     <span className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-sm">03</span>
//                                     {t('invoiceai.integration.title')}
//                                 </h2>
//                                 <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
//                                     {t('invoiceai.integration.desc')}
//                                 </p>

//                                 <div className="flex flex-wrap gap-4 mb-8">
//                                     {(t('invoiceai.integration.tools', { returnObjects: true }) as string[]).map(tech => (
//                                         <div key={tech} className="px-4 py-2 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-gray-700 text-sm font-semibold">
//                                             {tech}
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="relative rounded-xl overflow-hidden bg-[#1e1e1e] p-4 font-mono text-sm text-gray-300 shadow-inner">
//                                     <div className="flex items-center gap-2 mb-4 opacity-50">
//                                         <div className="w-3 h-3 rounded-full bg-red-500" />
//                                         <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                                         <div className="w-3 h-3 rounded-full bg-green-500" />
//                                         {/* <span className="ml-2 text-xs">render_pipeline.py</span> */}
//                                     </div>
//                                     <div className="space-y-2">
//                                         <p className="text-gray-500">{t('invoiceai.integration.code.step1')}</p>
//                                         <p className="text-gray-300">{t('invoiceai.integration.code.step2')}</p>
//                                         <p className="text-gray-300">{t('invoiceai.integration.code.step3')}</p>
//                                         <p className="text-green-400">{t('invoiceai.integration.code.step4')}</p>

//                                     </div>
//                                 </div>
//                             </div>
//                         </section>

//                         {/* FAQ SECTION */}
//                         <section id="faq" className="mb-20 scroll-mt-24">
//                             <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
//                                 <span className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-sm">04</span>
//                                 {t('invoiceai.faq.title')}
//                             </h2>
//                             <div className="space-y-4">
//                                 {(t('invoiceai.faq.items', { returnObjects: true }) as any[]).map((faq, i) => (
//                                     <details key={i} className="group p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 open:ring-1 open:ring-purple-500/20">
//                                         <summary className="font-bold text-lg cursor-pointer flex items-center justify-between list-none">
//                                             {faq.q}
//                                             <span className="transition-transform group-open:rotate-180">
//                                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//                                             </span>
//                                         </summary>
//                                         <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
//                                             {faq.a}
//                                         </p>
//                                     </details>
//                                 ))}
//                             </div>
//                         </section>

//                         {/* CTA SECTION */}
//                         <section className="mb-20">
//                             <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 md:p-12 text-center text-white shadow-2xl">
//                                 {/* Decorative elements */}
//                                 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//                                     <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/20 to-transparent blur-3xl transform rotate-12" />
//                                     <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-black/20 to-transparent blur-3xl transform -rotate-12" />
//                                 </div>

//                                 <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
//                                     <h2 className="text-3xl text-gray-600 dark:text-gray-400 md:text-4xl font-bold mb-4">                                        {t('invoiceai.cta.title')}
//                                     </h2>
//                                     <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
//                                         {t('invoiceai.cta.subtitle')}
//                                     </p>
//                                     <Link href="/contact" className="inline-block px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">

//                                         {t('invoiceai.cta.button')}
//                                         {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg> */}
//                                     </Link>
//                                 </div>
//                             </div>
//                         </section>

//                     </main>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InvoiceSystem;




