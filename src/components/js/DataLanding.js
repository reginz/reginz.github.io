import React from 'react';
import '../css/DataLanding.css';
import '../css/Dot.css';

function DataLanding () {
        return (
            <div className="bg-radius-data">
                
                <div className="crowdsource-container">
                <div className="dot-general1 dot1"></div>
                        <div className="dot-general2 dot2"></div>
                        <div className="dot-general1 dot3"></div>
                        <div className="dot-general3 dot4"></div>
                        <div className="dot-general3  dot5"></div>
                        <div className="dot-general3  dot6"></div>
                        <div className="dot-general2  dot7"></div>
                        <div className="dot-general1  dot8"></div>
                        <div className="dot-general3  dot9"></div>
                        <div className="data-columns">
                    <div className="crowdsource-wrapper">
                    <div className="crowdsource-image desktop">
                            <img src="./images/robots_last.webp"></img>
                    </div>
                    <div className="crowdsource-image mobile">
                        <img src="./images/robot_mobil.webp"></img>
                        </div>   
                        <div className="crowdsource-landning-text">
                            <h1>Crowd-sourced Data Collection</h1>
                            <p>Collecting large datasets
                                while providing employment to
                                people from many walks of life 
                            </p>
                            <hr></hr>
                        </div>
                        
                    </div>
                </div>

            </div>
            </div>
        );
    
}

export default DataLanding;