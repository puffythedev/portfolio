// components/Preloader.tsx
import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        showPreloader ? 'visible' : 'invisible'
      }`}
    >
      <img
        src="https://media.kars.bio/assets/pfp.gif"
        alt="Preloader"
        className="rounded-full"
        style={{ width: '50px', height: '50px' }}
      />
    </div>
  );
};

export default Preloader;