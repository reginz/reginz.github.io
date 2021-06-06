import React  from 'react';
import '../css/AgentLanding.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';



function AgentLanding () {
   
        return (
            <div className="bg-radius">
                <div className="agent-container">
                    <div className="agent-banner">
                        <div className="banner-wrapper">

                            <div className="agent-paragraph">
                                <h1>Intelligent Agent</h1>
                                <p>
                                An intelligent agent in AI is the type of
                                 Agent that can learn from its past experiences 
                                 or learning capabilities. They are software entities
                                  where we put AI into action with Reinforcement 
                                  Learning. We are studying to build the ultimate
                                   intelligent agent.


                                </p>
                                <hr></hr>
                                <AnchorLink 
                                href="#agentneurons"
                                >
                                <button className="agent-button button"
                                style={{backgroundImage:"url(/images/button_white.webp)"}}>
                                
                                        Learn More
                                    
                                    <div className="dot-general1 dot13"></div>
                                    <div className="dot-button dot12"></div>
                                </button>
                                </AnchorLink>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        );
    
}

export default AgentLanding;