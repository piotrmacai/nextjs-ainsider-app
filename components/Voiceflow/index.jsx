"use client"
import React, { useEffect } from 'react';

const Voiceflow = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { 
          projectID: '66fd9286a5b369f00abef5fb' 
        },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        voice: { 
          url: "https://runtime-api.voiceflow.com" 
        }
      });

      // Add custom styles to position chat widget higher
      const styleSheet = document.createElement("style");
      styleSheet.textContent = `
        #voiceflow-chat {
          bottom: 100px !important;
        }
      `;
      document.head.appendChild(styleSheet);
    };
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    return () => {
      // Cleanup script when component unmounts
      const scriptElement = document.querySelector('script[src="https://cdn.voiceflow.com/widget-next/bundle.mjs"]');
      if (scriptElement) {
        scriptElement.remove();
      }
      // Remove custom styles
      const styleElement = document.querySelector('style');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return <div id="voiceflow-chat" />;
};

export default Voiceflow;









// "use client"

// import React, { useEffect } from 'react';

// const Voiceflow = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.onload = () => {
//       window.voiceflow.chat.load({
//         verify: { projectID: '66fd9286a5b369f00abef5fb' },
//         url: 'https://general-runtime.voiceflow.com',
//         versionID: 'production'
//       });
//     };
//     script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
//     const firstScript = document.getElementsByTagName('script')[0];
//     firstScript.parentNode?.insertBefore(script, firstScript);
//   }, []);

//   return <div id="voiceflow-chat"/>;
// };

// export default Voiceflow;
