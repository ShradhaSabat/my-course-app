import React from 'react';

const CourseRow = (props) => {
    const activeColor = "black";
    const inactiveColor = "orange";
    return (
        <div>
            <span style={{float: "left"}}>{props.course.title}</span>
            <span style={{float: "right"}}>{props.course.total_subscriptions}</span>
        </div>
    );
}

export default CourseRow;