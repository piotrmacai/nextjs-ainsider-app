import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

interface Props {
  featureTab: FeatureTab;
}

const FeaturesTabItem: React.FC<Props> = ({ featureTab }) => {
  const { t } = useTranslation();
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      // Zmiana: Usunięto tło, cienie i ramki, aby dopasować do efektu Glassmorphism nadrzędnego kontenera
      className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 p-4 rounded-none"
    >

      {/* */}
      <div className="order-1 md:w-2/3">
        <h2 className="text-black dark:text-white text-3xl xl:text-4xl font-extrabold mb-6 leading-tight">
          {t(title)}
        </h2>
        {/* Kontrastowy podział tekstu */}
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-primary pl-4">
          {t(desc1)}
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 leading-relaxed">
          {t(desc2)}
        </p>
      </div>

      {/* */}
      <div className="order-2 md:w-1/3 relative mx-auto aspect-[562/366] max-w-full">
        <Image
          src={image}
          alt={t(title)}
          fill
          className="dark:hidden object-contain rounded-lg shadow-lg"
        />
        <Image
          src={imageDark}
          alt={t(title)}
          fill
          className="hidden dark:block object-contain rounded-lg shadow-lg"
        />
      </div>

    </motion.div>
  );
};

export default FeaturesTabItem;