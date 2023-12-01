// components/Preloader.tsx
import React, { useEffect, useState } from 'react';
import styles from './Preloader.module.css'; 

const Preloader: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center ${
        showPreloader ? 'visible' : 'invisible'
      } ${styles.preloaderContainer}`}
    >
      <img
        src="https://media.kars.bio/assets/pfp.gif"
        alt="Preloader"
        className="rounded-full mb-4"
        style={{ width: '50px', height: '50px' }}
      />
      <div className={`${styles.loadingBar} ${showPreloader ? styles.animate : ''}`}></div>
    </div>
  );
};

export default Preloader;
