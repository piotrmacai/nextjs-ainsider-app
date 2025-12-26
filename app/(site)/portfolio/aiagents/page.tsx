"use client";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
// import { useTranslation } from 'react-i18next';
import ChatbotsData from "@/components/Portfolio/chatbotsData";
import Link from "next/link";
import { motion } from "framer-motion";

const SinglePortfolioPage = () => {
  // const { t } = useTranslation();

  return (
    <>
      <title>{`Custom AI Agents - Details`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                  Projects Details
                </h4>

                <ul>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Tech Stack:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Next.js, Python, n8n, LangChain, Vercel AI SDK</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Models:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>APIs:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">OpenAI, Anthropic, Google Vertex AI, HuggingFace</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Category:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Custom AI Agents & Chatbots</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  Custom AI Agents & Chatbots
                </h2>
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/65]">
                    <Image
                      src={"/images/portfolio/geminin8n.png"}
                      alt="Custom AI Agents & Chatbots"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>

                <div className="blog-details">
                  <div className="flex flex-col gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <div>
                      <h4 className="font-bold text-lg text-black dark:text-white mb-2">Problem:</h4>
                      <p className="text-gray-600 dark:text-gray-300">Specific business logic needs require more than generic chat tools.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black dark:text-white mb-2">Solution:</h4>
                      <p className="text-gray-600 dark:text-gray-300">Tailored AI Agents with internal knowledge, custom workflows, and API integrations.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black dark:text-white mb-2">Effect:</h4>
                      <p className="text-gray-600 dark:text-gray-300">Accurate internal support, automated decision making, and streamlined sophisticated processes.</p>
                    </div>
                  </div>

                  <div className="mt-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p className="mb-6">
                      AI Agents are the next evolution of automation. Unlike simple chatbots, these agents can perform actions, make decisions based on complex data, and integrate seamlessly with your existing business tools.
                    </p>
                    <p>
                      Our <strong>Gemini Chatbot App</strong> template demonstrates the power of combining advanced Large Language Models like Google's Gemini with workflow automation platforms like n8n. This allows for the creation of intelligent agents that can handle everything from customer support to internal data analysis and reporting.
                    </p>
                  </div>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-10">
              Other AI Agent Projects
            </h2>
            <div className="flex flex-col gap-8">
              {ChatbotsData.map((project, key) => (
                <motion.div
                  key={key}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: key * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col md:flex-row gap-6 lg:gap-8 bg-white dark:bg-blacksection rounded-2xl p-4 md:p-6 shadow-solid-8 hover:shadow-solid-13 transition-all duration-300 border border-gray-100 dark:border-strokedark hover:border-primary/20"
                >
                  <Link href={project.urlLink} target="_blank" className="block relative w-full md:w-5/12 lg:w-1/3 aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  <div className="flex flex-col flex-1 justify-center">
                    <h3 className="font-bold text-xl md:text-2xl text-black dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      <Link href={project.urlLink} target="_blank">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed text-sm md:text-base">
                      {project.metadata}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags?.map((tag, i) => (
                        <span key={i} className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/5 dark:bg-white/5 text-primary dark:text-white/80 border border-primary/10 dark:border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePortfolioPage;
