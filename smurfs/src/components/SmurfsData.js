import React from 'react';
import Smurf from './Smurf';

const SmurfData = (props) => {
    console.log(props.data)

    return (
        <div>
            {props.data.map(sData => <Smurf key={sData.id} smurf={sData} />)}
        </div>
    )
};

export default SmurfData;