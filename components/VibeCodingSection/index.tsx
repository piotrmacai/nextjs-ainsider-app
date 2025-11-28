'use client';

import React from 'react';
import Link from 'next/link';
// Import only the necessary icons for Vibe Coding services
import { Code, LayoutGrid, Zap, Twitter, Linkedin, Github, Globe, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';


const VibeCodingSection = () => {
    const { t } = useTranslation();

    // Mapping new Vibe-Coding services
    const links = [
        {
            title: t('vibecodingsection.services.development.title') || "Aplikacje Webowe",
            description: t('vibecodingsection.services.development.description') || "Szybkie, nowoczesne i skalowalne aplikacje dla Twojego biznesu.",
            url: t('vibecodingsection.services.development.url') || "https://ainsider.co/uslugi/aplikacje-webowe",
            icon: <LayoutGrid className="w-6 h-6" />,
            tag: null,
            className: "col-span-1 sm:col-span-2" // Full width in the grid
        },
        {
            title: t('vibecodingsection.services.design_ux.title') || "Aplikacje Mobilne",
            description: t('vibecodingsection.services.design_ux.description') || "Natychmiastowe doświadczenie użytkownika na iOS i Android.",
            url: t('vibecodingsection.services.design_ux.url') || "https://ainsider.co/uslugi/aplikacje-mobilne",
            icon: <Zap className="w-6 h-6" />,
            tag: "NOWOŚĆ",
            className: "col-span-1"
        },
        {
            title: t('vibecodingsection.services.ai_apps.title') || "Design & UX",
            description: t('vibecodingsection.services.ai_apps.description') || "Profesjonalne projektowanie interfejsów użytkownika.",
            url: t('vibecodingsection.services.ai_apps.url') || "https://ainsider.co/uslugi/design-ux",
            icon: <Code className="w-6 h-6" />,
            tag: null,
            className: "col-span-1"
        }
    ];

    return (
        // Page Background: Adjusted back to valid Tailwind colors (slate-950) for proper rendering
        <div className="w-full min-h-screen bg-transparent dark:bg-transparent flex items-center justify-center p-2 sm:p-4 font-sans selection:bg-purple-100 dark:selection:bg-indigo-500/30">

            {/* Main "Big Card" Container */}
            <div className="relative w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-[#151B2B]/70 backdrop-blur-2xl shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10 transition-all hover:shadow-3xl group">

                {/* SHADER-LIKE BACKGROUND */}
                {/* Base Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white/50 to-purple-50/50 dark:from-indigo-950/30 dark:via-transparent dark:to-purple-950/30 pointer-events-none"></div>

                {/* Animated Color Orbs */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-pulse pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-200 dark:bg-indigo-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 dark:opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

                {/* Center glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] opacity-60 pointer-events-none"></div>

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.15] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(currentColor 0.5px, transparent 0.5px)`,
                        backgroundSize: '12px 12px'
                    }}>
                </div>

                {/* Content Container */}
                <div className="bg-transparent relative z-10 flex flex-col md:flex-row items-stretch">

                    {/* Left Side: The "Hook" / Header + Socials */}
                    <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100/80 dark:border-white/5 bg-white/40 dark:bg-white/[0.02]">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm text-xs font-semibold uppercase tracking-wider text-gray-800 dark:text-white mb-8 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                {/* Updated badge text */}
                                {t('vibecodingsection.badge') || "Vibe-Coding Studio"}
                            </div>

                            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
                                {/* Updated title text */}
                                {t('vibecodingsection.title') || "Tworzenie aplikacji"} <br />
                                <span className="bg-clip-text text-gray-900 dark:text-white bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300">
                                    {t('vibecodingsection.subtitle') || "i stron internetowych"}
                                </span>
                            </h2>

                            <p className="text-lg text-gray-600 dark:text-white leading-relaxed mb-8 font-medium">
                                {/* Updated description text */}
                                {t('vibecodingsection.description') || "Przekształcamy pomysły w innowacyjne, szybkie i skalowalne aplikacje webowe i mobilne. Zbuduj swój projekt z nami – od pomysłu do pełnego wdrożenia."}
                            </p>
                        </div>


                        {/* Social Media Icons (unchanged in style, linking to ainsider.co where possible) */}
                        <div className="mt-auto">
                            <div className="flex gap-4 items-center">
                                <Link href="/contact" className="text-gray-400 dark:text-white inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
                                    {t('vibecodingsection.cta') || "Start Project"}
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                                {/* <a href="https://twitter.com/ainsiderco" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-200 dark:hover:border-indigo-500/30 hover:bg-indigo-50 dark:hover:bg-white/10 transition-all duration-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/company/vibe-coding" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://ainsider.co" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white hover:text-black dark:hover:text-gray-200 hover:border-gray-400 dark:hover:border-white/30 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300">
                                    <Globe className="w-5 h-5" />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Masonry Grid */}
                    <div className="w-full md:w-3/5 p-6 md:p-10 bg-white/20 dark:bg-black/20 backdrop-blur-[2px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full content-center">
                            {links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group/card relative flex flex-col justify-between p-6 
                                        bg-white/60 dark:bg-white/[0.03] 
                                        rounded-2xl border border-white/50 dark:border-white/10 
                                        shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-black/50
                                        hover:border-indigo-100 dark:hover:border-white/20 
                                        hover:-translate-y-1 transition-all duration-300 overflow-hidden 
                                        ${link.className}`}
                                >
                                    {/* Subtle hover gradient inside card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-50/30 dark:to-indigo-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10 flex justify-between items-start mb-4">
                                        {/* Icon Box */}
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/10 text-gray-900 dark:text-white ring-1 ring-gray-900/5 dark:ring-white/10 group-hover/card:bg-black dark:group-hover/card:bg-white group-hover/card:text-white dark:group-hover/card:text-black transition-colors duration-300">
                                            {link.icon}
                                        </div>
                                        {/* <div className="text-gray-300 dark:text-white group-hover/card:text-indigo-600 dark:group-hover/card:text-white transition-colors">
                                            <ChevronRight className="w-5 h-5" />
                                        </div> */}
                                    </div>

                                    {/* Text Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                                                {link.title}
                                            </h3>
                                            {/* {link.tag && (
                                                <span className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-500/20 border border-indigo-100 dark:border-indigo-500/30 text-[10px] font-bold uppercase tracking-wide text-indigo-700 dark:text-white">
                                                    {link.tag}
                                                </span>
                                            )} */}
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-white group-hover/card:text-gray-700 dark:group-hover/card:text-gray-200 transition-colors font-medium">
                                            {link.description}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VibeCodingSection;