"use client";
import { useEffect } from "react";
const ElevenLabs = () => {
  useEffect(() => {
    const scriptId = "elevenlabs-convai-script";
    // Check if script is already added
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);
  return (
    <div style={{ position: "fixed", left: "20px", bottom: "20px", zIndex: 9999 }}>
      <elevenlabs-convai agent-id="TeoMhDWNYm9FGDR4WE8S"></elevenlabs-convai>
    </div>
  );
};
export default ElevenLabs;


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



