import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PageLink.css'

class DataCollectionLink extends Component {
    render() {
        return (
            <div>
                <Link to="/agents">
                <div className="link-container data-link-container">
                    
                    <div className="link-wrapper data-link-wrapper">
                        <h2>Read More</h2>
                        <p>Intelligent Agents</p>
                        <div className="link-img">
                        <img src="../images/white-arrow-png-41963.png"></img></div>
                    </div>
                </div>
                </Link>
            </div>
        );
    }
}

export default DataCollectionLink;