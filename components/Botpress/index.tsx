"use client";

import React, { useState, useEffect } from 'react';
import Script from 'next/script';

const Botpress: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if Botpress is already loaded (for client-side navigation)
    if ((window as any).botpressWebChat) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
      />
      {isLoaded && (
        <Script
          src="https://files.bpcontent.cloud/2024/11/29/17/20241129171709-DTSTJMS8.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
};

export default Botpress;

