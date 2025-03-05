import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import Voiceflow from "@/components/Voiceflow";

const SingleBlogPage = () => {
  return (
    <>
      <title>{"voltoninstall.pl - Project Details"}</title>
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
                    <a href="https://voltoninstall.pl" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 hover:text-primary">voltoninstall.pl</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Volton Install</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Electrical Services / Smart Home</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Project Technologies:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">HTML, CSS, JavaScript</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  voltoninstall.pl
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/70]">
                    <Image
                      src="/images/portfolio/volton.jpg"
                      alt="Website of Volton Install company"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                  <p>The website "voltoninstall.pl" was created as a showcase for the Volton Install company, specializing in modern electrical installations and Smart Home systems. Designed using HTML, CSS, and JavaScript, the website combines modernity and functionality, presenting a wide range of services from design to installation of smart home systems and professional electrical installations.</p>
                  <p>In addition to high usability, "voltoninstall.pl" stands out with excellent SEO optimization, allowing the website to achieve high positions in Google search results for key phrases related to electrical services and smart home. With carefully chosen keywords, content optimization, and fast loading speed, the website attracts significant organic traffic, directly translating into increased interest in the offered services. This combination of modern design, functionality, and effective SEO optimization makes the website "voltoninstall.pl" a key tool in promoting and developing the company in the electrical services and smart home solutions market.</p>
                </div>
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Voiceflow/>
    </>
  );
};

export default SingleBlogPage;
