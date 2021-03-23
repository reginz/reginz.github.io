import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import CreateFuture from '../CreateFuture';
import { Helmet } from 'react-helmet';
import NlpLanding from '../NlpLanding';
import NlpList from '../NlpList';

const TITLE = 'AIX | NLP Module'

function Nlp() {
  return (
    <>
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
      <NlpLanding />
      <NlpList/>
      <CreateFuture />
    </>
  );
}

export default Nlp;