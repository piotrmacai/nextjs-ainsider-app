import React, { useEffect } from 'react';
import { useCookieConsent } from "@/app/context/CookieConsentContext";

const Chatbot: React.FC = () => {
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (!consent.marketing) return;

    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2024/11/29/17/20241129171709-DTSTJMS8.js';
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, [consent.marketing]);

  if (!consent.marketing) return null;

  return <div id="webchat" />;
};

export default Chatbot;