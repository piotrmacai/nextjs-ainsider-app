"use client";
import React from "react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Products = () => {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const currentLanguage = i18n.language;

    // Product data with language-specific links
    const products = [
        {
            id: 'aiDirectory',
            icon: '🤖',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 'chatgptGuide',
            icon: '💬',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            id: 'automationsGuide',
            icon: '⚡',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            id: 'aiAssistant',
            icon: '🎯',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            id: 'midjourneyGuide',
            icon: '🎨',
            gradient: 'from-violet-500 to-purple-500',
        },
    ];

    const handleProductClick = (productId: string) => {
        const link = t(`products.items.${productId}.link`);
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <>
            <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-white bg-gradient-to-r from-primary to-purple-600 rounded-full">
                            {t('products.subtitle')}
                        </span>
                        <h2 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
                            {t('products.title')}
                        </h2>
                    </motion.div>

                    {/* Products Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group cursor-pointer"
                                onClick={() => handleProductClick(product.id)}
                            >
                                <div className="relative h-full bg-white dark:bg-blacksection border border-stroke dark:border-strokedark rounded-2xl p-8 shadow-solid-3 dark:shadow-none hover:shadow-solid-4 dark:hover:shadow-solid-4 transition-all duration-300 overflow-hidden">
                                    {/* Gradient Background Effect */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-300`}></div>

                                    {/* Icon */}
                                    <div className={`relative inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br ${product.gradient} rounded-xl shadow-lg`}>
                                        <span className="text-3xl">{product.icon}</span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="relative text-xl font-bold text-black dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                                        {t(`products.items.${product.id}.title`)}
                                    </h3>

                                    <p className="relative text-base text-body dark:text-bodydark mb-6 line-clamp-3">
                                        {t(`products.items.${product.id}.description`)}
                                    </p>

                                    {/* CTA Button */}
                                    <div className="relative flex items-center gap-2 text-primary dark:text-primary font-medium group-hover:gap-4 transition-all duration-300">
                                        <span>{t('products.viewProduct')}</span>
                                        <svg
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>

                                    {/* Hover Border Effect */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary dark:group-hover:border-primary transition-colors duration-300 pointer-events-none"></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-flex flex-col md:flex-row items-center gap-4 p-8 bg-gradient-to-r from-primary/10 to-purple-600/10 dark:from-primary/20 dark:to-purple-600/20 rounded-2xl border border-primary/20 dark:border-primary/30">
                            <div className="flex-1 text-left">
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                                    {currentLanguage === 'pl'
                                        ? 'Potrzebujesz pomocy w wyborze?'
                                        : 'Need help choosing?'}
                                </h3>
                                <p className="text-body dark:text-bodydark">
                                    {currentLanguage === 'pl'
                                        ? 'Skontaktuj się z nami, aby znaleźć idealne rozwiązanie dla Twojego biznesu.'
                                        : 'Contact us to find the perfect solution for your business.'}
                                </p>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primaryho text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                            >
                                {currentLanguage === 'pl' ? 'Skontaktuj się' : 'Contact Us'}
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Products;
