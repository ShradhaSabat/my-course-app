import React, {Fragment, useEffect, useRef, useState} from "react";
import {Container, Form, FormGroup, Input, Button} from "reactstrap";
import Course from "./Course";
import base_url from "../constants/boot";
import {toast} from "react-toastify";
import axios from "axios";

export default function AddCourse() {

    /*Hooks cannot be used inside an if condition. It should be at the top of your function component and not nested*/

    useEffect(() => {
        document.title = "Add Course"
    }, []);

    /*This JavaScript syntax is called “array destructuring”. It means that we’re making
    two new variables fruit and setFruit, where fruit is set to the first value returned
    by useState, and setFruit is the second. It is equivalent to this code:
    var fruitStateVariable = useState('banana'); // Returns a pair
    var fruit = fruitStateVariable[0]; // First item in a pair
    var setFruit = fruitStateVariable[1]; // Second item in a pair

    When we declare a state variable with useState, it returns a pair — an array with two items.
    The first item is the current value, and the second is a function that lets us update it.
    */
    const[course, setCourse] = useState({});


    /*Used to access the DOM element*/
    const titleInput = useRef('');
    const idInput = useRef('');

    const handleForm = (e) => {
        console.log(course);
        e.preventDefault();
        addCourseToDB(course);
    }

    //function to post data to server
    const addCourseToDB = (data) => {
        axios.post(base_url + '/course', data).then((response) => {
            toast.success('Success', {position : "bottom-right"});
        }).catch((error) => {
            toast.dark('Something went wrong', {position : "bottom-right"});
        });
    }


    function handleHover() {
        idInput.current.focus();
    }

    return (<Fragment>
        <h2>Fill course details</h2>
        <Form onSubmit = {handleForm} onMouseEnter={handleHover}>
            <FormGroup>
                <label>Course Id</label>
                <Input type="text" name="courseid" id="courseid" placeholder="Enter Course id" onChange = {(e) => {setCourse({...course, id : e.target.value})}} innerRef={idInput}></Input> {/*ref attribute is used generally, but for reactstrap element, we have to use innerRef*/}
            </FormGroup>
            <FormGroup>
                <label>Course Title</label>
                <Input type="text" name="coursetitle" id="coursetitle" placeholder="Enter Course title" onChange = {() => {setCourse({...course, title : titleInput.current.value}); console.log(course)}} innerRef={titleInput}></Input>
            </FormGroup>
            <FormGroup>
                <label>Course Text</label>
                <Input type="textarea" name="coursetext" id="coursetext" placeholder="Enter Course description" onChange = {(e) => {setCourse({...course, description : e.target.value})}}
                       style={{height: 150}}></Input>
            </FormGroup>
            <Container className="text-center">
                <Button type = "submit" color="success" size="lg">Add</Button>
                <Button type = "reset" color="secondary" size="lg" outline>Clear</Button>
            </Container>
        </Form>
    </Fragment>);
}