import React, {useEffect, useState} from 'react';
import {Progress} from "reactstrap";

const ProgressMoving = () => {

    const[pValue, setPValue] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if(pValue < 100)
                setPValue(pValue + 10);
        }, 1);

        return () => {
            clearInterval();
        }
    });

    return (<Progress animated color="success" value={pValue} />);
}

export default ProgressMoving;