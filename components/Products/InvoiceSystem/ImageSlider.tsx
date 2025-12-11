"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const IMAGES = [
    "/images/genai/genailogo1.jpeg",
    "/images/genai/genailogo2.jpeg",
    "/images/genai/genailogo3.jpeg",
    "/images/genai/genai_money.jpeg",
];

const ImageSlider = () => {
    return (
        <div className="w-full relative px-12 group">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="w-full"
            >
                {IMAGES.map((src, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg">
                            <Image
                                src={src}
                                alt={`GenAI Logo ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shadow-lg text-indigo-600 dark:text-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shadow-lg text-indigo-600 dark:text-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );
};

export default ImageSlider;
