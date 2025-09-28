import { Portfolio } from "@/types/portfolio";

const BlogData: Portfolio[] = [
  { 
    _id: 1.1,
    mainImage: "/images/portfolio/n8n-openwebui.jpg",
    title: "n8n Agent at Open WebUI chat interface",
    metadata:
      "Solution which allow to use any n8n AI Agent or workflow directly in Open WebUI chat interface",
      urlLink:"https://github.com/piotrmacai/librechat-docker",
      tags: ["all", "ai", "agents"],
  },
  { 
    _id: 1.1,
    mainImage: "/images/portfolio/librechat.png",
    title: "LibreChat - LLM User Interface",
    metadata:
      "Personalized landing page and portfolio app with various social links and AI Assitant build in Next.js",
      urlLink:"https://github.com/piotrmacai/librechat-docker",
      tags: ["ai", "agents"],
  },
  { 
    _id: 13,
    mainImage: "/images/portfolio/videoapp.png",
    title: "Video Portfolio App",
    metadata:
      "Fully interactive and modern video portfolio app build in Next.js",
      urlLink:"https://nextjs-video-web-app.vercel.app/",
      tags: ["web"],
  },
  { 
    _id: 0,
    mainImage: "/images/portfolio/voicebot2.jpg",
    title: "Voice AI Assistant for Macai.studio",
    metadata:
      "Voice AI Assistant build with ElevenLabs Voice Engine",
      urlLink:"/portfolio/voicebot-macaistudio",
      tags: ["ai", "agents"],
  },
  { 
    _id: 0.1,
    mainImage: "/images/portfolio/ainsiderlink.jpg",
    title: "Personal Portfolio with Links and AI Assitant",
    metadata:
      "Personalized portfolio app with various social links and AI Assitant build in Next.js",
      urlLink:"/portfolio/ainsider-link",
      tags: ["ai", "web"],
  },
  { 
    _id: 0.2,
    mainImage: "/images/portfolio/voiceflowecom.png",
    title: "AI Agent for Ecommerce with Products Recommendation",
    metadata:
      "Advanced personalized AI Agent for Ecommerce with Products Recommendation build in Voiceflow",
      urlLink:"/portfolio/voiceflow-ecommerce",
      tags: ["ai", "agents"],
  },
  { 
    _id: 0.2,
    mainImage: "/images/portfolio/uichatbot.jpg",
    title: "Multimodal Chatbot at Next.js",
    metadata:
      "Multimodal Custom Ai Assistant with user log-in, memory build in Next.js",
      urlLink:"/portfolio/insdr-chatbot",
      tags: ["ai", "agents"],
  },
  { 
    _id: 0.3,
    mainImage: "/images/portfolio/ainsiderplimg.png",
    title: "Ainsider.pl",
    metadata:
      "Ai Tools and AI models Directory for polish audience",
      urlLink:"/portfolio/ainsiderpl",
      tags: ["web", "ai"],  
  },
  { 
    _id: 1.5,
    mainImage: "/images/portfolio/piotrmacaidev.jpg",
    title: "macai.studio",
    metadata:
      "Piotr Macai Personal Portfolio in React.js",
      urlLink:"https://piotrmacai.com",
      tags: ["web"],
  },
  { 
    _id: 2.5,
    mainImage: "/images/portfolio/ainsider_tools.jpg",
    title: "Ainsider.store",
    metadata:
      "Gen AI Tools Directory and Magazine",
      urlLink:"/portfolio/aitoolslibrary",
      tags: ["web", "ai"],
  },
  // { 
  //   _id: 1,
  //   mainImage: "/images/portfolio/cora.jpg",
  //   title: "Cora-goralczyk.pl",
  //   metadata:
  //     "Website for automotive mechanic workshop",
  //     urlLink:"/portfolio/cora-goralczyk",
  //     tags: ["websites"],
  // },
  // {
  //   _id: 2,
  //   mainImage: "/images/portfolio/volton.jpg",
  //   title: "Volton-install.pl",
  //   metadata:
  //     "Business website for electrical services and smart home",
  //     urlLink:"/portfolio/volton",
  //     tags: ["websites"],
  // },
  { 
    _id: 4,
    mainImage: "/images/portfolio/skin.jpg",
    title: "Skinproject.pl",
    metadata:
      "Website for Aesthetic Medicine Office",
      urlLink:"/portfolio/skinproject",
      tags: ["websites"],
  },
  { 
    _id: 5,
    mainImage: "/images/portfolio/macaiStudio.jpg",
    title: "AI Assistant for Ainsider.store",
    metadata:
      "Ai Assistant for Ainsider.store  with lead generation",
      urlLink:"/portfolio/ainsiderbot",
      tags: ["ai", "agents"],
  },
  // { 
  //   _id: 3,
  //   mainImage: "/images/portfolio/ainspire.jpg",
  //   title: "Ainsider.Cloud",
  //   metadata:
  //     "Gallery of prompts and Generative AI magazine",
  //     urlLink:"/portfolio/ainsider-cloud",
  //     tags: ["websites", "ai"],
  // },
  // {
  //   _id: 6,
  //   mainImage: "/images/portfolio/macai.jpg",
  //   title: "Macai.studio",
  //   metadata:
  //     "Business website for AI Video Creative Agency",
  //     urlLink:"/portfolio/insdrcloud",
  //     tags: ["websites", "ai"],
  // },
  { 
    _id: 5.5,
    mainImage: "/images/portfolio/afterrave.jpg",
    title: "After-rave.eu",
    metadata:
      "Shop in Shopify in multiple languages",
      urlLink:"/portfolio/after-rave",
      tags: ["websites"],
  },
  { 
    _id: 5.5,
    mainImage: "/images/portfolio/hfassistants.jpg",
    title: "Huggingface Assistants",
    metadata:
      "Custom various AI Assistants",
      urlLink:"/portfolio/huggingface-assistants",
      tags: ["ai"],
  },
  { 
    _id: 6,
    mainImage: "/images/portfolio/slovlydeskop.jpg",
    title: "Slovlystudio.pl",
    metadata:
      "Online store for handmade clothing brand",
      urlLink:"/portfolio/slovly",
      tags: ["websites"],
  },
  // { 
  //   _id: 7,
  //   mainImage: "/images/portfolio/aiwarecloudchatbot.jpg",
  //   title: "AI Assistant for Ainsider.pl",
  //   metadata:
  //     "Ai Assistant for Ainsider platform with lead generation",
  //     urlLink:"/portfolio/aiware-chatbot",
  //     tags: ["ai"],
  // },
  { 
    _id: 7.5,
    mainImage: "/images/portfolio/promptr.jpg",
    title: "Text-to-image Prompt Builder App",
    metadata:
      "Text-to-image Prompt Builder App",
      urlLink:"/portfolio/promptrapp",
      tags: ["ai"],
  },
  { 
    _id: 8,
    mainImage: "/images/portfolio/szkolajazdynew.jpg",
    title: "Szkolajazdymachowski.pl",
    metadata:
      "Website created together with AI Chatbot and FB profile for Driving School",
      urlLink:"/portfolio/osk-machowski",
      tags: ["websites"],
      
  },
  { 
    _id: 9,
    mainImage: "/images/portfolio/bakaliovelove.jpg",
    title: "Bakaliowelove.pl",
    metadata:
      "Woocommerce Store with healthy food",
      urlLink:"/portfolio/bakaliowelove",
      tags: ["websites"],
  },
     { 
    _id: 10.5,
    mainImage: "/images/portfolio/macaiStudio.jpg",
    title: "AI Assistant for Macai.studio",
    metadata:
      "Ai Assistant for Macai.studio",
      urlLink:"/portfolio/macai-chatbot",
      tags: ["ai", "agents"],
  },
  // {
  //   _id: 10,
  //   mainImage: "/images/portfolio/lanelyya.jpg",
  //   title: "Lanelyya.de",
  //   metadata:
  //     "Shop in multiple languages on Shopify for German market",
  //     urlLink:"/portfolio/lanelyya",
  //     tags: ["websites"],
  // },  
  // {
  //   _id: 10,
  //   mainImage: "/images/portfolio/szkolajazdynew.jpg",
  //   title: "Szkolajazdymachowski.pl",
  //   metadata:
  //     "HTML/JS/CSS websites for Driving School",
  //     urlLink:"/portfolio/osk-machowski",
  //     tags: ["websites"],
  // },
  { 
    _id: 17,
    mainImage: "/images/portfolio/szkolachatbot.jpg",
    title: "AI Assistant for Szkolajazdymachowski.pl",
    metadata:
      "Ai Assistant for Driving School Szkolajazdypolaniec.pl",
      urlLink:"/portfolio/chatbot-osk",
      tags: ["ai", "agents"],
  },
  { 
    _id: 11,
    mainImage: "/images/portfolio/imgpromptr.jpg",
    title: "IMGPromptr",
    metadata:
      "AI Assistant for creating prompts from images",
      urlLink:"/portfolio/imgpromptr",
      tags: ["ai"],
  },
  { 
    _id: 11,
    mainImage: "/images/portfolio/foodchatbot.jpg",
    title: "AI Assistant for Restaurants",
    metadata:
      "Ai Assistant for Restaurants",
      urlLink:"/portfolio/foodchatbot",
      tags: ["ai", "agents"],
  },
  //  { 
  //   _id: 1,
  //   mainImage: "/images/portfolio/macaiStudio.jpg",
  //   title: "AI Assistant for Macai.studio",
  //   metadata:
  //     "Ai Assistant for Macai.studio",
  //     urlLink:"/portfolio/macai-chatbot",
  //     tags: ["ai"],
  // },
  // { 
  //   _id: 12,
  //   mainImage: "/images/portfolio/akcesoria.jpg",
  //   title: "Akcesoriadouprawy.pl",
  //   metadata:
  //     "Ecommerce Store with external integrations",
  //     urlLink:"/portfolio/akcesoriadouprawy",
  //     tags: ["websites"],
  // },
  { 
    _id: 13,
    mainImage: "/images/portfolio/uprawaChatbot.jpg",
    title: "AI Assistant for Ecommerce",
    metadata:
      "Ai Assistant for Akcesoriadouprawy.pl",
      urlLink:"/portfolio/akcesoriadouprawy-chatbot",
      tags: ["ai", "agents"],
  },
];

export default BlogData;
