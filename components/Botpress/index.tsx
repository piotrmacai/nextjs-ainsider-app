"use client";
import { useEffect, useRef } from "react";

interface BotpressFullWidthProps {
  height?: string;
  className?: string;
}

const Botpress = ({
  height = "600px",
  className = ""
}: BotpressFullWidthProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const injectScriptId = "botpress-inject-script";
    const configScriptId = "botpress-config-script";

    // Check if scripts are already added
    if (!document.getElementById(injectScriptId)) {
      // Add the inject script
      const injectScript = document.createElement("script");
      injectScript.id = injectScriptId;
      injectScript.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
      injectScript.async = true;
      document.body.appendChild(injectScript);

      // Add the config script with defer
      const configScript = document.createElement("script");
      configScript.id = configScriptId;
      configScript.src = "https://files.bpcontent.cloud/2024/11/29/17/20241129171709-DTSTJMS8.js";
      configScript.defer = true;
      document.body.appendChild(configScript);
    }

    // Cleanup function
    return () => {
      const inject = document.getElementById(injectScriptId);
      const config = document.getElementById(configScriptId);

      if (inject) inject.remove();
      if (config) config.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`botpress-container ${className}`}
      style={{
        width: "100%",
        height: height,
        position: "relative"
      }}
    >
      <div id="bp-webchat" style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Botpress;



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



