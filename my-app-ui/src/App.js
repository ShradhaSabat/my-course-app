import './App.css';
import {Col, Container, Progress, Row} from 'reactstrap'; /*npm i reactstrap*/
import {ToastContainer} from "react-toastify"; /*npm i react-toastify*/
import React, {lazy, useState, Suspense} from "react";
import Menu from "./components/Menu";
import {BrowserRouter as Router, Route} from "react-router-dom"
import HeaderCl from "./components/HeaderCl";
import Footer from "./components/Footer";
import AppContext from "./components/AppContext";
import FloatingHelp from "./components/chat/FloatingHelp";
import Sample from "./components/Sample";
import ProgressMoving from "./components/ProgressMoving";

/*Always start component names with a capital letter because react treats components starting with lowercase letters as DOM tags*/
function App() {

    const Home = lazy(() => import('./components/Home'));
    const AllCourses = lazy(() => import('./components/AllCourses'));
    const AddCourse = lazy(() => import('./components/AddCourse'));
    const Menu = lazy(() => import('./components/Menu'));
    const About = lazy(() => import('./components/About'));
    const ContactUs = lazy(() => import('./components/ContactUs'));
    const CourseSearch = lazy(() => import('./components/search/CourseSearch'));

    /*Array of objects defines the initial state of courses, if getAllCourses()
        is commented in useEffect then it initial state will be visible*/
    const [courses, setCourses] = useState([
        {id: 1, title: "R", description: "4.1.0", total_subscriptions: 16},
        {id: 2, title: "Ruby", description: "3.0.1", total_subscriptions: 35},
        {id: 3, title: "C#", description: "9.0", total_subscriptions: 50}
    ]);

    const data = [
        {category: 'Database', total_subscriptions: 35, active: true, title: 'SQL'},
        {category: 'Database', total_subscriptions: 100, active: false, title: 'Mongo'},
        {category: 'Database', total_subscriptions: 150, active: false, title: 'Cassandra'},
        {category: 'Backend', total_subscriptions: 16, active: true, title: 'Python'},
        {category: 'Backend', total_subscriptions: 150, active: false, title: 'Java'},
        {category: 'Backend', total_subscriptions: 50, active: true, title: 'NodeJs'}
    ];

    const [chatActive, setChatActive] = useState(false);

    const courseSettings = {
        courses,
        setCourses,
        chatActive,
        setChatActive
    }

    /*Always return 1 component/1 parent element at a time*/
    /*JSX - Javascript XML allows to write HTML elements directly in Javascript and place them in the DOM
    *       without any createElement() or appendChild() methods  */
    return (
        <AppContext.Provider value={courseSettings}>
            <div>
                <Router>
                    <Suspense fallback={<ProgressMoving/>}>
                        <ToastContainer/>
                        <Container>
                            <HeaderCl name="Shradha Sabat" countdown="60" decrement="1"/>
                            <Row>
                                <Col md={4}><Menu/></Col>
                                <Col md={8}>
                                    <Route path="/" component={Home} exact></Route>
                                    <Route path="/add-course" component={AddCourse}></Route>
                                    <Route path="/view-courses" component={AllCourses}></Route>
                                    <Route path="/about" component={About}></Route>
                                    <Route path="/contact-us" component={ContactUs}></Route>
                                    <Route path="/search" component={CourseSearch}></Route>
                                    <Sample/>
                                </Col>
                            </Row>
                            <Footer/>
                            <FloatingHelp/>
                        </Container>
                    </Suspense>
                </Router>
            </div>
        </AppContext.Provider>
    );
}

export default App;
