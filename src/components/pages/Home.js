import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CreateFuture from '../CreateFuture';
import { Helmet } from 'react-helmet';

const TITLE = 'AIX | AI for Existence'

function Home() {
  return (
    <>
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
      <HeroSection />
      
      <CreateFuture />
    </>
  );
}

export default Home;