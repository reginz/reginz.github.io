import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cards from './components/Cards.js'
import Blog from './Blog';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router >
        <Navbar/>
        <Switch >
          <Route exact path='/'  component={Home} />
          <Route path='/components/cards'  component={Cards} />
          <Route path='/blog' component={Blog} />
          <Route path="/sign-up" component={Footer}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
