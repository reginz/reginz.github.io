import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CreateFuture from '../CreateFuture';
import { Helmet } from 'react-helmet';

const TITLE = 'AIX | Artificial Intelligence for Existence'

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
