"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const  Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
   <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 px-3 overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex flex-col md:flex-row"> {/* Added flex and flex-col for mobile view */}
          <div className="md:w-1/2 sm:w-full md:block mb-8 md:mb-0"> {/* Added mb-8 for mobile view */}
            <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
              🔥 Tailored To Needs
            </h4>
            <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16">
              Automations For Business
              <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5">
              </span>
            </h1>
            <p>With Management Systems Implementations</p>

            <div className="mt-10">
              <form   action="https://formspree.io/f/xyyqlvdz" target="_blank" method="POST">
                <div className="flex flex-wrap gap-5">
                  <input
                    type="email" name="email"
                    placeholder="Zostaw swój email"
                    className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
                  />
                  <button
                    type="submit"
                    value="Submit"
                    aria-label="contact"
                    className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                  >
                   Contact
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="md:w-1/2 sm:w-full md:block p-8 md:p-3"> {/* Removed the hidden class for mobile view */}
            <div className="relative 2xl:-mr-7.5">
              <Image
                src="/images/shape/shape-01.png"
                alt="shape"
                width={46}
                height={246}
                className="absolute -left-11.5 top-0"
              />
              <Image
                src="/images/shape/shape-02.svg"
                alt="shape"
                width={36.9}
                height={36.7}
                className="absolute right-0 bottom-0 z-10"
              />
              <Image
                src="/images/shape/shape-03.svg"
                alt="shape"
                width={21.64}
                height={21.66}
                className="absolute -right-6.5 bottom-0 z-1"
              />
              <div className="relative aspect-[700/444] w-full">
                <Image
                  className="dark:hidden shadow-solid-l"
                  src="/images/hero/hero-dark.svg"
                  alt="Hero"
                  fill
                />
                <Image
                  className="dark:block shadow-solid-l"
                  src="/images/hero/hero-dark.svg"
                  alt="Hero"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
