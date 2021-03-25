import React from 'react';
import '../../App.css';
import CreateFuture from '../CreateFuture';
import { Helmet } from 'react-helmet';
import NlpLanding from '../NlpLanding';
import NlpList from '../NlpList';
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