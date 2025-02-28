"use client"
import Link from 'next/link';
import React, { useState } from 'react';

interface NavItem {
  id: number;
  label: string;
  link: string;
}
const navItems: NavItem[] = [
  { id: 1, label: 'Home', link: '#' },
  { id: 2, label: 'About', link: '#' },
  { id: 3, label: 'Projects', link: '#projects' },
  { id: 4, label: 'Contact', link: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDialog, setDialog] = useState(false);

  const textbox = () => {
	setDialog(!isDialog);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 fixed w-full top-0 backdrop-filter backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <text className="text-white font-bold text-xl uppercase focus:outline-none focus:ring" onClick={textbox}>Puffy</text>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none backdrop-blur-md"
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
        <div className="lg:hidden bg-black absolute top-16 left-0 right-0 p-4 backdrop-filter backdrop-blur-md">
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
