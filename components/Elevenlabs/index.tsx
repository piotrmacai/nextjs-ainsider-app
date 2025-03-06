"use client";

import { useEffect, useRef } from "react";

const ElevenLabsWidget = () => {
  const widgetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scriptId = "elevenlabs-convai-script";

    // Check if script is already added
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return <elevenlabs-convai ref={widgetRef} agent-id="TeoMhDWNYm9FGDR4WE8S"></elevenlabs-convai>;
};

export default ElevenLabsWidget;



// "use client";

// import { useEffect } from "react";

// const ElevenLabsWidget = () => {
//   useEffect(() => {
//     const scriptId = "elevenlabs-convai-script";

//     // Prevent duplicate script injection
//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.id = scriptId;
//       script.src = "https://elevenlabs.io/convai-widget/index.js";
//       script.async = true;
//       script.type = "text/javascript";
//       document.body.appendChild(script);
//     }
//   }, []);

//   return <elevenlabs-convai agent-id="TeoMhDWNYm9FGDR4WE8S"></elevenlabs-convai>;
// };

// export default ElevenLabsWidget;



