import React, { Component } from 'react';
import Construction from '../js/Construction';
import CreateFuture from '../js/CreateFuture';
import ModelTransferLanding from '../js/ModelTransferLanding';
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