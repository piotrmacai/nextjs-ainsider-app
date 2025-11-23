'use client';

import React from 'react';
import { ArrowUpRight, ShoppingBag, GraduationCap, Newspaper, Twitter, Linkedin, Github, ChevronRight, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AinsiderStore = () => {
    const { t } = useTranslation();

    const links = [
        {
            title: "AI & Automation Store",
            description: "Premium tools & workflows.",
            url: "https://ainsider.store",
            icon: <ShoppingBag className="w-6 h-6" />,
            tag: null,
            className: "col-span-1 sm:col-span-2" // Full width in the grid
        },
        {
            title: "Academy",
            description: "Master AI skills.",
            url: "https://ainsider.store/academy",
            icon: <GraduationCap className="w-6 h-6" />,
            tag: null,
            className: "col-span-1"
        },
        {
            title: "Substack",
            description: "Weekly insights.",
            url: "https://ainsiderai.substack.com",
            icon: <Newspaper className="w-6 h-6" />,
            tag: null,
            className: "col-span-1"
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 font-sans selection:bg-purple-100">

            {/* Main "Big Card" Container */}
            <div className="relative w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-gray-900/5 transition-all hover:shadow-3xl group">

                {/* SHADER-LIKE BACKGROUND */}
                {/* Base Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50"></div>

                {/* Animated Color Orbs (Shader Simulation) */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)] opacity-60 pointer-events-none"></div>

                {/* Noise Texture for that "Paper/Shader" feel */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
                        backgroundSize: '12px 12px'
                    }}>
                </div>

                {/* Content Container */}
                <div className="bg-transparent relative z-10 flex flex-col md:flex-row items-stretch">

                    {/* Left Side: The "Hook" / Header + Socials */}
                    <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100/80 bg-transparent backdrop-blur-sm">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-transparent border border-gray-200 shadow-sm text-xs font-semibold uppercase tracking-wider text-gray-800 mb-8 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 an  imate-pulse"></span>
                            {t("ainsiderstore.badge")}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                            {t("ainsiderstore.title")} <br />
                            <span className="bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                {t("ainsiderstore.subtitle")}
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {t("ainsiderstore.description")}
                        </p>


                        {/* Social Media Icons */}
                        <div className="mt-auto">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Connect with us</p>
                            <div className="flex gap-4">
                                <a href="#" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-300">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-blue-700 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-black hover:border-gray-400 hover:bg-gray-100 transition-all duration-300">
                                    <Globe className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Masonry Grid */}
                    <div className="w-full md:w-3/5 p-6 md:p-10 bg-white/10 backdrop-blur-[2px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full content-center">
                            {links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group/card relative flex flex-col justify-between p-6 bg-white/80 rounded-2xl border border-white/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden ${link.className}`}
                                >
                                    {/* Subtle hover gradient inside card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-50/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

                                    <div className="relative z-10 flex justify-between items-start mb-4">
                                        {/* Icon Box */}
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 text-gray-900 ring-1 ring-gray-900/5 group-hover/card:bg-black group-hover/card:text-white transition-colors duration-300">
                                            {link.icon}
                                        </div>
                                        {/* Action Arrow */}
                                        <div className="text-gray-300 group-hover/card:text-indigo-600 transition-colors">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-lg font-bold text-gray-900">
                                                {link.title}
                                            </h3>
                                            {link.tag && (
                                                <span className="px-2 py-2 rounded-md bg-indigo-50 border border-indigo-100 text-[10px] font-bold uppercase tracking-wide text-indigo-700">
                                                    {link.tag}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500 group-hover/card:text-gray-700 transition-colors">
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

export default AinsiderStore;