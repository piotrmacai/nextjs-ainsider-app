import { Feature } from "@/types/feature";
import { useTranslation } from 'react-i18next';

const getTranslatedFeatures = () => {
  const { t } = useTranslation();

  const featuresData: Feature[] = [
    {
      id: 1,
      icon: "/images/icon/undraw_innovative.svg",
      title: t('webfeatures.1Title'),
      description: t('webfeatures.1Description'),
    },
    {
      id: 2,
      icon: "/images/icon/undraw_active.svg",
      title: t('webfeatures.2Title'),
      description: t('webfeatures.2Description'),
    },
    {
      id: 3,
      icon: "/images/icon/undraw_ecom.svg",
      title: t('webfeatures.3Title'),
      description: t('webfeatures.3Description'),
    },
    {
      id: 4,
      icon: "/images/icon/undraw_website_builder.svg",
      title: t('webfeatures.4Title'),
      description: t('webfeatures.4Description'),
    },
    {
      id: 4,
      icon: "/images/icon/undraw_social.svg",
      title: t('webfeatures.5Title'),
      description: t('webfeatures.5Description'),
    },


    {
      id: 6,
      icon: "/images/icon/undraw_product_iteration.svg",
      title: t('webfeatures.6Title'),
      description: t('webfeatures.6Description'),
    },
    {
      id: 7,
      icon: "/images/icon/undraw_online-community.svg",
      title: t('webfeatures.7Title'),
      description: t('webfeatures.7Description'),
    },
    {
      id: 8,
      icon: "/images/icon/undraw_chat-withai.svg",
      title: t('webfeatures.8Title'),
      description: t('webfeatures.8Description'),
    },
    {
      id: 9,
      icon: "/images/icon/undraw_chat-bot.svg",
      title: t('webfeatures.9Title'),
      description: t('webfeatures.9Description'),
    },




  ];

  return featuresData;
};

export default getTranslatedFeatures;

// import { Feature } from "@/types/feature";

// const featuresData: Feature[] = [
//   {
//     id: 1,
//     icon: "/images/icon/icon-01.svg",
//     title: "Landing Pages",
//     description:
//     "Modern and tailored websites, created in any technology or using selected templates - but always created to achieve your goals",
//     },
//     {
//     id: 2,
//     icon: "/images/icon/icon-03.svg",
//     title: "Business Websites",
//     description:
//     "Created for selling and promoting and always modern and tailored websites - always created to achieve your goals",
//     },
//     {
//     id: 3,
//     icon: "/images/icon/icon-05.svg",
//     title: "Ecommerce Platforms",
//     description:
//     "Powerful e-commerce platforms that increase sales, improve user experiences, and grow your business.",
//     },
//     {
//     id: 4,
//     icon: "/images/icon/icon-02.svg",
//     title: "Custom Internet Platforms",
//     description:
//     "Tailored to your e-commerce business for improving user experiences, and grow your business.",
//     },
//     {
//     id: 5,
//     icon: "/images/icon/icon-04.svg",
//     title: "Marketing & Lead Generation",
//     description:
//     "I understand that reaching your target audience and turning new customers into loyal customers is definitely the main priorities for your business - as well as our collaboration with you.",
//     },
//     {
//       id: 6,
//       icon: "/images/icon/icon-04.svg",
//       title: "SEO and Website Positioning",
//       description: "Increase visibility, get more leads, get more clients by comprehensive SEO and marketing services."
//   },


// ];

// export default featuresData;


// import { Feature } from "@/types/feature";

// const featuresData: Feature[] = [
//   {
//     id: 1,
//     icon: "/images/icon/icon-01.svg",
//     title: "Chatboty dla wsparcia klienta",
//     description:
//       "Nowoczesne i szyte na miarę strony internetowe, stworzone w dowolnej technologii lub przy użyciu wybranego szablonu - lecz zawsze stworzone w celu osiągnięcia Twoich celów",
//   },
//   {
//     id: 2,
//     icon: "/images/icon/icon-02.svg",
//     title: "Chatboty dla generacji leadów",
//     description:
//       "Rozwiązania e-commerce, które zwiększają sprzedaż, poprawiają doświadczenia użytkowników i rozwijają Twój biznes",
//   },
//   {
//     id: 3,
//     icon: "/images/icon/icon-03.svg",
//     title: "Chatboty dla Ecommerce",
//     description:
//       "Rozumiemy, że dotarcie do Twojej grupy docelowej i pozyskiwanie nowych klientów w lojalnych klientów to zdecydowanie główne priorytety dla Twojego biznesu - jak i Naszej wspólpracy z Tobą.",
//   },
//   {
//     id: 4,
//     icon: "/images/icon/icon-04.svg",
//     title: "Wykorzystanie AI w biznesie",
//     description:
//       "Z pomocą AI stworzymy dopasowane do Twoich potrzeb chatboty AI wyszkolone na konretnych danych, jak i wykorzystamy AI do powtarzalnych zadań.",
//   },
//   {
//     id: 5,
//     icon: "/images/icon/icon-05.svg",
//     title: "Automatyzacje",
//     description:
//       "Pomożemy Ci w automatyzacji różnorodnych zadań i procesów dla firm, organizacji i osób prywatnych, wdrażając automatyzacje jak i szkoląc z ich zakresu.",
//   },
//   {
//     id: 6,
//     icon: "/images/icon/icon-06.svg",
//     title: "Social Media",
//     description:
//       "Wspólnie stworzymy atrakcyjne logo, szablony UX/UI oraz wszelkiego rodzaju treści na media społecznościowe, a także plakaty, wizytówki i banery reklamowe.",
//   },
// ];

// export default featuresData;
