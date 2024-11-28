"use client";
import React from "react";
import featuresData from "./FeaturesData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../../Common/SectionHeader";
import { useTranslation } from 'react-i18next';
import getTranslatedFeatures from "./FeaturesData";

const Feature = () => {
  const { t } = useTranslation();
  const featuresData = getTranslatedFeatures();
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-10 lg:py-10 xl:py-15 px-8">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: t('features.header.title'),
              subtitle: t('features.header.subtitle'),
              description: t('features.header.description'),
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} t={t}/>
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;


// "use client";
// import React from "react";
// import featuresData from "./AutomationFeaturesData";
// import SingleFeature from "./SingleFeature";
// import SectionHeader from "../../Common/SectionHeader";

// const Feature = () => {
//   return (
//     <>
//       <section id="features" className="py-20 lg:py-25 xl:py-30">
//         <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
//           <SectionHeader
//             headerInfo={{
//               title: "How Can I Help You?",
//               subtitle: "My Services and Specialisations",
//               description: `Tailored to Your Needs - Solving Your Problems`,
//             }}
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">

//             {featuresData.map((feature, key) => (
//               <SingleFeature feature={feature} key={key} />
//             ))}
//           </div>
//         </div>
//       </section>

  
//     </>
//   );
// };

// export default Feature;
