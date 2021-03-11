import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ModelTransfer from './components/pages/ModelTransfer';
import DataCollection from './components/pages/DataCollection';
import Agents from './components/pages/Agents';
import Footer from './components/Footer';
import AgentNeurons from './components/AgentNeurons';
import { HashRouter} from "react-router-dom";
import About from './components/pages/About';


function App() {
  return (
    <> 
      <Router >
        <Navbar/>
        <Switch >
          <Route exact path='/'  component={Home} />
          <Route path='/agents' component={Agents} />
          <Route path='/datacollection' component={DataCollection} />
          <Route path="/modeltransfer" component={ModelTransfer}/>
          <Route path="/about" component={About}/>
          <Route path="/agentneurons" component={AgentNeurons}/>
          </Switch>
          <Footer></Footer>
      </Router>
    </>
  );
}

export default App;

