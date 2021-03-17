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
                        <img src="./images/sm_d.webp"/>
                        <img src="./images/sm_i.webp"/>
                        <img src="./images/sm_t.webp"/>
                    </div>
                    </div>
                    <div className="footer-column footer-logo">
                        <img src="./logo/ai_logo_dark.webp"/>
                        
                    </div>
                    <div className="footer-column website-rights">
                        <p>AIX © 2021</p>
                        
                    </div>
                    <ul>
                            <li><Link to="/">Home Page</Link></li>
                            <li><Link to="/datacollection">Crowdsource Data Collection</Link></li>
                            <li><Link to="/agents">Intelligent Agents</Link></li>
                            <li><Link to="/modeltransfer">Context Free Model Transfer</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="https://girisimsavascisi.org/en/homepage/" target="_blank">Powered by Girişim Savaşcısı</a></li>
                        </ul>
                        <div className="contact">
                            <p><a href="mailto:info@aiforexistence.com">info@aiforexistence.com</a></p>
                        </div>
                        <div className="powered">
                            <a href="https://girisimsavascisi.org/en/homepage/" target="_blank">Powered by Girişim Savaşcısı</a>

                        </div>
                </div>
                
            </div>
        );
    
}

export default Footer;