"use client"

import React, { useEffect } from 'react';

const Voiceflow = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '66fd9286a5b369f00abef5fb' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
  }, []);

  return <div id="voiceflow-chat"/>;
};

export default Voiceflow;
