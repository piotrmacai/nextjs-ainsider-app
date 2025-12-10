"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


// --- Types & Data ---
type SectionId = "overview" | "features" | "integration" | "examples" | "faq";

interface UseCaseProps {
    // We can expand this later to make it fully dynamic
    title?: string;
    subtitle?: string;
}

const SECTIONS = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Key Features" },
    { id: "examples", label: "Use Cases" },
    { id: "integration", label: "Integration" },
    { id: "faq", label: "FAQ" },
];

const ProductArchiDesigner: React.FC<UseCaseProps> = ({
    title,
    subtitle
}) => {
    const [activeSection, setActiveSection] = useState<SectionId>("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { t } = useTranslation();

    const displayTitle = title || t('archidesigner.hero.title');
    const displaySubtitle = subtitle || t('archidesigner.hero.subtitle');


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
    }, []);

    return (
        <div className="relative min-h-screen bg-white dark:bg-blacksection text-black dark:text-white font-sans selection:bg-purple-500/30 sm:mt-12 mt-24">

            {/* --- BACKGROUND EFFECTS --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 h-full w-full 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] 
          bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                />
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-900/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-900/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-30" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:py-20 max-w-7xl sm:mt-8 mt-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* --- SIDEBAR (Desktop) --- */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md">
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{t('archidesigner.sidebar.onThisPage')}</h3>
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
                                            {t(`archidesigner.navigation.${section.id}`)}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            {/* Sidebar CTA */}
                            {/* <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white shadow-xl">
                                <h4 className="font-bold text-lg mb-2">{t('archidesigner.sidebar.tryForFree.title')}</h4>
                                <p className="text-white/80 text-sm mb-4">{t('archidesigner.sidebar.tryForFree.desc')}</p>
                                <Link href="/contact" className="block w-full py-2 px-4 bg-white text-indigo-600 rounded-lg text-center text-sm font-bold hover:bg-gray-100 transition-colors">
                                    {t('archidesigner.sidebar.tryForFree.button')}
                                </Link>
                            </div> */}
                        </div>
                    </aside>

                    {/* --- MAIN CONTENT --- */}
                    <main className="flex-1 min-w-0">

                        {/* Mobile Header (Menu Toggle) */}
                        <div className="lg:hidden flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
                            <span className="font-serif italic text-xl">{t('archidesigner.mobile.app')}</span>
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
                                            {t(`archidesigner.navigation.${section.id}`)}
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
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                                    {t('archidesigner.hero.badge')}
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                                    {displayTitle}
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
                                    {displaySubtitle}
                                </p>

                                {/* Hero Visual */}
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-gray-900 group">
                                    <iframe
                                        src="https://player.vimeo.com/video/1143852902?title=0&byline=0&portrait=0"
                                        className="absolute inset-0 w-full h-full"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
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
                                <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-sm">01</span>
                                {t('archidesigner.features.title')}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {(t('archidesigner.features.list', { returnObjects: true }) as any[]).map((feature, i) => (
                                    <div key={i} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-indigo-500/50 transition-colors shadow-lg shadow-gray-200/50 dark:shadow-none">
                                        <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
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

                        {/* IMPLEMENTATION EXAMPLES SECTION */}
                        <section id="examples" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white text-sm">02</span>
                                {t('archidesigner.usecases.title')}
                            </h2>

                            <div className="grid gap-6">
                                {/* Example 1 */}
                                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-full md:w-1/3 shrink-0">
                                            <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                                                <span className="font-bold text-lg">{t('archidesigner.usecases.realestate.tag')}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                                {t('archidesigner.usecases.realestate.title')}
                                                <span className="px-2 py-1 rounded text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">{t('archidesigner.usecases.realestate.badge')}</span>
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                                {t('archidesigner.usecases.realestate.desc')}
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                {(t('archidesigner.usecases.realestate.benefits', { returnObjects: true }) as string[]).map((benefit, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                        <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Example 2 */}
                                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-full md:w-1/3 shrink-0">
                                            <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg">
                                                <span className="font-bold text-lg">{t('archidesigner.usecases.interior.tag')}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                                {t('archidesigner.usecases.interior.title')}
                                                <span className="px-2 py-1 rounded text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">{t('archidesigner.usecases.interior.badge')}</span>
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                                {t('archidesigner.usecases.interior.desc')}
                                            </p>
                                            <ul className="space-y-2 mb-6">
                                                {(t('archidesigner.usecases.interior.benefits', { returnObjects: true }) as string[]).map((benefit, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                        <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* INTEGRATION SECTION */}
                        <section id="integration" className="mb-20 scroll-mt-24">
                            <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/5">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white text-sm">03</span>
                                    {t('archidesigner.integration.title')}
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                                    {t('archidesigner.integration.desc')}
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    {(t('archidesigner.integration.tools', { returnObjects: true }) as string[]).map(tech => (
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
                                        {/* <span className="ml-2 text-xs">render_pipeline.py</span> */}
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-gray-500">{t('archidesigner.integration.code.step1')}</p>
                                        <p className="text-gray-300">{t('archidesigner.integration.code.step2')}</p>
                                        <p className="text-gray-300">{t('archidesigner.integration.code.step3')}</p>
                                        <p className="text-green-400">{t('archidesigner.integration.code.step4')}</p>

                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ SECTION */}
                        <section id="faq" className="mb-20 scroll-mt-24">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-sm">04</span>
                                {t('archidesigner.faq.title')}
                            </h2>
                            <div className="space-y-4">
                                {(t('archidesigner.faq.items', { returnObjects: true }) as any[]).map((faq, i) => (
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
                        <section className="mb-20">
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 md:p-12 text-center text-white shadow-2xl">
                                {/* Decorative elements */}
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/20 to-transparent blur-3xl transform rotate-12" />
                                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-black/20 to-transparent blur-3xl transform -rotate-12" />
                                </div>

                                <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
                                    <h2 className="text-3xl text-gray-600 dark:text-gray-400 md:text-4xl font-bold mb-4">                                        {t('archidesigner.cta.title')}
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                                        {t('archidesigner.cta.subtitle')}
                                    </p>
                                    <Link href="https://ainsider.notion.site/2c5b65ddefcf81c19b15c407f814e8c5?pvs=105" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">

                                        {t('archidesigner.cta.button')}
                                        {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg> */}
                                    </Link>
                                </div>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProductArchiDesigner;




// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

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

// const ProductArchiDesigner: React.FC<UseCaseProps> = ({
//     title = "AI Architecture Visualization",
//     subtitle = "Transform sketches and floor plans into photorealistic 3D renders in seconds. The ultimate tool for architects, designers, and real estate agents."
// }) => {
//     const [activeSection, setActiveSection] = useState<SectionId>("overview");
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
//         <div className="relative min-h-screen bg-white dark:bg-blacksection text-black dark:text-white font-sans selection:bg-purple-500/30">

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

//             <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:py-20 max-w-7xl">
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

//                     {/* --- SIDEBAR (Desktop) --- */}
//                     <aside className="hidden lg:block w-64 shrink-0">
//                         <div className="sticky top-24 space-y-8">
//                             <div className="p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md">
//                                 <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">On this page</h3>
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
//                                             {section.label}
//                                         </button>
//                                     ))}
//                                 </nav>
//                             </div>

//                             {/* Sidebar CTA */}
//                             <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 text-white shadow-xl">
//                                 <h4 className="font-bold text-lg mb-2">Try for Free</h4>
//                                 <p className="text-white/80 text-sm mb-4">Generate 5 free high-res renders with your own models.</p>
//                                 <Link href="/contact" className="block w-full py-2 px-4 bg-white text-indigo-600 rounded-lg text-center text-sm font-bold hover:bg-gray-100 transition-colors">
//                                     Start Rendering
//                                 </Link>
//                             </div>
//                         </div>
//                     </aside>

//                     {/* --- MAIN CONTENT --- */}
//                     <main className="flex-1 min-w-0">

//                         {/* Mobile Header (Menu Toggle) */}
//                         <div className="lg:hidden flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
//                             <span className="font-serif italic text-xl">App</span>
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
//                                             {section.label}
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
//                                     AI App
//                                 </div>
//                                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
//                                     {title}
//                                 </h1>
//                                 <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
//                                     {subtitle}
//                                 </p>

//                                 {/* Hero Visual */}
//                                 <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-gray-900 group">
//                                     {/* Placeholder for actual image/video */}
//                                     <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
//                                         <span className="text-gray-400 dark:text-gray-500 font-medium flex flex-col items-center gap-4">
//                                             <svg className="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//                                             3D Visualization Dashboard
//                                         </span>
//                                     </div>

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
//                                 Key Features
//                             </h2>
//                             <div className="grid md:grid-cols-2 gap-6">
//                                 {[
//                                     {
//                                         title: "Instant Rendering",
//                                         desc: "Turn SketchUp, Revit, or Rhino models into 4K photorealistic renders in under 30 seconds using our proprietary diffusion models.",
//                                         icon: "M13 10V3L4 14h7v7l9-11h-7z"
//                                     },
//                                     {
//                                         title: "2D to 3D Conversion",
//                                         desc: "Upload a simple PDF or JPG floor plan and get a fully extruded, textured, and lit 3D model automatically.",
//                                         icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                                     },
//                                     {
//                                         title: "Virtual Staging",
//                                         desc: "Empty room? Digitally furnish interiors with thousands of styles. Select 'Modern Minimalist', 'Scandi', or 'Industrial' and see the magic happen.",
//                                         icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
//                                     },
//                                     {
//                                         title: "Style Transfer",
//                                         desc: "Take an existing photo of a building and completely reimagine the facade style while keeping the structural geometry intact.",
//                                         icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
//                                     }
//                                 ].map((feature, i) => (
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

//                         {/* IMPLEMENTATION EXAMPLES SECTION */}
//                         <section id="examples" className="mb-20 scroll-mt-24">
//                             <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
//                                 <span className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center text-white text-sm">02</span>
//                                 Use Cases
//                             </h2>

//                             <div className="grid gap-6">
//                                 {/* Example 1 */}
//                                 <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10">
//                                     <div className="flex flex-col md:flex-row gap-8 items-start">
//                                         <div className="w-full md:w-1/3 shrink-0">
//                                             <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
//                                                 <span className="font-bold text-lg">Sales & Marketing</span>
//                                             </div>
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
//                                                 Real Estate Listings
//                                                 <span className="px-2 py-1 rounded text-xs bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">Popular</span>
//                                             </h3>
//                                             <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
//                                                 Sell off-plan properties 5x faster. Provide potential buyers with immersive 3D walkthroughs of unbuilt properties directly in their browser. No plugins required.
//                                             </p>
//                                             <ul className="space-y-2 mb-6">
//                                                 <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                                     <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
//                                                     Boost engagement by 300%
//                                                 </li>
//                                                 <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                                     <svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
//                                                     Mobile-friendly VR tours
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Example 2 */}
//                                 <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-8 transition-all hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10">
//                                     <div className="flex flex-col md:flex-row gap-8 items-start">
//                                         <div className="w-full md:w-1/3 shrink-0">
//                                             <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg">
//                                                 <span className="font-bold text-lg">Interior Design</span>
//                                             </div>
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
//                                                 Client Presentations
//                                                 <span className="px-2 py-1 rounded text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">Essential</span>
//                                             </h3>
//                                             <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
//                                                 Show clients multiple design variations in real-time meetings. Instantly swap flooring, wall colors, and furniture styles based on their feedback.
//                                             </p>
//                                             <ul className="space-y-2 mb-6">
//                                                 <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                                     <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
//                                                     Reduce revision cycles
//                                                 </li>
//                                                 <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                                     <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
//                                                     Export hi-res moodboards
//                                                 </li>
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
//                                     Workflow Integration
//                                 </h2>
//                                 <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
//                                     Seamlessly fits into your existing design pipeline. Compatible with the industry standard tools you already use every day.
//                                 </p>

//                                 <div className="flex flex-wrap gap-4 mb-8">
//                                     {["SketchUp", "Revit", "Rhino", "Blender", "AutoCAD"].map(tech => (
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
//                                         <span className="ml-2 text-xs">render_pipeline.py</span>
//                                     </div>
//                                     <div className="space-y-2">
//                                         <p className="text-gray-500"># Example: Converting SketchUp model to Photorealistic Render</p>
//                                         <p><span className="text-pink-500">import</span> archidesigner_api as ad</p>
//                                         <p><span className="text-blue-400">model_path</span> = <span className="text-green-400">"./projects/villa_v2.skp"</span></p>
//                                         <p>render = ad.generate(<span className="text-blue-400">model</span>=model_path, <span className="text-blue-400">style</span>=<span className="text-green-400">"modern_minimalist"</span>)</p>
//                                         <p className="text-green-400">✓ Render generated successfully (14.2s)</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>

//                         {/* FAQ SECTION */}
//                         <section id="faq" className="mb-20 scroll-mt-24">
//                             <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
//                                 <span className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-sm">04</span>
//                                 Frequently Asked Questions
//                             </h2>
//                             <div className="space-y-4">
//                                 {[
//                                     {
//                                         q: "Which file formats do you support?",
//                                         a: "We currently support direct imports for SketchUp (.skp), Revit (.rvt), Rhino (.3dm), and generic formats like .FBX and .OBJ."
//                                     },
//                                     {
//                                         q: "Can I use the renders for commercial purposes?",
//                                         a: "Yes! You own full commercial rights to every image you generate on our platform. Use them for client presentations, marketing materials, or billboards."
//                                     },
//                                     {
//                                         q: "Do I need a powerful computer?",
//                                         a: "Not at all. Everything runs on our cloud GPUs. You can generate 4K renders even from a tablet or a laptop with no graphics card."
//                                     }
//                                 ].map((faq, i) => (
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

//                     </main>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductArchiDesigner;
