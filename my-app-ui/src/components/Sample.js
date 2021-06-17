import React, {useState} from 'react';
import {Button} from "reactstrap";

const Sample = () => {

    const[a, setA] = useState('Hello');

    function handleClick(){
        setA('Bello');
    }

    return (
        /*<Button type="button" onClick={() => {setA('Bello')}}>Click</Button>*/
        /*React JSX converts the component commented above into the below mentioned format. They are equivalent*/
        React.createElement('button', {type: "button", onClick:handleClick}, a)
    );
}
export default Sample;