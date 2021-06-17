import React from 'react';

const DeliveryVerdict = (props) => {
    if(props.km <= 100) {
        return (<p>Free Delivery</p>);
    }
    return (<p>Delivery charges applicable</p>);
}

export default DeliveryVerdict;
