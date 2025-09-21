// components/BotpressChat.tsx
'use client';

import { useEffect, useRef } from 'react';
import { toast } from 'react-hot-toast';

interface BotpressChatProps {
  width?: string;
  height?: string;
  className?: string;
}

declare global {
  interface Window {
    botpress?: {
      init: (config: any) => void;
      on: (event: string, callback: () => void) => void;
      open: () => void;
      close: () => void;
    };
  }
}

const BotpressChat: React.FC<BotpressChatProps> = ({ 
  width = "500px", 
  height = "500px",
  className = ""
}) => {
  const webchatRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Check if script is already loaded
    if (window.botpress && isInitialized.current) {
      return;
    }

    const loadBotpressScript = async () => {
      try {
        // Load the Botpress script
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
        script.async = true;
        
        script.onload = () => {
          // Wait a bit for the script to fully initialize
          setTimeout(() => {
            if (window.botpress && !isInitialized.current) {
              initializeBotpress();
            }
          }, 100);
        };

        script.onerror = () => {
          console.error('Failed to load Botpress script');
          toast.error('Nie udało się załadować czatu');
        };

        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading Botpress:', error);
        toast.error('Błąd podczas ładowania czatu');
      }
    };

    const initializeBotpress = () => {
      if (!window.botpress || isInitialized.current) return;

      try {
        // Set up the ready event listener
        window.botpress.on("webchat:ready", () => {
          window.botpress?.open();
        });

        // Initialize Botpress
        window.botpress.init({
          "botId": "3aceb256-1144-4ee7-9ad0-68371e9c3c47",
          "configuration": {
            "composerPlaceholder": "Jak mogę Ci pomóc? ;)",
            "botName": "Asystent Ainsider.pl",
            "botAvatar": "https://files.bpcontent.cloud/2024/11/29/19/20241129192959-3QIZ037U.jpeg",
            "website": {
              "title": "https://ainsider.pl",
              "link": "https://ainsider.pl"
            },
            "email": {
              "title": "piotr@ainsider.pl",
              "link": "piotr@ainsider.pl"
            },
            "phone": {
              "title": "+48 576 287 032",
              "link": "+48 576 287 032"
            },
            "termsOfService": {},
            "privacyPolicy": {},
            "color": "#3B82F6",
            "variant": "solid",
            "themeMode": "light",
            "fontFamily": "inter",
            "radius": 1
          },
          "clientId": "54b3040d-949c-4219-8741-2296a639579c",
          "selector": "#webchat"
        });

        isInitialized.current = true;
        console.log('Botpress initialized successfully');
      } catch (error) {
        console.error('Error initializing Botpress:', error);
        toast.error('Błąd podczas inicjalizacji czatu');
      }
    };

    loadBotpressScript();

    // Cleanup function
    return () => {
      // Remove the script if component unmounts
      const scripts = document.querySelectorAll('script[src*="botpress"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        #webchat .bpWebchat {
          position: unset !important;
          width: 100% !important;
          height: 100% !important;
          max-height: 100% !important;
          max-width: 100% !important;
        }
        #webchat .bpFab {
          display: none !important;
        }
      `}</style>
      <div
        id="webchat"
        ref={webchatRef}
        className={className}
        style={{ 
          width, 
          height,
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      />
    </>
  );
};

export default BotpressChat;