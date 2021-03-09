import React, { Component } from 'react';
import CreateFuture from '../CreateFuture';
import NavData from '../NavData';
import AgentLanding from '../AgentLanding';
import AgentNeurons from '../AgentNeurons';

class Agents extends Component {
    render() {
        return (
            <div>
                
                <AgentLanding/>
                <AgentNeurons/>
                <CreateFuture/>
            </div>
        );
    }
}

export default Agents;