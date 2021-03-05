import React from 'react';
import './CreateFuture.css';
import './UniversalClasses.css';
import './Dot.css';
function CreateFuture() {
    
        return (
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
                        Our journey started with a crowdsource data collection
                        business and will continue with building various kind
                        of intelligent agents operates in different fields. 
                        With our research on context free model transfer we
                        aim to make our intelligent agents be able to apply 
                        other agents knowledge to problems.
                    </p>
                    <hr className="create-hr"></hr>
                    
                    <button className="create-button button" style={{backgroundImage:"url(/images/button2_salt.png)"}}>
                        <a href="https://discord.gg/EGsMS7pSAw">
                        Let's Talk
                        </a>
                        <div className="dot-button dot11"></div>
                        <div className="dot-general2 dot10"></div>
                    </button>
                    
                </div>
            </div>
        );
    
}

export default CreateFuture;