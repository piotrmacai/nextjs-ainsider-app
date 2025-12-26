import { Portfolio } from "@/types/portfolio";

const BlogData: Portfolio[] = [
  {
    _id: 1,
    mainImage: "/images/portfolio/ainsiderbot.png",
    title: "AI Chatbots for Business",
    metadata:
      "Problem: Customer Service Overload. Solution: 24/7 AI Chatbot with Integrations. Effect: Reduces response time & automates support.",
    urlLink: "/portfolio/chatbots",
    tags: ["ai agents"],
  },
  {
    _id: 2,
    mainImage: "/images/portfolio/macaivoicebot.png",
    title: "AI Voice Agents",
    metadata:
      "Problem: Missed calls & inquiries. Solution: Voice AI answering calls exactly like a human. Effect: 100% call pickup rate & lead capture.",
    urlLink: "/portfolio/voicebots",
    tags: ["ai agents"],
  },
  {
    _id: 3,
    mainImage: "/images/portfolio/AiProductDesigner.png",
    title: "Custom Agents and AI Apps",
    metadata:
      "Problem: High cost of visual assets. Solution: Custom AI Image Generation & Editing Apps. Effect: Instant marketing assets & virtual try-ons.",
    urlLink: "/portfolio/aiagents",
    tags: ["ai agents", "apps"],
  },
  {
    _id: 4,
    mainImage: "/images/portfolio/n8n-workflows.jpg",
    title: "n8n Automations",
    metadata:
      "Problem: Repetitive manual tasks. Solution: Advanced n8n workflows connecting your apps. Effect: Saved hours on data entry & processing.",
    urlLink: "/portfolio/automations",
    tags: ["automations"],
  },
  {
    _id: 5,
    mainImage: "/images/portfolio/geminin8n.png",
    title: "Creative AI",
    metadata:
      "Problem: Specific business logic needs. Solution: Tailored AI Agents with internal knowledge. Effect: Accurate internal support & decision making.",
    urlLink: "/portfolio/aiapps",
    tags: ["creative"],
  },
  {
    _id: 6,
    mainImage: "/images/portfolio/osk.png",
    title: "Websites for Business",
    metadata:
      "Problem: Slow & unoptimized sites. Solution: Ultra-fast SEO-ready website + AI Assistant. Effect: Higher conversion & Google ranking.",
    urlLink: "/portfolio/websites",
    tags: ["web"],
  },
  {
    _id: 7,
    mainImage: "/images/portfolio/afterrave.jpg",
    title: "E-commerce",
    metadata:
      "Problem: Managing complex stores. Solution: Shopify/Woo stores integrated with AI. Effect: Automated inventory, descriptions & multi-language support.",
    urlLink: "/portfolio/ecommerce",
    tags: ["ecommerce"],
  },
  {
    _id: 8,
    mainImage: "/images/portfolio/openweb-full.png",
    title: "React & Next.js",
    metadata:
      "Problem: Need for custom user interfaces. Solution: React/Next.js apps like Open WebUI. Effect: Powerful, scalable & custom digital products.",
    urlLink: "/portfolio/apps",
    tags: ["web", "apps"],
  },
];

export default BlogData;
