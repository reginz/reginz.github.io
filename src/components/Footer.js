import React, { Component } from 'react';
import './Footer.css';



function Footer (){
    
        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-column footer-logo">
                        <img src="./logo/ai_logo_dark.png"/>
                    </div>
                    <div className="footer-column website-rights">
                        <p>AIX © 2021</p>

                    </div>
                    <div className="footer-column social-icon-wrapper">
                    <div class='social-icons'>
                        <img src="./images/discord.jpg"/>
                        <img src="./images/linkedin.png"/>
                        <img src="./images/twitter.png"/>
                    </div>
                    </div>
                </div>
                
            </div>
        );
    
}

export default Footer;