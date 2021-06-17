import React from "react";
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container} from 'reactstrap'; /*npm i reactstrap*/
import base_url from "../constants/boot";
import axios from "axios";
import {toast} from "react-toastify";

// const Course = ({course, update}) => {   //Instead of props multiple props can be sent individually as well and use without using props.
const Course = (props) => {
    const deleteCourse = (id) => {
        axios.delete(base_url + '/course/'+ id).then((response) => {
            props.update(id);
            toast.success('Course deleted', {position : "bottom-right"});
        }).catch((error) => {
            toast.dark('Error in course deletion', {position : "bottom-right"});
        })
    }

    return (<Card className="text-center">
        <CardBody>
            <CardTitle>{props.course.title}</CardTitle>
            <CardSubtitle className = "text-black-50">{props.course.description}</CardSubtitle>
            <CardText className = "text-black-50">Subscriptions : {props.course.total_subscriptions}</CardText>
            <Container>
                <Button color="danger" onClick = {() => {deleteCourse(props.course.id)}}>Delete</Button>
                <Button color="warning">Update</Button>
            </Container>
        </CardBody>
    </Card>);
}

export default Course