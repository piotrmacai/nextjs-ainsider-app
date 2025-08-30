"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const MotionN8n = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative rounded-2xl py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/video/n8nvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center relative z-10"
        >
          {/* Header and Description */}
          {/* <div className="text-center mb-8 max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('aiCTA.maintitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              {t('aiCTA.mainsubtitle')}
            </p>
          </div> */}

          {/* Content Container with Semi-transparent Background */}
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden mb-8 relative group">
            <div className="bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center text-white"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {t('aiCTA.title')}
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  {t('aiCTA.subtitle')}
                </p>
              </motion.div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>{t('aiCTA.button')}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="currentColor"
                className="transform transition-transform group-hover:translate-x-1"
              >
                <path d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z" />
              </svg>
            </a>
            
            <p className="text-gray-300 mt-4 text-sm">
              {t('aiCTA.footertext')}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default MotionN8n;


// "use client";
// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useTranslation } from 'react-i18next';

// const MotionN8n = () => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <section className="py-20 lg:py-25 xl:py-30 px-4 md:px-8 2xl:px-0 overflow-hidden">
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           initial="hidden"
//           whileInView="visible"
//           transition={{ duration: 1, delay: 0.1 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center"
//         >
//           <div className="text-center mb-8 max-w-3xl">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
//               {t('aiCTA.title')}
//             </h2>
//             <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
//               {t('aiCTA.subtitle')}
//             </p>
//           </div>

//           <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl mb-8 relative group">
//             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500 z-10"></div>
//             <video
//               width="100%"
//               height="auto"
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
//             >
//               <source src="/images/video/n8nmotion.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
            
//             <div className="absolute inset-0 flex items-center justify-center z-20">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="text-center text-white p-6"
//               >
//                 <h3 className="text-2xl md:text-3xl font-semibold mb-4">
//                   {t('services.ctaTitle', 'Ready to Transform Your Business?')}
//                 </h3>
//                 <p className="text-lg opacity-90 mb-6">
//                   {t('services.ctaSubtitle', 'Let\'s discuss your project and create something amazing together')}
//                 </p>
//               </motion.div>
//             </div>
//           </div>

//           <div className="text-center">
//             <a
//               href="/services"
//               className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
//             >
//               <span>{t('aiCTA.button')}</span>
//               <svg
//                 width="18"
//                 height="18"
//                 viewBox="0 0 14 14"
//                 fill="currentColor"
//                 className="transform transition-transform group-hover:translate-x-1"
//               >
//                 <path d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z" />
//               </svg>
//             </a>
            
//             <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">
//               {t('services.footerText', 'Free consultation • No commitment • Professional guidance')}
//             </p>
//           </div>
//         </motion.div>
//       </section>
//     </>
//   );
// };

// export default MotionN8n;