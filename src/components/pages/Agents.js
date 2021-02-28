import React, { Component } from 'react';
import CreateFuture from '../CreateFuture';
import NavData from '../NavData';
import Construction from '../Construction';

class Agents extends Component {
    render() {
        return (
            <div>
                <NavData/>
                <Construction/>
                <CreateFuture/>
            </div>
        );
    }
}

export default Agents;