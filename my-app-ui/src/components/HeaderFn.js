import React, {useEffect, useState} from "react";
import {Card, CardBody} from "reactstrap";

const HeaderFn = (props) => {

    const [countdown, setCountdown] = useState(parseFloat(props.countdown));

    // useEffect(() => {
        setInterval(
            () => tick(),
            1000
        );
    // })

    function tick() {
        console.log(countdown);
        setCountdown(countdown - 1);
    }

    return (<Card style={{background: "orange"}}>
        <CardBody>
            <h1 className="text-center">Learning made easy</h1>
            <h6 className="text-center">By {props.name}</h6>
            <p className="text-end">{new Date().toLocaleString()}</p>
            <p className="text-end">{countdown}</p>
        </CardBody>
    </Card>);
}

export default HeaderFn;