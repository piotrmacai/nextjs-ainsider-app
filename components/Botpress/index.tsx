import React, { useEffect } from 'react';

const Chatbot: React.FC = () => {useEffect(() => {
  const script1 = document.createElement('script');
  script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
  script1.async = true;
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  script2.src = 'https://files.bpcontent.cloud/2024/11/29/17/20241129171709-DTSTJMS8.js';
  script2.defer = true;
  document.body.appendChild(script2);

  return () => {
    if (document.body.contains(script1)) {
      document.body.removeChild(script1);
    }
    if (document.body.contains(script2)) {
      document.body.removeChild(script2);
    }
  };
}, []);

  return <div id="webchat" />;
};

export default Chatbot;

{/* <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js" defer></script>
<script src="https://files.bpcontent.cloud/2024/11/29/17/20241129171709-DTSTJMS8.js" defer></script> */}

{/* <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/11/29/18/20241129182251-UU7RZYSQ.js"></script>
     */}


// import React, { useEffect } from 'react';

// const Chatbot: React.FC = () => {
//   useEffect(() => {
//     const script1 = document.createElement('script');
//     script1.src = 'https://cdn.botpress.cloud/webchat/v2.1/inject.js';
//     script1.async = true;
//     document.body.appendChild(script1);

//     const script2 = document.createElement('script');
//     script2.src = 'https://mediafiles.botpress.cloud/f3ba2c27-9f73-4d99-9658-574e07d0f7af/webchat/v2.1/config.js';
//     script2.defer = true;
//     document.body.appendChild(script2);

//     return () => {
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//     };
//   }, []);

//   return <div id="webchat" />;
// };

// export default Chatbot;