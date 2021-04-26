import React from 'react';
import '../../App.css';
import HeroSection from '../js/HeroSection';
import CreateFuture from '../js/CreateFuture';
import { Helmet } from 'react-helmet';
import Email from '../js/Email';
import Blog from '../js/Blog';
import TimeLine from '../js/TimeLine';
const TITLE = 'AIX | AI for Existence'

function Home() {
  return (
    <>
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
      <HeroSection />
      <Blog/>
      <Email/>
      <CreateFuture />
    </>
  );
}

export default Home;