"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Consent = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
};

type CookieConsentContextType = {
    consent: Consent;
    showBanner: boolean;
    setConsent: (category: keyof Consent, value: boolean) => void;
    acceptAll: () => void;
    rejectAll: () => void;
    saveConsent: () => void;
    resetConsent: () => void;
};

const defaultConsent: Consent = {
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [consent, setConsentState] = useState<Consent>(defaultConsent);
    const [showBanner, setShowBanner] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookieConsent");
        const storedDate = localStorage.getItem("cookieConsentDate");

        if (storedConsent && storedDate) {
            // Check if consent is still valid (e.g. 180 days)
            const isValid = (new Date().getTime() - new Date(storedDate).getTime()) < (180 * 24 * 60 * 60 * 1000);
            if (isValid) {
                try {
                    setConsentState(JSON.parse(storedConsent));
                    setShowBanner(false);
                } catch (e) {
                    setShowBanner(true);
                }
            } else {
                setShowBanner(true);
            }
        } else {
            setShowBanner(true);
        }
        setIsLoaded(true);
    }, []);

    const setConsent = (category: keyof Consent, value: boolean) => {
        if (category === "necessary") return; // Always true
        setConsentState((prev) => ({ ...prev, [category]: value }));
    };

    const acceptAll = () => {
        const newConsent = { necessary: true, analytics: true, marketing: true, preferences: true };
        setConsentState(newConsent);
        saveConsentToStorage(newConsent);
    };

    const rejectAll = () => {
        const newConsent = { necessary: true, analytics: false, marketing: false, preferences: false };
        setConsentState(newConsent);
        saveConsentToStorage(newConsent);
    };

    const saveConsent = () => {
        saveConsentToStorage(consent);
    };

    const saveConsentToStorage = (consentToSave: Consent) => {
        localStorage.setItem("cookieConsent", JSON.stringify(consentToSave));
        localStorage.setItem("cookieConsentDate", new Date().toISOString());
        setShowBanner(false);
        setConsentState(consentToSave);
    };

    const resetConsent = () => {
        localStorage.removeItem("cookieConsent");
        localStorage.removeItem("cookieConsentDate");
        setConsentState(defaultConsent);
        setShowBanner(true);
    }

    return (
        <CookieConsentContext.Provider value={{ consent, showBanner, setConsent, acceptAll, rejectAll, saveConsent, resetConsent }}>
            {children}
        </CookieConsentContext.Provider>
    );
};

export const useCookieConsent = () => {
    const context = useContext(CookieConsentContext);
    if (!context) {
        throw new Error("useCookieConsent must be used within a CookieConsentProvider");
    }
    return context;
};
