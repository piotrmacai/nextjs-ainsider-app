"use client";

import { useEffect } from "react";

const BOTPRESS_INJECT_ID = "botpress-webchat-inject";
const BOTPRESS_CONFIG_ID = "botpress-webchat-config";

const Botpress = () => {
  useEffect(() => {
    if (!document.getElementById(BOTPRESS_INJECT_ID)) {
      const injectScript = document.createElement("script");
      injectScript.id = BOTPRESS_INJECT_ID;
      injectScript.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
      injectScript.async = true;
      document.body.appendChild(injectScript);
    }

    if (!document.getElementById(BOTPRESS_CONFIG_ID)) {
      const configScript = document.createElement("script");
      configScript.id = BOTPRESS_CONFIG_ID;
      configScript.src =
        "https://files.bpcontent.cloud/2024/11/29/17/20241129171709-DTSTJMS8.js";
      configScript.defer = true;
      document.body.appendChild(configScript);
    }
  }, []);


  return <div id="bp-webchat" />;
};

export default Botpress;