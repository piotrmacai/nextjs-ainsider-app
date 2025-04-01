

import { FeatureTab } from "@/types/featureTab";
import { useTranslation } from 'react-i18next';

const getTranslatedFeaturesTabData = () => {
  const { t } = useTranslation();

const featuresTabData: FeatureTab[] = [
    {
      id: "tabOne",
      title: t('featuresTabResources.tab1Title'),
      desc1: t('featuresTabResources.tab1Description1'),
      desc2: t('featuresTabResources.tab1Description2'),
      image: "/images/features/undraw_solution_mindset.svg", 
      imageDark: "/images/features/undraw_solution_mindset.svg",
      link: "https://newsletter.ainsider.pl",
      linkText: t('featuresTabResources.tab1LinkText'),
    },
    {
      id: "tabTwo",
      title: t('featuresTabResources.tab2Title'),
      desc1: t('featuresTabResources.tab2Description1'),
      desc2: t('featuresTabResources.tab2Description2'),
      image: "/images/features/undraw_online_stats.svg", 
      imageDark: "/images/features/undraw_online_stats.svg", 
      link: "https://ainsider.pl",
      linkText: t('featuresTabResources.tab2LinkText'),
    },
    {
      id: "tabThree",
      title: t('featuresTabResources.tab3Title'),
      desc1: t('featuresTabResources.tab3Description1'),
      desc2: t('featuresTabResources.tab3Description2'),
      image: "/images/features/undraw_predictive.svg",
      imageDark: "/images/features/undraw_predictive.svg", 
      link: "https://x.com/piotrmacai",
      linkText: t('featuresTabResources.tab3LinkText'),
    },
  ];

return featuresTabData;
}
export default getTranslatedFeaturesTabData;