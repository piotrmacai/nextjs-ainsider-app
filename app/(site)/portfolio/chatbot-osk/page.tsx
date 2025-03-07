import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";

const SingleBlogPage = () => {
  return (
    <>
      <title>{"szkolajazdymachowski.pl - Project Details"}</title>
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
                    <a href="https://cdn.botpress.cloud/webchat/v2.1/shareable.html?botId=ae063aa4-8325-421d-8e9f-b087afaa36f7" className="text-white transition-all duration-300 hover:text-primary">Talk with that Assistant</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Szkoła Jazdy Machowski</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Education / Professional Development</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Project Technologies:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Botpress + OpenAI GPT</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  AI Chatbot for szkolajazdymachowski.pl
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src="/images/portfolio/szkolachatbot.jpg"
                      alt="Szkoła Jazdy Machowski website"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                  <p>The "Szkoła Jazdy Machowski" project encompasses not only an advanced website but also an innovative solution in the form of an AI Chatbot, developed using the Voiceflow platform and OpenAI technology. This interactive assistant has been designed to streamline communication with future students and automate lead generation processes. The AI Chatbot plays a key role in customer service, offering instant responses to frequently asked questions and providing comprehensive support to visitors.</p>
                  <h2>Key Features of the AI Chatbot for Szkoła Jazdy Machowski:</h2>
                  <ul>
  <li>Query Automation: The chatbot is programmed to handle a wide range of queries, from simple questions about course offerings to more complex issues related to registration procedures and requirements. Using artificial intelligence, the chatbot can understand and interpret user queries, offering precise and understandable responses.</li>

  {/* <li>Lead Generation: The AI assistant actively supports the process of acquiring potential clients by collecting contact information from individuals interested in the school's offerings. This mechanism allows for efficient lead segmentation and communication automation, significantly increasing the effectiveness of marketing efforts.</li> */}

  <li>24/7 Support: The availability of the chatbot around the clock significantly enhances user satisfaction by providing support at any time. Regardless of the time of day, potential students can access the necessary information, resulting in a higher level of customer service.</li>

  <li>Intuitive Navigation: The chatbot facilitates website navigation by directing users to the appropriate sections and resources. As a result, prospective students can find the information they are interested in more quickly, increasing the likelihood of course enrollment.</li>

</ul>
<p>Implementing the AI Chatbot on the "Szkoła Jazdy Machowski" website is an example of effective use of modern technologies to optimize customer service and automate business processes. Through integration with Voiceflow and OpenAI, the chatbot not only improves communication with users but also contributes to increased conversions by offering uninterrupted support and facilitating access to key information.</p>
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
