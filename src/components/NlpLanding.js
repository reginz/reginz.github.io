import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import './NlpLanding.css';

class NlpLanding extends Component {
    render() {
        return (
            <div className="nlp-landing-container">
                <div className="nlp-landing-wrapper">
                    <div className="nlp-banner-wrapper">
                    <h1>NLP Module</h1>
                    <p>You can create and deploy your ML model in 6 steps with our 
                        NLP service. You can take advantage of custom models in 
                        consumer relations management, team communication, A/B 
                        testing, or survey analysis once you have enough data and our 
                        purely designed studio use cases limited by one’s imagination. </p>
                        <hr></hr>
                        <AnchorLink href="#nlp-list">
                        <button className="nlp-button button"
                                style={{backgroundImage:"url(/images/button_white.webp)"}}>
                                
                                        How It Works
                                    
                                    <div className="dot-general1 dot13"></div>
                                    <div className="dot-button dot12"></div>
                                </button>
                                </AnchorLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default NlpLanding;