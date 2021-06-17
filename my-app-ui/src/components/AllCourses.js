import React, {useEffect, useState, useContext, useLayoutEffect} from "react";
import Course from "./Course";
import axios from "axios"; /*npm i axios*/
import base_url from "../constants/boot";
import {toast} from "react-toastify";
import AppContext from "./AppContext";
import Button from "reactstrap/es/Button";

/*Every class based react component has a lifecycle - componentDidMount, componentDidUpdate, componentWillUnmount
    What we have written are function based components
    If we want to use lifecycle of class based component in function based component then
    we must use hooks. For e.g. useState, useEffect etc*/

const AllCourses = () => {

    const myContext = useContext(AppContext);

    const [courses, setCourses] = useState([
        {id: 1, title: "R", description: "4.1.0", total_subscriptions: 16},
        {id: 2, title: "Ruby", description: "3.0.1", total_subscriptions: 35},
        {id: 3, title: "C#", description: "9.0", total_subscriptions: 50}
    ]);

    //Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = "All Courses";
        getAllCourses();
    }, []);

    //function to call server
    const getAllCourses = () => {
        axios.get('/courses').then((response) => {
            // toast.success('Success', {position : "bottom-right"});
            setCourses(response.data);
        }).catch((error) => {
            toast.dark('Something went wrong', {position: "bottom-right"});
        })
    };

    const updateCourse = (id) => {
        setCourses(courses.filter((course) => course.id != id));
    }

    return (<div>
        <h2 onClick={getAllCourses}>All Courses</h2>
        {/*Conditional rendering using ternary operator*/}
        {
            courses.length > 0 ? courses.map((course) =>
                <Course key={course.id} course={course} update={updateCourse}></Course>  //key attr is must be included for list of elements
            ) : <h6>No Courses available</h6>                                            //If stable key id is not present, use item index as key
                                                                                        // A good rule of thumb is that elements inside the map() call need keys.

        }
    </div>);
    // return(<div></div>)

}

export default AllCourses;