import React, { Component } from 'react';
import Construction from '../Construction';
import CreateFuture from '../CreateFuture';
import ModelTransferLanding from '../ModelTransferLanding';
import NavData from '../NavData';
import {Helmet} from 'react-helmet';

const TITLE='AIX | Context Free Model Transfer'

class ModelTransfer extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title> {TITLE} </title>
                </Helmet>
                <ModelTransferLanding/>
                <CreateFuture/>
            </div>
        );
    }
}

export default ModelTransfer;