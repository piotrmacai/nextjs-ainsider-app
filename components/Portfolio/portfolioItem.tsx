

"use client";

import Image from "next/image";
import { Portfolio } from "@/types/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const PortfolioItem = ({ portfolio }: { portfolio: Portfolio }) => {
  const { t } = useTranslation();
  const { mainImage, title, metadata = "", urlLink, tags } = portfolio;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-6 hover:shadow-solid-12 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Image - Left side - 50% width on large screens */}
        <div className="w-full lg:w-1/2 relative">
          <Link href={urlLink} className="block relative aspect-[16/9] w-full" target="_blank" rel="noopener noreferrer">
            <Image
              src={mainImage}
              alt={t(title)}
              fill
              className="rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              style={{ objectPosition: 'center' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </Link>
        </div>

        {/* Content - Right side - 50% width on large screens */}
        <div className="w-full lg:w-1/2 lg:pl-4">
          <h3 className="font-semibold text-2xl lg:text-3xl text-black dark:text-white mb-4 hover:text-primary dark:hover:text-primary transition-colors duration-300">
            <Link href={urlLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {t(title)}
            </Link>
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            {t(metadata)}
          </p>

          {/* Tags display */}
          {/* <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full px-4 py-1.5 text-sm font-medium"
              > 
                #{tag}
              </span>
            ))}
          </div>
           */}
          <Link
            href={urlLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white dark:text-white md:mt-14 mt-2 font-medium text-lg hover:underline group"
          >
            Projects
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;

// "use client";

// import Image from "next/image";
// import { Portfolio } from "@/types/portfolio";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const PortfolioItem = ({ portfolio }: { portfolio: Portfolio }) => {
//   const { mainImage, title, metadata, urlLink, tags } = portfolio; // Destructure `tags` from `portfolio`

//   return (
//     <>
//       <motion.div
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: -20,
//           },
//           visible: {
//             opacity: 1,
//             y: 0,
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 1, delay: 0.5 }}
//         viewport={{ once: true }}
//         className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-2"
//       >
//         <Link href={urlLink} className="block relative aspect-[368/239]" target="_blank" rel="noopener noreferrer">
//           <Image src={mainImage} alt={title} fill style={{ borderRadius: '10px' }}/>
//         </Link>

//         <div className="px-2">
//           <h4 className="font-medium text-md xl:text-xl text-black hover:text-primary dark:hover:text-primary dark:text-white mt-7.5 mb-3.5">
//             <Link href={urlLink} target="_blank" rel="noopener noreferrer">
//               {title}
//             </Link>
//           </h4>
{/* <p className="text-sm">
            {metadata}
          </p> */}

{/* Display tags */ }
{/* <div className="mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-1 mb-1">
                {tag}
              </span>
            ))}
          </div> */}
{/* </div>
      </motion.div>
    </>
  );
};

export default PortfolioItem; */}



// import Image from "next/image";
// import { Portfolio } from "@/types/portfolio";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const PortfolioItem = ({ portfolio }: { portfolio: Portfolio }) => {
//   const { mainImage, title, metadata, urlLink } = portfolio;

//   return (
//     <>
//       <motion.div
//         variants={{
//           hidden: {
//             opacity: 0,
//             y: -20,
//           },

//           visible: {
//             opacity: 1,
//             y: 0,
//           },
//         }}
//         initial="hidden"
//         whileInView="visible"
//         transition={{ duration: 1, delay: 0.5 }}
//         viewport={{ once: true }}
//         className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-9"
//       >
//         <Link href={urlLink} className="block relative aspect-[368/239]" target="_blank" rel="noopener noreferrer">
//           <Image src={mainImage} alt={title} fill style={{ borderRadius: '10px' }}/>
//         </Link>

//         <div className="px-4">
//           <h4 className="font-medium text-md xl:text-xl text-black hover:text-primary dark:hover:text-primary dark:text-white mt-7.5 mb-3.5">
//             <Link href={urlLink} target="_blank" rel="noopener noreferrer">
//               {" "}
//               {title}
//             </Link>
//           </h4>
//           <p className="text-sm">{metadata}</p>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default PortfolioItem;
