import React, {useEffect, useState} from "react";
import {Jumbotron} from "reactstrap";
import ThemedBackground from "./ThemedBackground";

export default function Home() {

    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        document.title = "Home"
        setTimeout(() => {
            setHidden(false);
        }, 5000)
    })

    return (<>{
        hidden === true ? '' : <div>
            <ThemedBackground color="lightgrey">
                <h1 className="lead">Kickstart your career by getting certified</h1>
                <hr className="my-2"/>
                <p>Learning made easy is optimized for learning, testing, and training</p>
            </ThemedBackground>
        </div>
    }</>)
        ;
}