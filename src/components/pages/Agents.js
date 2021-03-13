import React, { Component } from 'react';
import CreateFuture from '../CreateFuture';
import AgentLanding from '../AgentLanding';
import AgentNeurons from '../AgentNeurons';
import { Helmet } from 'react-helmet'

const TITLE = 'AIX | Intelligent Agents'

class Agents extends Component {
    render() {
        return (
            <div>
                <Helmet>
                <title>{ TITLE }</title>
                </Helmet>
                <AgentLanding/>
                <AgentNeurons/>
                <CreateFuture/>
            </div>
        );
    }
}

export default Agents;