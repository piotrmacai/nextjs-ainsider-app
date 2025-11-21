// app/site/layout.tsx
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
// import { Inter } from "next/font/google";
import localFont from 'next/font/local';
import { ThemeProvider } from "next-themes";
import "../globals.css";
import ToasterContext from "../context/ToastContext";
import i18n from '../../i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import Cookiebanner from "@/components/Cookiebanner";
import Voiceflow from "@/components/Voiceflow";
import ElevenLabsWidget from "@/components/Elevenlabs";
import Botpress from "@/components/Botpress";
import { CookieConsentProvider } from "@/app/context/CookieConsentContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['system-ui', 'Arial', 'sans-serif'],
//   weight: ['400', '500', '700'],
// });
// Load Inter font locally
const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter/InterVariable.woff2',
      weight: '100 900', // Supports all weights (100-900)
      style: 'normal',
    },
  ],
  variable: '--font-inter', // Optional: for CSS variables
  display: 'swap', // Optional: improves performance
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang={locale}>
        <body className={`bg-white dark:bg-black`}>
          <CookieConsentProvider>
            <ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
              <Lines />
              <Header />
              <ToasterContext />
              {children}
              <Footer />
            </ThemeProvider>
            <Cookiebanner />
            <Voiceflow />
            {/* <ElevenLabsWidget /> */}
            <Botpress />
            <GoogleAnalytics gaId="G-XXXXXXXXXX" />
          </CookieConsentProvider>
        </body>
      </html>
    </I18nextProvider>
  );
}

