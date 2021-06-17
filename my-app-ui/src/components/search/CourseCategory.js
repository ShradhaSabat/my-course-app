import React from 'react';
import {Button} from "reactstrap";
import {AiFillCaretDown} from "react-icons/ai";

const CourseCategory = (props) => {
    return (<div><Button id={props.category} color="primary">{props.category} <AiFillCaretDown/></Button></div>);
}

export default CourseCategory;