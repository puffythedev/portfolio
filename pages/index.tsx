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
import Title from '@/components/Title';
import Kon from '@/components/Console';

function Home(){
  return (
    <div className="bg-slate-900 text-white">
      <Head>
        <meta name='title' content='SkyOPG - Developer' />
        <meta name='description' content="SkyOPG's official portfolio, made with hopes and dreams" />
      </Head>
      <Preloader />
      <Navbar />  
      <Hero />
      <AboutMe traits="Passionate Developer, Creative Mind, Tech Enthusiast" />
      <Title title="Testimonials" desc="See what people think of me!!"/>
      <Testimonials />
      <Title title="Projects" desc="Check out my latest work!"/>
      <Projects />
      <Footer />
      <Kon />
    </div>
  )
};

export default Home;
