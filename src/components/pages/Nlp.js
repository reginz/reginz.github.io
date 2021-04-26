import React from 'react';
import '../../App.css';
import CreateFuture from '../js/CreateFuture';
import { Helmet } from 'react-helmet';
import NlpLanding from '../js/NlpLanding';
import NlpList from '../js/NlpList';
import NlpLink from '../page_link/NlpLink';

const TITLE = 'AIX | NLP Module'

function Nlp() {
  return (
    <>
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
      <NlpLanding />
      <NlpList/>
      <NlpLink/>
      <CreateFuture />
    </>
  );
}

export default Nlp;