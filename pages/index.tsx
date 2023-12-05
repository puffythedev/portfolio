// pages/index.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects'
import Head from 'next/head';

const Home = () => (
  <div className="bg-black text-white">
    <Head>
      <meta name='title' content='SkyOPG - Developer' />
      <meta name='description' content="SkyOPG's official portfolio, made with hopes and dreams" />
    </Head>
    <Preloader />

    <Navbar />  
    <Hero />
    <AboutMe />
    <Testimonials />
    <Projects />
    <Footer />
  </div>
);

export default Home;
