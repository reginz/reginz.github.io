import React, { Component } from 'react';
import Construction from '../Construction';
import CreateFuture from '../CreateFuture';
import ModelTransferLanding from '../ModelTransferLanding';
import NavData from '../NavData';

class ModelTransfer extends Component {
    render() {
        return (
            <div>
                
                <ModelTransferLanding/>
                <CreateFuture/>
            </div>
        );
    }
}

export default ModelTransfer;