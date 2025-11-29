"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AiwareHero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 xl:pt-40">

            {/* --- BACKGROUND LAYERS (Adaptive) --- */}
            {/* 1. Dot Grid Pattern (Dark dots on light, Light dots on dark) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 h-full w-full 
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
          dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] 
          bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                />
            </div>

            {/* 2. Shader Glows (Subtle in light, Glowing in dark) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] 
        bg-purple-500/10 dark:bg-purple-500/20 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen 
        opacity-50 dark:opacity-40 pointer-events-none z-0"
            />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] 
        bg-blue-400/10 dark:bg-blue-500/10 blur-[90px] rounded-full pointer-events-none z-0"
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 2xl:px-0">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* --- LEFT TEXT CONTENT --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 flex flex-col items-start text-left"
                    >
                        {/* Tech Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                            <span className="text-xs font-medium text-black/70 dark:text-white/80 tracking-wide uppercase">
                                Vibe Coding × Technical Mastery
                            </span>
                        </div>

                        {/* Main Heading - The "Vibe" Serif Style */}
                        <h1 className="mb-6 text-4xl md:text-5xl xl:text-7xl leading-[1.1] tracking-tight text-black dark:text-white">
                            <span className="font-serif italic block">
                                {t('mainheading') || "Full Stack"}
                            </span>
                            <span className="block font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-white/50">
                                & AI Intelligence
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mb-10 text-lg font-light leading-relaxed text-gray-600 dark:text-gray-400 max-w-lg">
                            {t('description') || "We blend deep programming background with ultra-fast, intuitive workflows. This isn't just design—it's instant implementation."}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a href="#services">
                                <button className="relative overflow-hidden rounded-full bg-black dark:bg-white px-8 py-3 text-white dark:text-black font-medium transition-all hover:opacity-90 hover:scale-[1.02] duration-300">
                                    {t('servicesbutton') || "Explore Services"}
                                </button>
                            </a>

                            <a href="https://ainsider.store" target="_blank" rel="noreferrer">
                                <button className="flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-transparent px-8 py-3 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300">
                                    <span>Ainsider.store</span>
                                </button>
                            </a>
                        </div>
                    </motion.div>

                    {/* --- RIGHT IMAGE (Modern Code Window Style) --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative w-full mt-8 lg:mt-0"
                    >
                        {/* The "Window" Frame Container */}
                        <div className="relative aspect-[700/444] w-full rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-sm shadow-2xl dark:shadow-purple-900/10">

                            {/* Fake Window Controls (MacOS style) */}
                            <div className="absolute top-0 left-0 right-0 h-9 bg-black/5 dark:bg-white/5 border-b border-black/5 dark:border-white/5 flex items-center px-4 gap-2 z-20">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
                                <div className="ml-auto text-[10px] font-mono opacity-40 text-black dark:text-white">
                                    aiware-workflow.tsx
                                </div>
                            </div>

                            {/* Images */}
                            <div className="relative w-full h-full pt-9"> {/* Padding top for window bar */}
                                <Image
                                    className="dark:hidden object-contain p-4"
                                    src="/images/hero/hero-light.svg"
                                    alt="Hero Light"
                                    fill
                                />
                                <Image
                                    className="hidden dark:block object-contain p-4 mix-blend-lighten"
                                    src="/images/hero/hero-dark.svg"
                                    alt="Hero Dark"
                                    fill
                                />
                            </div>
                        </div>

                        {/* Decorative element behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-2xl -z-10 rounded-full dark:opacity-30"></div>
                    </motion.div>
                </div>
            </div>

            {/* --- SOCIAL ICONS (Desktop Sidebar) --- */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-6"
            >
                <SocialIconLink href="https://x.com/piotrmacai">
                    {/* X (Twitter) Path */}
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </SocialIconLink>
                <SocialIconLink href="https://www.linkedin.com/in/piotrmac0/">
                    {/* LinkedIn Path */}
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 4.5z" />
                </SocialIconLink>
                <SocialIconLink href="https://www.github.com/aiwareai/">
                    {/* Github Path */}
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </SocialIconLink>
                <div className="w-[1px] h-20 bg-black/20 dark:bg-white/20 mx-auto"></div>
            </motion.div>

            {/* --- MOBILE SOCIAL (Bottom) --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="md:hidden flex justify-center mt-12 pb-8 gap-8"
            >
                <SocialIconMobile href="https://x.com/piotrmacai">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </SocialIconMobile>
                <SocialIconMobile href="https://www.linkedin.com/in/piotrmac0/">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 4.5z" />
                </SocialIconMobile>
                <SocialIconMobile href="https://www.github.com/aiwareai/">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </SocialIconMobile>
            </motion.div>
        </section>
    );
};

// --- Helper Components for Cleanliness ---

const SocialIconLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 hover:scale-110 transition-all duration-300">
            <svg className="w-5 h-5 fill-black/60 dark:fill-white/60 group-hover:fill-black dark:group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                {children}
            </svg>
        </div>
    </a>
);

const SocialIconMobile = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
        <svg className="w-6 h-6 fill-black/60 dark:fill-white/60 hover:fill-black dark:hover:fill-white transition-colors" viewBox="0 0 24 24">
            {children}
        </svg>
    </a>
);

export default AiwareHero;