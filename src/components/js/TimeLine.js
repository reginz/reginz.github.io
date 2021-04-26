import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/TimeLine.css';

class TimeLine extends Component {
    render() {
        return (
            <div className="timeline-container">
               
            <div className="timeline">
            <h2>Timeline</h2>
              
               <p>
                   <h3>2021</h3>
                   Foundation of the company. <br></br>
                   R&D studies. <br></br>
                   Product design.
                   </p>
              
                <p><h3>2021</h3>
                    Initiating developement of the agent as a service modules.<br></br>
                    Expaining our ideas about the future of AI through our blog.<br></br>
                    Forming community.
                    </p>
              
                <p>
                <h3>2021</h3>
                API & integration of our service.<br></br>
                Shipping our sofware service.
                 </p>
              
                <p>
                <h3>2021</h3>
                    Developement of <Link to="/datacollection">crowd-sourced data collection app.</Link>

                    </p>
              

            </div>
            <div className="timeline t2" style={{marginTop:"-3rem"}}>
              
               <p>
                   <h3>2022</h3>
                   Shipping cross platform <Link to="/datacollection">crowd-sourced data collection app.</Link>
                   </p>
              
                <p><h3>Near Future</h3>
                    To be announced soon...
                    
                    </p>
              

            </div>
            </div>
        );
    }
}

export default TimeLine;
