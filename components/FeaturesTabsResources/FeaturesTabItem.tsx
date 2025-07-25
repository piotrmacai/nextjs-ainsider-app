import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import Link from "next/link";

interface Props {
  featureTab: FeatureTab;
}

const FeaturesTabItem: React.FC<Props> = ({ featureTab }) => {
  const { t } = useTranslation();
  const { title, desc1, desc2, image, imageDark, link, linkText } = featureTab;

  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3">
          <h2 className="text-black dark:text-white text-xl xl:text-2xl font-bold mb-7">
            {t(title)}
          </h2>
          <p className="mb-5">{t(desc1)}</p>
          <p className="w-11/12">{t(desc2)}</p>

        </div>
        <div className="md:flex md:items-center md:justify-center  md:w-1/3 relative mx-auto aspect-[562/366] max-w-[550px]">
          {/* <Image src={image} alt={t(title)} fill className="dark:hidden" />
          <Image src={imageDark} alt={t(title)} fill className="hidden dark:block" /> */}
             {link && linkText && (
            <div className="flex md:items-center md:justify-center">
              <Link 
                href={link}
                className="text-blue-600 dark:text-blue-400 hover:underline px-4 py-2 border border-transparent rounded-2xl text-sm font-medium text-white bg-primary hover:bg-secondary/90 transition-colors duration-200 mt-4 md:mt-0"
                target={link.startsWith('#') ? '_self' : '_blank'}
                rel={link.startsWith('#') ? '' : 'noopener noreferrer'}
              >
                {t(linkText)} →
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;

// import React from "react";
// import { FeatureTab } from "@/types/featureTab";
// import Image from "next/image";
// import { useTranslation } from 'react-i18next';

// interface Props {
//   featureTab: FeatureTab;
// }

// const FeaturesTabItem: React.FC<Props> = ({ featureTab }) => {
//   const { t } = useTranslation();
//   const { title, desc1, desc2, image, imageDark } = featureTab;

//   return (
//     <>
//       <div className="flex items-center gap-8 lg:gap-19">
//         <div className="md:w-1/2">
//           <h2 className="text-black dark:text-white text-xl xl:text-2xl font-bold mb-7">
//             {t(title)}
//           </h2>
//           <p className="mb-5">{t(desc1)}</p>
//           <p className="w-11/12">{t(desc2)}</p>
//         </div>
//         <div className="hidden md:block md:w-1/2 relative mx-auto aspect-[562/366] max-w-[550px]">
//           <Image src={image} alt={t(title)} fill className="dark:hidden" />
//           <Image src={imageDark} alt={t(title)} fill className="hidden dark:block" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeaturesTabItem;


// import React from "react";
// import { FeatureTab } from "@/types/featureTab";
// import Image from "next/image";
// import { useTranslation } from 'react-i18next';

// interface Props {
//   feature: FeatureTab;
//   t: (key: string) => string; // Ensure correct type for t function
// }

// const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
//   const { title, desc1, desc2, image, imageDark } = featureTab;

//   return (
//     <>
//       <div className="flex items-center gap-8 lg:gap-19">
//         <div className="md:w-1/2">
//           <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">
//             {title}
//           </h2>
//           <p className="mb-5">{desc1}</p>
//           <p className="w-11/12">{desc2}</p>
//         </div>
//         <div className="hidden md:block md:w-1/2 relative mx-auto aspect-[562/366] max-w-[550px]">
//           <Image src={image} alt={title} fill className="dark:hidden" />
//           <Image
//             src={imageDark}
//             alt={title}
//             fill
//             className="hidden dark:block"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeaturesTabItem;
