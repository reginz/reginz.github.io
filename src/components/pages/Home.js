import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CreateFuture from '../CreateFuture';
import { Helmet } from 'react-helmet';
import Email from '../Email';

const TITLE = 'AIX | AI for Existence'

function Home() {
  return (
    <>
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
      <HeroSection />
      <Email/>
      <CreateFuture />
    </>
  );
}

export default Home;