import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PageLink.css'

class AgentLink extends Component {
    render() {
        return (
            <div>
                <Link to="/modeltransfer">
                <div className="link-container agent-link-container">
                    
                    <div className="link-wrapper">
                        <h2>Read More</h2>
                        <div className="link-img">
                        <img src="../images/white-arrow-png-41963.png"></img></div>
                    </div>
                </div>
                </Link>
            </div>
        );
    }
}

export default AgentLink;