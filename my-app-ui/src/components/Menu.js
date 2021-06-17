import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom"; /*npm i react-router-dom*/

const Menu = () => {

    // you can use ... as a “spread” operator to pass the whole props object
    const props = {className : "list-group-item list-group-item-action", tag: "a"}
    /*Page will refresh if you use list group item. Use Link to avoid page refresh
    * See the diff by clicking on Home and other menu items*/
    return (<ListGroup>
        <ListGroupItem tag="a" href="/">Home</ListGroupItem>
        <Link {...props} to="/add-course">Add Course</Link>
        <Link {...props} to="/view-courses">View Courses</Link>
        <Link {...props} to="/search">Search Courses</Link>
        <Link {...props} to="/about">About</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/contact-us">Contact Us</Link>
    </ListGroup>);
}

export default Menu;