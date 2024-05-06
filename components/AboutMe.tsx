import React from 'react';
// Passionate Developer, Creative Mind, Tech Enthusiast
const AboutMe = ({ traits }: any) => {
  const idk = traits.trim().slice(", ")
  return (
    <section className="container mx-auto text-center py-12">
      <div className="flex justify-center">
        {idk.map((trait: string) => (
        <div className="bg-gray-800 text-white rounded-full p-4 mx-2">
          <p>{`${trait}`}</p>
        </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
