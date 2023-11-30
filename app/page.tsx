// App.js
import React from 'react';
import './App.css'; // Include your Tailwind CSS file
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="bg-black text-white">

      <Navbar />
      <Hero />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;