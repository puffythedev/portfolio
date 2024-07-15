import React, { useEffect, useState } from 'react';

const AccessCounter: React.FC = () => {
  const [accessCount, setAccessCount] = useState<number>(0);

  useEffect(() => {
    // Retrieve the count from localStorage or initialize to 0
    const storedCount = localStorage.getItem('accessCount');
    const count = storedCount ? parseInt(storedCount, 10) : 0;

    // Update state
    setAccessCount(count + 1);

    // Save the new count back to localStorage
    localStorage.setItem('accessCount', (count + 1).toString());
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Page Access Counter</h1>
      <p>This page has been accessed {accessCount} time(s).</p>
    </div>
  );
};

export default AccessCounter;
