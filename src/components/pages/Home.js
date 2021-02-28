import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CreateFuture from '../CreateFuture';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection />
      <CreateFuture />
    </>
  );
}

export default Home;