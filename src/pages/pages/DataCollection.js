import React from 'react';
import NavData from '../NavData';
import CreateFuture from '../CreateFuture';
import DataLanding from '../DataLanding';
import DataP from '../DataP';

function DataCollection () {
    
        return (
            <div className="data-collection">
                
                <DataLanding/>
                <DataP/>
                <CreateFuture/>
            </div>
        );
    
}

export default DataCollection;