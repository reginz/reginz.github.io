import React from 'react';
import NavData from '../NavData';
import CreateFuture from '../CreateFuture';
import DataLanding from '../DataLanding';

function DataCollection () {
    
        return (
            <div className="data-collection">
                <NavData/>
                <DataLanding/>
                <CreateFuture/>
            </div>
        );
    
}

export default DataCollection;