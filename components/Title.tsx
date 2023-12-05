import React from 'react';

const Title = ({ title, desc }: { title: string; desc: string; }) => {
  return (
    <div className="text-center py-10">
      <h1 className="text-5xl font-bold mb-4">{`${title}`}</h1>
      <p className="text-gray-400 mb-8">{`${desc}`}</p>
    </div>
  );
};

export default Title;