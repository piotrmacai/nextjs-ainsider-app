import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import Voiceflow from "@/components/Voiceflow";

const SingleBlogPage = () => {
  return (
    <>
      <title>{"smpolaniec.com.pl - Project Details"}</title>
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
                    <a href="https://smpolaniec.com.pl" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 hover:text-primary">smpolaniec.com.pl</a>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Company:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Spółdzielnia Mieszkaniowa Polaniec</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Industry:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Real Estate / Property Management</p>
                  </li>
                  <li className="last:mb-0 mb-3 transition-all duration-300">
                    <p>Project Technologies:</p>
                    <p className="text-white transition-all duration-300 hover:text-primary">Wordpress</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5">
                  smpolaniec.com.pl
                </h2>
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/66]">
                    <Image
                      src="/images/portfolio/smp.jpg"
                      alt="Website of Spółdzielnia Mieszkaniowa Polaniec"
                      layout="fill"
                      className="object-contain object-center rounded-md"
                    />
                  </div>
                </div>
                <div className="blog-details">
                  <p>The official website of the Housing Cooperative in Polaniec, containing information about the cooperative, news, apartment offers, and contact details for the management.</p>
                  <p>The website was designed with the aim of providing residents and interested parties with easy access to information about the cooperative's activities and improving communication between the management and residents, along with a system for managing payments/bills for residents.</p>
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
