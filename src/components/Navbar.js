import React, { Component } from 'react';
import './Navbar.css'
function Navbar() {
  
        return (
            <div className="navbar-container">
                <ul className="nav-ul">
                    <li style={{backgroundColor: "transparent", }}><img src="./logo/ai_logo_white.png"></img></li>
                    <li style={{backgroundColor: "#d6b53d", color:"white"}}>Crowdsource Data Collection</li>
                    <li style={{ backgroundColor:"#545e65", color:"white"}}>Intelligent Agents</li>
                    <li style={{backgroundColor:"#b1b1b2", color:"white"}}>Context Free Model Transfer</li>
                </ul>
            </div>
        );
    
}

export default Navbar;