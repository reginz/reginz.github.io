import React, { Component } from 'react';
import Construction from '../Construction';
import CreateFuture from '../CreateFuture';
import NavData from '../NavData';

class ModelTransfer extends Component {
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

export default ModelTransfer;