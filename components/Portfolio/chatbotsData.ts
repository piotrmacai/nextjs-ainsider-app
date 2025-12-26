import { Portfolio } from "@/types/portfolio";

const ChatbotsData: Portfolio[] = [
    {
        _id: 1.8,
        mainImage: "/images/portfolio/geminin8n.png",
        title: "Gemini AI Chatbot App",
        metadata: "with Gemini models and n8n workflows",
        urlLink: "https://github.com/piotrmacai/Gemini-Chatbot-App",
        tags: ["ai", "agents"],
    },
    {
        _id: 4.5,
        mainImage: "/images/portfolio/vercelchat.png",
        title: "AI Chatbot App with Vercel AI SDK",
        metadata: "Perfect as starter for own AI Apps. Built in Next.js with Vercel AI Gateway.",
        urlLink: "https://ainsiderchat.vercel.app/",
        tags: ["ai"],
    },
    {
        _id: 11,
        mainImage: "/images/portfolio/foodchatbot.jpg",
        title: "AI Assistant for Restaurants",
        metadata: "Ai Assistant for Restaurants",
        urlLink: "/portfolio/foodchatbot",
        tags: ["ai", "agents"],
    },
    {
        _id: 1,
        mainImage: "/images/portfolio/macaiStudio.jpg",
        title: "AI Assistant for Macai.studio",
        metadata: "Ai Assistant for Macai.studio",
        urlLink: "/portfolio/macai-chatbot",
        tags: ["ai"],
    },
    {
        _id: 13,
        mainImage: "/images/portfolio/uprawaChatbot.jpg",
        title: "AI Assistant for Ecommerce",
        metadata: "Ai Assistant for Akcesoriadouprawy.pl",
        urlLink: "/portfolio/akcesoriadouprawy-chatbot",
        tags: ["ai", "agents"],
    },
    {
        _id: 18,
        mainImage: "/images/portfolio/hfassistants.jpg",
        title: "Huggingface Assistants",
        metadata: "Custom various AI Assistants",
        urlLink: "/portfolio/huggingface-assistants",
        tags: ["ai"],
    },
    {
        _id: 1.1,
        mainImage: "/images/portfolio/librechat.png",
        title: "LibreChat",
        metadata: "Custom LLM User Interface",
        urlLink: "https://github.com/piotrmacai/librechat-docker",
        tags: ["ai", "agents"],
    },
];

export default ChatbotsData;
