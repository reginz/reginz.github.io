import React, { Component } from 'react';
import './Departments.css';

class Departments extends Component {
    render() {
        return (
            <div className="deparments-container">
                <div className="departments-wrapper">
                    <div className="developement">
                        <h2>
                            Developement
                        </h2>
                        <p>
                            Lorem ipsum intelligent agent in AI is the type of Agent that can learn from its past experiences
                        </p>
                        <div className="departments-button">
                        <button className=" button"
                                style={{backgroundImage:"url(/images/button_white.webp)"}}>
                               
                                        Apply
                                    
                                    <div className="dot-general1 dot13"></div>
                                    <div className="dot-button dot12"></div>
                                </button>
                        </div>
                    </div>
                    <div className="research">
                        <h2>
                            Research
                        </h2>
                        <p>
                            Lorem ipsum intelligent agent in AI is the type of Agent that can learn from its past experiences
                        </p>
                        <div className="departments-button">
                        <button className=" button"
                                style={{backgroundImage:"url(/images/button_white.webp)"}}>
                               
                                        Apply
                                    
                                    <div className="dot-general1 dot13"></div>
                                    <div className="dot-button dot12"></div>
                                </button>
                        </div>
                    </div>
                    <div className="image1">
                        <div className="layer"></div>
                        <img src="./images/team.webp"></img>
                    </div>
                    <div className="image2">
                        <img src="./images/robot.webp"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Departments;