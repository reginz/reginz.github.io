import React, { Component } from 'react';
import CreateFuture from '../CreateFuture';
import AgentLanding from '../AgentLanding';
import AgentNeurons from '../AgentNeurons';
import { Helmet } from 'react-helmet'
import AgentLink from '../page_link/AgentLink';

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
                <AgentLink/>
                <CreateFuture/>
            </div>
        );
    }
}

export default Agents;