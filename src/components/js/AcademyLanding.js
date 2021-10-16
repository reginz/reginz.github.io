import React from 'react';
import '../css/NlpLanding.css';
import '../css/AcademyLanding.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


function AcademyLanding(props) {


    return (
        <div className="  nlp-landing-container" id="academy-landing-container">
                <div className="nlp-landing-wrapper">
                    <div className="nlp-banner-wrapper">
                    <h1>AI 101</h1>
                    <p>
                    Enter the inspiring world of AI and join the AI transformation. Learn how to incorporate artificial intelligence into your work with <b>zero code</b>,
                         how to build and manage AI teams and much more.
                         </p>
                        <hr></hr>
                        <AnchorLink href="#course">
                        <button className="nlp-button button"
                                style={{backgroundImage:"url(/images/button_white.webp)"}}>
                                
                                        Course Content
                                    
                                    <div className="dot-general1 dot13"></div>
                                    <div className="dot-button dot12"></div>
                                </button>
                                </AnchorLink>
                    </div>
                </div>
            </div>
    );
}

export default AcademyLanding;