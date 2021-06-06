import React from 'react';
import '../css/AgentNeurons.css';
function AgentNeurons () {

        return (
            <div id="agentneurons">
            <div className="agent-neurons-container">
                <div className="agent-background">
                    <div className="bg-wrapper">
                        <img src="../images/intellignet-min.png"></img>
                        
                    </div>
                    
                    <div className="agent-text">
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p> */}
                            <p>An IA can sense enviroment from its sensor and act on its enviroment through acutuators.</p>
                            <p> The agent tries to maitain 
                             its function in the most efficient way
                                by trying to find patterns in<span style={{marginRight: "-1.3em"}}> its inputs.</span>
                            </p>
                            <h2>
                                The <br></br>Components <br></br> of <br></br>
                          <span style={{marginLeft:"-1em"}}> Intelligent Agent</span> 
                          </h2>
                          <p>
                             <b> Performance Element:</b><br></br>
                             It is responsible for selecting external action.
                          </p>
                          <p>
                              <b>Problem Generetor:</b><br></br>
                              This component is responsible for suggesting actions
                              that will lead to new and informative experiences.
                          </p>
                          <p style={{marginTop:"-.5em"}}>
                              <b><span style={{marginRight:"-7em"}}>Critic:</span></b><br></br>
                              Learning element takes feedback from critic which describes
                              how well the agent is doing with respect to a fixed performance standart.
                          </p>
                          <p>
                              <b>Learning Element:</b><br></br>
                              It is possible for making improvements by learning 
                              from the enviroment.
                          </p>
                          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p> */}




                          
                   
                </div>
            </div>
            </div>
            </div>
        );
 
}

export default AgentNeurons;