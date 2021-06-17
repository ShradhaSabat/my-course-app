import React, {useState} from 'react';
import DeliveryVerdict from "./DeliveryVerdict";
import DistanceInput from "./DistanceInput";

const ContactUs = () => {

    const[distance, setDistance] = useState('0');
    const[scale, setScale] = useState('km');

    function toKm(d) {
        return (d * 1.60934);
    }

    function toMiles(d) {
        return (d * 0.621371);
    }

    function convert(distance, convertFn) {
        const input = parseFloat(distance);
        if(Number.isNaN(input))
            return '';
        const output = convertFn(input);
        return output.toString();
    }

    function handleKmChange(distance) {
        setDistance(distance);
        setScale('km');
    }

    function handleMilesChange(distance) {
        setDistance(distance);
        setScale('miles');
    }

    const dist_in_miles = scale === 'km' ? convert(distance, toMiles) : distance;
    const dist_in_km = scale === 'miles' ? convert(distance, toKm) : distance;

    return(<div>
            <DistanceInput distance={dist_in_km} scale="km" onDistanceChange={handleKmChange}/>
            <DistanceInput distance={dist_in_miles} scale="miles" onDistanceChange={handleMilesChange}/>
            <DeliveryVerdict km={parseFloat(dist_in_km)}/>
        </div>
    );
}

export default ContactUs;