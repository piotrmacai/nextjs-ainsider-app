"use client";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
// import { useTranslation } from 'react-i18next';
import AppsData from "@/components/Portfolio/AppsPortfolio/appsPortfolioData";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleBlogPage = () => {
  // const { t } = useTranslation();

  return (
    <>
      <title>{`Creative AI Apps - Details`}</title>
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
                    <p>Link:</p>
                    <a className="text-white transition-all duration-300 hover:text-primary" href="https://github.com/piotrmacai/Gemini-Chatbot-App" target="_blank" rel="noopener noreferrer">Gemini Chatbot App</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Type:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Creative AI Application</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Category:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">AI Apps & Automation</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Tech Stack:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">n8n, Gemini Pro, React, Vercel AI SDK</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  Creative AI Apps
                </h2>
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/65]">
                    <Image
                      src={"/images/portfolio/geminin8n.png"}
                      alt="Creative AI Apps"
                      fill
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>

                <div className="blog-details">
                  <div className="flex flex-col gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700">
                    <div>
                      <h4 className="font-bold text-lg text-black dark:text-white mb-2">Problem:</h4>
                      <p className="text-gray-600 dark:text-gray-300">Specific business logic needs require more than generic tools.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black dark:text-white mb-2">Solution:</h4>
                      <p className="text-gray-600 dark:text-gray-300">Tailored Creative AI Apps with internal knowledge.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-black dark:text-white mb-2">Effect:</h4>
                      <p className="text-gray-600 dark:text-gray-300">Accurate internal support & automated decision making.</p>
                    </div>
                  </div>

                  <div className="mt-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p className="mb-6">
                      Creative AI Apps go beyond simple text generation. They combine the reasoning power of Large Language Models with specific business logic and creative tools.
                      Whether it's an app for generating marketing assets, writing professional articles, or translating content, these tools empower users to create more with less effort.
                    </p>
                    <p>
                      The <strong>Gemini Chatbot App</strong> serves as a robust foundation for building such applications, utilizing n8n workflows to handle complex logic and integrations, ensuring that the AI operates within the specific context of your business needs.
                    </p>
                  </div>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-10">
              Other Creative Apps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AppsData.map((project, key) => (
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
                  className="animate_top rounded-lg bg-white dark:bg-blacksection p-4 shadow-solid-8 hover:shadow-solid-13 transition-all duration-300"
                >
                  <Link href={project.urlLink} target="_blank" className="block relative aspect-[16/9] mb-4">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </Link>
                  <h3 className="font-semibold text-lg text-black dark:text-white mb-2 hover:text-primary transition-colors">
                    <Link href={project.urlLink} target="_blank">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.metadata}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
