// pages/index.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Testimonials from '@/components/Testimonials';

const Home = () => (
  <div className="bg-black text-white">
    <Preloader />

    <Navbar />  
    <Hero />
    <AboutMe />
    <Testimonials />
    <Footer />
  </div>
);

export default Home;
