import React from 'react';
import './CreateFuture.css';
import './UniversalClasses.css';

function CreateFuture() {
    
        return (
            <div className="create-container">
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
                    
                    <button className="create-button button">
                        <a href="#">
                        Discord Invitation
                        </a>
                    </button>
                    
                </div>
            </div>
        );
    
}

export default CreateFuture;