"use client"

import React, { useEffect } from 'react';

const ElevenLabsConvAI = () => {
  useEffect(() => {
    // Create the script element for ElevenLabs widget
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    
    // Add the script to the document
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Return the custom element with the agent-id attribute
  return (
    <div
      is="elevenlabs-convai"
      agent-id="TeoMhDWNYm9FGDR4WE8S"
    />
  );
};

export default ElevenLabsConvAI;

// "use client"

// import React, { useEffect } from 'react';

// interface ElevenLabsConvAIProps {
//   agentId?: string;
//   className?: string;
// }

// const ElevenLabsConvAI = ({ 
//   agentId = "TeoMhDWNYm9FGDR4WE8S",
//   className,
// }: ElevenLabsConvAIProps) => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.src = 'https://elevenlabs.io/convai-widget/index.js';
    
//     const firstScript = document.getElementsByTagName('script')[0];
//     firstScript.parentNode?.insertBefore(script, firstScript);

//     return () => {
//       if (script.parentNode) {
//         script.parentNode.removeChild(script);
//       }
//     };
//   }, []);
//   return (
//     <div
//       is="elevenlabs-convai"
//       agent-id={agentId}
//       className={className}
//     />
//   );
// };

// export default ElevenLabsConvAI;