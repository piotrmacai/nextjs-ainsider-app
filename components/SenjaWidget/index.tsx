// components/SenjaWidget.tsx
'use client'

import { useEffect } from 'react';
import SectionHeader from "../Common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from 'react-i18next';

import { motion } from "framer-motion";
import Image from "next/image";


const SenjaWidget: React.FC = () => {
    const { t } = useTranslation();

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/widget/85f247eb-1c8f-42bd-8fe8-8f04f7ddbf60/platform.js';
    script.async = true;
    script.type = 'text/javascript';

    // Append script to the document
    document.body.appendChild(script);

    // Cleanup function to remove script if component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    
    <>
    <section className="pt-25">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
                title: t('senja.title'),
                subtitle: t('senja.subtitle'),
                description: t('senja.description'),
            }}
          />
        <div className="mx-auto pt-8 max-w-c-1315 px-4 md:px-8 xl:px-0">
            <div
      className="senja-embed"
      data-id="85f247eb-1c8f-42bd-8fe8-8f04f7ddbf60"
      data-mode="shadow"
      data-lazyload="false"
      style={{ display: 'block' }}
    />
        </div>
        </div>
        {/* <!-- Section Title End --> */}
    
      </div>
    </section>
  </>
  );
};

export default SenjaWidget;
