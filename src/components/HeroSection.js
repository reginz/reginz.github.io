import React, { Component } from 'react';
import './HeroSection.css';

function HeroSection (){
    
        return (
            <div className="hero-container">
                <div className="layer">
                    <img src="./images/aixlanding.jpg"/>
                    </div>
                    <div className="hero-banner">
                        <div className="paragraph-wrapper">
                            
                        <div className="mobile-paragraph">
                            
                             <h1>We Put AI in Action </h1>
                            </div> 
                        <div className="paragraph">
                            <p>
                                Our quest is to build ultimate intelligent agent. Intelligent
                                agents are software entities where we put AI in action. 
                                An ultimate intelligent agent can collaborate without
                                us noticing, build without instructions and carry all human 
                                knowledge.
                            </p>
                            
                            <hr></hr>
                            <button className="hero-button">
                                Sign Up
                            </button>
                        </div>
                        
                        </div>
                     
                </div>
                
                
            </div>
        );
    }


export default HeroSection;