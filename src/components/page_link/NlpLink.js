import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PageLink.css'

class NlpLink extends Component {
    render() {
        return (
            <div>
                <Link to="/datacollection">
                <div className="link-container nlp-link-container">
                    
                    <div className="link-wrapper">
                        <div className="h-wrapper">
                        <h2>Read More</h2>
                        </div>
                        <p>Crowd-sourced Data Collection</p>
                        <div className="link-img">
                        
                        <img src="../images/white-arrow-png-41963.png"></img></div>
                    </div>
                </div>
                </Link>
            </div>
        );
    }
}

export default NlpLink;