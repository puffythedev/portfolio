// pages/index.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

const Home = () => (
  <div className="bg-black text-white">
    <Preloader />

    <Navbar />  
    <Hero />
    <AboutMe />
    <Footer />
  </div>
);

export default Home;
