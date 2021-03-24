import React from 'react';
import CreateFuture from '../CreateFuture';
import DataLanding from '../DataLanding';
import DataP from '../DataP';
import { Helmet } from 'react-helmet'

const TITLE = 'AIX | Crowd-sourced Data Collection'

function DataCollection () {
    
        return (
            <div className="data-collection">

                <Helmet>
                <title>{ TITLE }</title>
                </Helmet>

                <DataLanding/>
                <DataP/>
                <CreateFuture/>
                
            </div>
        );
}

export default DataCollection;
