import React from 'react';
import './DataLanding.css';
import './Dot.css';

function DataLanding () {
        return (
            <div className="bg-radius">
                <div className="data-landing">
                    <img src="../images/aixlanding_yellow.jpg" alt="AIX Landing Background Image"
                    className="data-bg"/>
                    <div className="data-container">
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
                            <div className="column-data img-column">
                                <img src="../images/robots-min.png" alt="Robots"/>

                            </div>
                            <div className="column-data banner-column">
                                <p>
                                    Collecting Large Data Sets While Providing Employment 
                                    to People from Many Walks of Life
                                </p>

                            <div className="hr-wrapper">
                                <hr></hr>
                            </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    
}

export default DataLanding;