import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import Voiceflow from "@/components/Voiceflow";

const SingleBlogPage = () => {
  return (
    <>
      <title>{"paintball-osada.pl - Project Details"}</title>
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
                    <a href="https://paintball-osada.pl" className="text-white transition-all duration-300 hover:text-primary">paintball-osada.pl</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Paintball Osada Wałbrzych</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Entertainment / Paintball</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Project Technologies:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">WordPress</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  paintball-osada.pl
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/72]">
                    <Image
                      src="/images/portfolio/paintball.jpg"
                      alt="Osada Paintball website"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                  <p>The "Osada Paintball" project is a dynamic website created using WordPress, dedicated to paintball enthusiasts and group entertainment. The website combines modern design with functionality, offering users comprehensive information about available paintball games, the possibility of booking dates, and organizing group events. Thanks to the use of WordPress and a specially selected range of plugins, the website offers a range of features that facilitate interaction with customers and content management.</p>
                  <p>The website "paintball-osada.pl" stands out for its excellent optimization and outstanding performance in Google search results, which is the result of carefully executed SEO activities. By using the right keywords, optimizing content, and ensuring fast page loading, a high position in search results for phrases related to paintball and group entertainment was achieved. This optimization not only increased the website's visibility in Google but also contributed to the increase in organic traffic and interest in the Osada Paintball offer, providing the company with a solid competitive advantage in the entertainment market.</p>
                  <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  Google's #1 Position for Paintball in Lower Silesia
                </h2>
                <div className="relative aspect-[97/60] w-full sm:aspect-[97/78]">
                    <Image
                      src="/images/portfolio/paintball-google.jpg"
                      alt="Paintball osada"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                  <p>The website "paintball-osada.pl" achieved the prestigious first position in Google search results for the phrases "paintball Wałbrzych" and other key queries related to paintball in Lower Silesia. This impressive result is the effect of a carefully planned and executed SEO strategy, which included optimizing the website's content for local keywords, improving technical parameters, and building a valuable backlink profile. Thanks to these actions, "paintball-osada.pl" not only dominates in local searches related to paintball but also effectively attracts enthusiasts of this sport from the Lower Silesia region, providing the company with a solid customer base and brand recognition within the local community.</p>

                
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
