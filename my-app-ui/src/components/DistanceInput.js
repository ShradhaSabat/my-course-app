import React, {useState} from 'react';
import DeliveryVerdict from "./DeliveryVerdict";

const DistanceInput = (props) => {

    const scaleNames = {
        "km" : "Kilometers",
        "miles" : "Miles"
    }

    function handleChange(e) {
        props.onDistanceChange(e.target.value);
    }

    return( <span>
        <fieldset>
        <legend>Enter distance in {scaleNames[props.scale]}</legend>
        <input type="text" value={props.distance} onChange={handleChange}></input>
    </fieldset> </span>);
}

export default DistanceInput;