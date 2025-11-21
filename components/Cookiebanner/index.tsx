"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useCookieConsent } from "@/app/context/CookieConsentContext";
import Link from "next/link";

const Cookiebanner = () => {
  const { t } = useTranslation();
  const { showBanner, consent, setConsent, acceptAll, rejectAll, saveConsent } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);

  if (!showBanner) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[480px] z-[9999]"
    >
      <div className="bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {t('cookies.title') || "We value your privacy"}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('cookies.message')}
                <Link
                  href="/privacy-policy"
                  className="text-primary hover:underline ml-1 font-medium"
                >
                  {t('cookies.privacyLink')}
                </Link>
              </p>
            </div>
          </div>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-6 space-y-3 overflow-hidden"
              >
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Necessary</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Required for the website to function.</span>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Analytics</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Help us improve our website.</span>
                    </div>
                    <button
                      onClick={() => setConsent('analytics', !consent.analytics)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${consent.analytics ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                    >
                      <span
                        className={`${consent.analytics ? 'translate-x-6' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Marketing</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Used to deliver relevant ads.</span>
                    </div>
                    <button
                      onClick={() => setConsent('marketing', !consent.marketing)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${consent.marketing ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                    >
                      <span
                        className={`${consent.marketing ? 'translate-x-6' : 'translate-x-1'
                          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {!showDetails ? (
              <>
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  {t('cookies.acceptAll') || "Accept All"}
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {t('cookies.rejectAll') || "Reject All"}
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {t('cookies.customize') || "Customize"}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={saveConsent}
                  className="flex-1 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  {t('cookies.savePreferences') || "Save Preferences"}
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {t('cookies.back') || "Back"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cookiebanner;
