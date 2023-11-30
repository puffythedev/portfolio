// pages/index.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

const Home = () => (
  <div className="bg-black text-white">

    <Navbar />
    <Hero />
    <AboutMe />
    <Footer />
  </div>
);

export default Home;
