import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/TimeLine.css';

class TimeLine extends Component {
    render() {
        return (
            <div className="timeline-container">
               
            <div className="timeline t1">
            <h2>Roadmap</h2>
              
               <p>
                   <h3>2021</h3>
                   Foundation of the company. <br></br>
                   R&D studies. <br></br>
                   Product design.
                   </p>
              
                <p><h3>2021</h3>
                    Initiating developement of the <Link to="/agents"> agent as a service</Link> modules.<br></br>
                    Explaining our ideas about the future of AI through <a href="https://medium.com/aiforexistence">our blog.</a><br></br>
                    Forming our community.
                    </p>
              
                <p>
                <h3>2021</h3>
                API & integration of <Link to="/nlp_module">our service.</Link><br></br>
                Releasing closed & open betas.
                 </p>
                 <p>
                <h3>2021</h3>
                Shipping our service.
                 </p>
                <p>
                <h3>2022</h3>
                    Developement of <Link to="/datacollection">crowd-sourced data collection app.</Link>

                    </p>
                    <p>
                   <h3>2022</h3>
                   Shipping cross platform <Link to="/datacollection">crowd-sourced data collection app.</Link>
                   </p>
              
                <p><h3>Near Future</h3>
                    More details to be announced soon...
                    
                    </p>
                    <p><h3>Long Term Goals</h3>
                    Reaserching context free unsupervised model transfer.<br></br>
                    Augumenting human-computer interface with agent architecture. <br></br>
                    
                    </p>

            </div>
            
            </div>
        );
    }
}

export default TimeLine;
