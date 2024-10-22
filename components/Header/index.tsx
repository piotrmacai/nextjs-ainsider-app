'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from 'react-i18next';
import ThemeToggler from "./ThemeToggler";
import getTranslatedMenuData from "./menuData";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();
  const menuData = getTranslatedMenuData();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  }, []);

  const handleMenuItemClick = () => {
    setNavigationOpen(false);
    setDropdownToggler(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 w-full z-20 py-7 ${
        stickyMenu
          ? "bg-white dark:bg-black shadow !py-4 transition duration-100"
          : ""
      }`}
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-2/5 flex items-center justify-between">
          <a href="/">
            <Image
              src="/images/logo/LogoWhiteX.png"
              alt="logo"
              width={120}
              height={120}
              className="w-full hidden dark:block"
            />
            <Image
              src="/images/logo/LogoDarkX.png"
              alt="logo"
              width={120}
              height={120}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="lg:hidden block mr-8"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="block relative cursor-pointer w-5.5 h-5.5">
              <span className="block absolute w-full h-full">
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${
                    !navigationOpen ? "!w-full delay-300" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${
                    !navigationOpen ? "!w-full delay-400" : ""
                  }`}
                ></span>
                <span
                  className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${
                    !navigationOpen ? "!w-full delay-500" : ""
                  }`}
                ></span>
              </span>
              <span className="block absolute w-full h-full rotate-45">
                <span
                  className={`block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-0 ${
                    navigationOpen ? "h-full delay-[0]" : ""
                  }`}
                ></span>
                <span
                  className={`block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-[.03rem] w-full h-0 ${
                    navigationOpen ? "h-0.5 dealy-200" : ""
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`w-full lg:w-full h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between ${
            navigationOpen &&
            "!visible bg-white dark:bg-blacksection shadow-solid-5 h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5"
          }`}
        >
          <nav>
            <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10 mr-2">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <a
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="hover:text-primary flex items-center justify-between gap-3 cursor-pointer"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="fill-waterloo group-hover:fill-primary w-3 h-3 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </a>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link
                              href={item.path || "#"}
                              onClick={handleMenuItemClick}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "hover:text-primary text-primary"
                          : "hover:text-primary"
                      }
                      onClick={handleMenuItemClick}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 mt-7 lg:mt-0">
          
           

            <ul className="flex items-center gap-5">
     
     {/* <li>
     <a href="https://x.com/piotrmacai" target="_blank">
         <svg
           className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M23.643 4.93701C22.808 5.21401 21.911 5.40301 20.968 5.48601C21.93 4.89801 22.668 3.99301 23.016 2.91301C22.116 3.45901 21.119 3.86101 20.058 4.10001C19.208 3.20301 17.998 2.62501 16.658 2.62501C13.998 2.62501 11.793 4.83001 11.793 7.49001C11.793 7.76501 11.823 8.03001 11.875 8.28401C7.728 8.08601 4.1 6.12001 1.671 3.14001C1.37 3.71101 1.205 4.35001 1.205 5.03001C1.205 6.65001 2.021 8.08001 3.22 8.96001C2.435 8.93901 1.67 8.73101 1 8.36101C1 8.38001 1 8.39901 1 8.41901C1 10.761 2.711 12.669 4.9 13.004C4.6 13.089 4.295 13.132 3.98 13.132C3.751 13.132 3.525 13.107 3.303 13.063C3.768 14.941 5.636 16.274 7.836 16.312C6.107 17.504 3.991 18.215 1.725 18.215C1.435 18.215 1.148 18.195 0.867 18.16C2.016 19.472 4.413 20.255 7.022 20.255C16.647 20.255 21.568 13.179 21.568 7.89001C21.568 7.68001 21.561 7.47101 21.552 7.26301C22.461 6.62301 23.212 5.83501 23.643 4.93701Z"
             fill=""
           />
         </svg>
       </a>
       </li>
       <li>
         <a href="https://www.linkedin.com/in/piotrmac0/" target="_blank">
           <svg
             className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <g clipPath="url(#clip0_48_1505)">
               <path
                 d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                 fill=""
               />
             </g>
             <defs>
               <clipPath id="clip0_48_1505">
                 <rect width="24" height="24" fill="white" />
               </clipPath>
             </defs>
           </svg>
         </a>
       </li> */}
       <li>
         <a href="https://www.github.com/aiwareai/" target="_blank">
           
         <Image src="/images/brand/github.png" alt="git" width={24} height={24} className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"/>
         </a>
       </li>
       <li>
         <a href="https://huggingface.co/Piotr-Macai" target="_blank">
           
         <Image src="/images/brand/hf-logo-pirate.svg" alt="git" width={24} height={24} className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"/>
         </a>
       </li>
       <li>
         <a href="https://www.behance.net/macaistudio" target="_blank">
           <svg
             className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
           </svg>
         </a>
       </li>
       <li>
         <a href="https://www.artstation.com/piotrmacai" target="_blank">
           <svg
             className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
           </svg>
         </a>
       </li>
     </ul>


            {/* <Link
              href="/contact"
              className="hidden sm:flex items-center justify-center bg-primary hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
              onClick={handleMenuItemClick}
            >
              {t('header.pricing')}🔥
            </Link> */}   
            <LanguageSwitcher />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
