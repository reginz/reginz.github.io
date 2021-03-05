import React  from 'react';
import './AgentLanding.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';



function AgentLanding () {
   
        return (
            <div className="bg-radius">
                <div className="agent-container">
                    <div className="agent-banner">
                        <div className="banner-wrapper">

                            <div className="agent-paragraph">
                                <p>
                                    An intelligent agent in AI is 
                                    the type of Agent which can learn from
                                    its past experiences or it has learning
                                    capabilities. They are software entities
                                    where we pu AI in action.
                                    We are studying to build ultimate 
                                    intelligent agent
                                </p>
                                <hr></hr>
                                <button className="agent-button button"
                                style={{backgroundImage:"url(/images/button_white.png)"}}>
                                <AnchorLink 
                                href="#agentneurons"
                                >
                                        Learn More
                                    </AnchorLink>
                                    <div className="dot-general1 dot13"></div>
                                    <div className="dot-button dot12"></div>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    
}

export default AgentLanding;