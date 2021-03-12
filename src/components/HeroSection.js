import React, { Component } from 'react';
import './HeroSection.css';
import './UniversalClasses.css'
import './Dot.css';
import {Link} from 'react-router-dom';

function HeroSection (){
    
        return (
            <div className="bg-radius">
            <div className="hero-container">
               
                    
                   
                    <div className="hero-banner">
                   
                        <div className="paragraph-wrapper">
                            
                        
                        <div className="paragraph">
                            <h1>Revolutionary Approach for AI</h1>
                            <p className="banner-p">
                            Our quest is to build the ultimate 
                            intelligent agent. Intelligent agents are 
                            software entities where we put AI into action.
                            An ultimate intelligent agent can collaborate
                            without us noticing, build without instructions
                            and carry all human knowledge.
                            </p>
                            
                            
                            <hr></hr>

                                <button className="hero-button button" style={{backgroundImage:"url(/images/button1_salt-min.png)"}}>
                                    <Link to="/datacollection">
                                        Learn More
                                    </Link>
                                    <div className="dot-general1 dot13"></div>
                                    <div className="dot-button dot12"></div>
                                </button>
                        
                                </div>
                        </div>
                     
                </div>
                
                
            </div>
            </div>
        );
    }


export default HeroSection;
