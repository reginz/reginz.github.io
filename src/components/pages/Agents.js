import React, { Component } from 'react';
import CreateFuture from '../js/CreateFuture';
import AgentLanding from '../js/AgentLanding';
import AgentNeurons from '../js/AgentNeurons';
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