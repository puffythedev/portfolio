// pages/index.jsx
import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const Home = () => (
  <div className="bg-black text-white">
    <Head>
      <title>Your Name - Web Developer</title>
      <meta
        name="description"
        content="Portfolio of Your Name, a passionate web developer specializing in UI/UX Design, Responsive Web Design, and Backend Development."
      />
    </Head>

    <Navbar />
    <Hero />
    <AboutMe />
    <Footer />
  </div>
);

export default Home;
