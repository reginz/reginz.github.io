import React, { Component } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Footer (){
    
        return (
            <div className="footer">
                <div className="footer-container">
                <div className="footer-column social-icon-wrapper">
                    <div class='social-icons'>
                        <img src="./images/sm_d.png"/>
                        <img src="./images/sm_i.png"/>
                        <img src="./images/sm_t.png"/>
                    </div>
                    </div>
                    <div className="footer-column footer-logo">
                        <img src="./logo/ai_logo_dark.png"/>
                        
                    </div>
                    <div className="footer-column website-rights">
                        <p>AIX © 2021</p>
                        
                    </div>
                    <ul>
                            <li><Link to="/">Home Page</Link></li>
                            <li><Link to="/datacollection">Crowdsource Data Collection</Link></li>
                            <li><Link to="/agents">Intelligent Agents</Link></li>
                            <li><Link to="/modeltransfer">Context Free Model Transfer</Link></li>
                            <li><Link to="/modeltransfer">About Us</Link></li>
                        </ul>
                        <div className="contact">
                            <p><a href="mailto:info@aiforexistence.com">info@aiforexistence.com</a></p>
                        </div>
                </div>
                
            </div>
        );
    
}

export default Footer;