import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";

const SingleBlogPage = () => {
  return (
    <>
      <title>{"AI Chatbot for AI Tools Library - Project Details"}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 mb-10">
                <h4 className="font-semibold text-2xl text-black dark:text-white mt-2 mb-7.5">
                  Project Details
                </h4>
                <ul>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Link:</p>
                    <a href="https://ainsider.tools" className="text-white transition-all duration-300 hover:text-primary">ainsider.tools</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Ainsider</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">AI & Automation</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Project Technologies:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">OpenAI, Voiceflow</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  AI Chatbot for AI Tools Library
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/75]">
                    {/* Example image, replace with the appropriate one if available */}
                    <Image
                      src="/images/portfolio/aiwareChatbot.jpg"
                      alt="AI Chatbot for AI Tools Library"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                  <p>Project undertaken for Ainsider, aiming to create an advanced AI chatbot using the ChataGPT API and the Voiceflow platform.</p>
                  <p>Its main task is to assist users in navigating through the extensive AI tools library, offering intuitive and quick solutions for their needs. Thanks to advanced use of the GPT API, the chatbot is capable of providing precise and contextually relevant responses, greatly streamlining the process of information retrieval and decision-making regarding the choice of AI tools.</p>
                </div>
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
