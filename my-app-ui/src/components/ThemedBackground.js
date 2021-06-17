import React from "react";
import {Jumbotron} from "reactstrap";

export default function ThemedBackground(props) {

    return (
        <Jumbotron className="text-center" style={{background: props.color}}>
            {props.children}
        </Jumbotron>
    );
}