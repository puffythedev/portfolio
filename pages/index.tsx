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
  const testimonials = [
    {
		id: 0,
		quote: "i luh ma bf🤪",
		name: "Khloe",
		title: "Sky's wife",
		img: "https://cdn.discordapp.com/avatars/1129112487900491876/5f0136a9e29c6c206ff6f5bba181cc06.webp"
	},
	{
      id: 1,
      quote: "always sky, always sky; boyfriends can be gay and girlfriends can be lesbian",
      name: "Julian",
      title: "XenoFM owner",
	  img: "https://cdn3.kars.bio/assets/external/sky_1.webp"
    },
	{
		id: 2,
		quote: "I eat animal's hearts\n",
		name: "Yastube",
		title: "TeamEnvex Owner",
		img: "https://cdn3.kars.bio/assets/external/sky_2.webp"
	},
	{
		id: 3,
		quote: "Hi\n",
		name: "notbangbang",
		title: "Pro MC gamer",
		img: "https://cdn.discordapp.com/attachments/1173954453045514240/1181351258242678895/t3WSIkm.png"
	}
  ];
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
      <Title title="Projects" desc="Check out my latest work!"/>
      <Projects />
      <Footer />
      <Kon />
    </div>
  )
};

export default Home;
