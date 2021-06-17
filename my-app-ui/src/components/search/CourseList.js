import React, {useContext, useEffect} from 'react';
import CourseCategory from "./CourseCategory";
import CourseRow from "./CourseRow";
import {ListGroup, ListGroupItem, UncontrolledCollapse} from "reactstrap";
import AppContext from "../AppContext";

const CourseList = (props) => {

    const myContext = useContext(AppContext);

    let hashmapData = {};
    props.data.forEach((course) => {
        if (hashmapData[course.category] === undefined) {
            hashmapData[course.category] = [course];
        } else {
            hashmapData[course.category].push(course);
        }
    })
    const rows = [];
    for(const categoryKey in hashmapData) {
        rows.push(<CourseCategory category={categoryKey}/>);
        const items = [];
        for (const course of hashmapData[categoryKey]) {
            if((myContext.activeOnly && course.active && course.title.toLowerCase().includes(myContext.filterText.toLowerCase()))
                || (!myContext.activeOnly && course.title.toLowerCase().includes(myContext.filterText.toLowerCase())))
                items.push(<ListGroupItem><CourseRow course={course}></CourseRow></ListGroupItem>);
        }
        rows.push(<UncontrolledCollapse toggler={categoryKey} defaultOpen><ListGroup>{items}</ListGroup></UncontrolledCollapse>)
    }

    return (<div>{rows}
         </div>);

}

export default CourseList;