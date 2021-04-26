import React from 'react';
import '../css/CreateFuture.css';
import '../css/UniversalClasses.css';
import '../css/Dot.css';
import {Link} from 'react-router-dom';

function CreateFuture() {
    
        return (
            <div className="cretae-wrapper">
            <div className="create-container">
                <div className="dot-general1 dot1"></div>
                        <div className="dot-general2 dot2"></div>
                        <div className="dot-general1 dot3"></div>
                        <div className="dot-general3 dot4"></div>
                        <div className="dot-general3  dot5"></div>
                        <div className="dot-general3  dot6"></div>
                        <div className="dot-general2  dot7"></div>
                        <div className="dot-general1  dot8"></div>
                  
                <div className="column column1">
                    <h1>

                        Create Future of AI With Us
                        
                    </h1>
                </div>
                <div className="column column2">
                    <p>
                    Our journey started with a crowdsource 
                    data collection business and will continue
                    building various kinds of intelligent agents
                    in different fields. With our research on
                    context-free model transfer, we 
                    aim to make our intelligent agents apply 
                    other agents’ knowledge to problems.

                    </p>
                    <hr className="create-hr"></hr>
                    <Link to="/about">
                    <button className="create-button button" style={{backgroundImage:"url(/images/button2_salt-min.png)"}}>
                       
                        Manifest
                        
                        <div className="dot-button dot11"></div>
                        <div className="dot-general2 dot10"></div>
                    </button>
                    </Link>
                    
                </div>
                
            </div>
            </div>
        );
    
}

export default CreateFuture;