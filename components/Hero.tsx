import React from 'react';
import Link from "next/link";

const Hero = () => {
  return (
    <header className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">SkyOPG</h1>
      <p className="text-gray-400 mb-8">Backend Developer</p>
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full">
        <Link href='https://discord.gg/codespiral'>
        Contact Me
        </Link>
      </button>
    </header>
  );
};

export default Hero;