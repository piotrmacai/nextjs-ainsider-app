import { Menu } from "@/types/menu";
import { useTranslation } from 'react-i18next';

const getTranslatedMenuData = () => {
  const { t } = useTranslation();

  const menuData: Menu[] = [
    {
      id: 1,
      title: t('header.menu1'),
      newTab: false,
      path: "/",
      icon: "/images/icon/home.svg",
    },
 
    {
      id: 3,
      title: t('header.menu3'),
      newTab: true,
      path: "#",
      icon: "/images/icon/phone.svg",
      submenu: [   
        {
          id: 1,
          title: t('header.menuServices'),
          newTab: true,
          path: "/web",
          icon: "/images/icon/phone.svg",
        },
        {
          id: 2,
          title: t('header.menu12'),
          newTab: false,
          path: "/bots",
          icon: "/images/icon/bag.svg",
        },
        {
          id: 3,
          title: t('header.menuAutomations'),
          newTab: false,
          path: "/automations",
          icon: "/images/icon/bag.svg",
        },
        {
          id: 3,
          title: "AI Newsletter",
          newTab: true,
          path: t('header.menubeehiiv'),
          icon: "/images/icon/phone.svg",
        },
        // {
        //   id: 3,
        //   title: t('header.menuapps'),
        //   newTab: true,
        //   path: "/apps",
        //   icon: "/images/icon/phone.svg",
        // },
        {
          id: 3,
          title: t('header.menu14'),
          newTab: true,
          path: t('header.menutools'),
          icon: "/images/icon/phone.svg",
        },   
        {
          id: 3,
          title: t('header.menu13'),
          newTab: true,
          path: "https://ainsider.pl/",
          icon: "/images/icon/phone.svg",
        }, 
        {
          id: 3,
          title: "AI Agent Templates",
          newTab: true,
          path: "/docs",
          icon: "/images/icon/phone.svg",
        },
        // {
        //   id: 8,
        //   title: "AI Agents Docs",
        //   newTab: true,
        //   path: "/docs",
        //   icon: "/images/icon/phone.svg",
        // },
        // {
        //   id: 34,
        //   title:  t('header.menu10'),
        //   newTab: true,
        //   path: "/#headerMarketing",
        // },
        // {
        //   id: 35,
        //   title:  t('header.menu8'),
        //   newTab: true,
        //   path: "/generativeai",
        // },
      ],
    },   
    {
      id: 4,
      title: t('header.agents'),
      newTab: true,
      path: "#",
      icon: "/images/icon/phone.svg",
      submenu: [   
        {
          id: 1,
          title: "Client Support AI Agent",
          newTab: true,
          path: "/supportbot",
          icon: "/images/icon/phone.svg",
        },
        {
          id: 2,
          title: "Lead Generation Agent",
          newTab: false,
          path: "/leadbot",
          icon: "/images/icon/bag.svg",
        },
        {
          id: 3,
          title: "Ecommerce Agent",
          newTab: false,
          path: "/ecombot",
          icon: "/images/icon/bag.svg",
        },
        {
          id: 3,
          title: "Voice AI Agent",
          newTab: true,
          path: "/voicebot",
          icon: "/images/icon/phone.svg",
        },  
        {
          id: 3,
          title: "Local & Private AI Agent",
          newTab: true,
          path: "/localbot",
          icon: "/images/icon/phone.svg",
        }, 
        {
          id: 5,
          title: "AI Agent Templates",
          newTab: true,
          path: "/docs",
          icon: "/images/icon/phone.svg",
        }, 
        // {
        //   id: 6,
        //   title: "Our AI Assitants",
        //   newTab: true,
        //   path: "/apps",
        //   icon: "/images/icon/phone.svg",
        // }, 
        // {
        //   id: 6,
        //   title: "AI Agents Docs",
        //   newTab: true,
        //   path: "/docs",
        //   icon: "/images/icon/phone.svg",
        // }, 
      ],
    },   
    {
      id: 2,
      title: t('header.menu2'),
      newTab: false,
      path: "/portfolio",
      icon: "/images/icon/bag.svg",
    },
    {
      id: 4,
      title: t('header.menu4'),
      newTab: false,
      path: "/contact",
      icon: "/images/icon/phone.svg",
    },
  ];

  return menuData;
};

export default getTranslatedMenuData;


// const menuData: Menu[] = [
//   {
//     id: 1,
//     title: "Home",
//     newTab: false,
//     path: "/",
//     icon: "/images/icon/home.svg",
//   },
//   {
//     id: 2,
//     title: "Portfolio",
//     newTab: false,
//     path: "/portfolio",
//     icon: "/images/icon/bag.svg",
//   },
//   {
//     id: 3,
//     title: "Services",
//     newTab: true,
//     path: "#",
//     icon: "/images/icon/phone.svg",
//     submenu: [
//       {
//         id: 31,
//         title: "Web & Ecommerce",
//         newTab: true,
//         path: "/apps/web",
//       },
//       {
//         id: 32,
//         title: "AI Assistants & Agents",
//         newTab: true,
//         path: "/apps/support-chatbot",
//       },
//       {
//         id: 33,
//         title: "Automations",
//         newTab: true,
//         path: "/apps/automation",
//       },
//       {
//         id: 34,
//         title: "Generative AI",
//         newTab: true,
//         path: "/generativeai",
//       },
  
//     ],
//   },

//   {
//     id: 4,
//     title: "Contact",
//     newTab: false,
//     path: "/contact",
//     icon: "/images/icon/phone.svg",
//   },
// ];

// export default menuData;
