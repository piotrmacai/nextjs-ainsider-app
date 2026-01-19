"use client";

import { useEffect } from "react";

const BOTPRESS_INJECT_ID = "botpress-webchat-inject";
const BOTPRESS_CONFIG_ID = "botpress-webchat-config";

const BotpressChat = () => {
  useEffect(() => {
    // inject.js
    if (!document.getElementById(BOTPRESS_INJECT_ID)) {
      const injectScript = document.createElement("script");
      injectScript.id = BOTPRESS_INJECT_ID;
      injectScript.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
      injectScript.async = true;
      document.body.appendChild(injectScript);
    }

    // config / bot script
    if (!document.getElementById(BOTPRESS_CONFIG_ID)) {
      const configScript = document.createElement("script");
      configScript.id = BOTPRESS_CONFIG_ID;
      configScript.src =
        "https://files.bpcontent.cloud/2024/11/29/17/20241129171709-DTSTJMS8.js";
      configScript.defer = true;
      document.body.appendChild(configScript);
    }
  }, []);

  /**
   * Botpress v3 renderuje się globalnie (window.botpressWebChat)
   * Ten div jest tylko „kotwicą” layoutową, jeśli chcesz kontrolować szerokość/sekcję
   */
  return <div id="bp-webchat" />;
};

export default BotpressChat;

// "use client";

// import React, { useState, useEffect } from 'react';
// import Script from 'next/script';

// const Botpress: React.FC = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Check if Botpress is already loaded (for client-side navigation)
//     if ((window as any).botpressWebChat) {
//       setIsLoaded(true);
//     }
//   }, []);

//   return (
//     <>
//       <Script
//         src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"
//         strategy="afterInteractive"
//         onLoad={() => setIsLoaded(true)}
//       />
//       {isLoaded && (
//         <Script
//           src="https://files.bpcontent.cloud/2024/11/29/17/20241129171709-DTSTJMS8.js"
//           strategy="afterInteractive"
//         />
//       )}
//     </>
//   );
// };

// export default Botpress;



