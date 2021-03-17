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
import ModelTransferLanding from './components/ModelTransferLanding';
import ScrollToTop from './components/Scrolltotop';



function App() {
  return (
    <> 
      <Router >
        <ScrollToTop/>
        <Navbar/>
            <Switch >
                <Route exact path='/'  >
                  <Home/>
                </Route>
                <Route path='/agents'>
                  <Agents/>
                </Route>
                <Route path='/datacollection'>
                  <DataCollection/>
                </Route>
                <Route path="/modeltransfer">
                  <ModelTransfer/>
                  </Route>
                <Route path="/about" >
                  <About/>
                  </Route>
                <Route path="/agentneurons" component={AgentNeurons}/>
              </Switch>
          <Footer></Footer>
      </Router>
    </>
  );
}

export default App;