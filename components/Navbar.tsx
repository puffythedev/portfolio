"use client"
import React, { useState } from 'react';

const navItems = [
  { id: 1, label: 'Home', link: '#' },
  { id: 2, label: 'About', link: '#' },
  { id: 3, label: 'Projects', link: '#' },
  { id: 4, label: 'Contact', link: '#' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">SkyOPG</div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <a key={item.id} href={item.link} className="text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black absolute top-16 left-0 right-0 p-4">
          {navItems.map((item) => (
            <a key={item.id} href={item.link} className="block text-white mb-2">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;