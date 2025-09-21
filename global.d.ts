// src/global.d.ts

declare namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "agent-id"?: string;
      };
    }
  }
  
  // Extend the Window interface for botpress
// interface Window {
//   botpress?: any;
// }