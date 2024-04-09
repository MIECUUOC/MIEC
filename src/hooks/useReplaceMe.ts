import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const useReplaceMe = () => {
  const { i18n } = useTranslation(); // Get the i18n object

  useEffect(() => {
    let replace: any;
    const options = {
      speed: 2500,
      separator: ',',
      clickChange: false,
      loopCount: 'infinite'
    };

    // Function to initialize or re-initialize the ReplaceMe plugin
    const initializeReplaceMe = () => {
      const ReplaceMe = require('plugins/replaceme');

      if (document.querySelector('.rotator-zoom') !== null) {
        replace = new ReplaceMe(document.querySelector('.rotator-zoom'), {
          ...options,
          animation: 'animate__animated animate__zoomIn'
        });
      }
      if (document.querySelector('.rotator-fade') !== null) {
        replace = new ReplaceMe(document.querySelector('.rotator-fade'), {
          ...options,
          animation: 'animate__animated animate__fadeInDown'
        });
      }
    };

    // Initial call to set up ReplaceMe
    initializeReplaceMe();

    // Cleanup function to stop the ReplaceMe plugin when the component unmounts or language changes
    return () => replace?.stop();
  }, [i18n.language]); // Include the current language as a dependency

  return;
};

export default useReplaceMe;
