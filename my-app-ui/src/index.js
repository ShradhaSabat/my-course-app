import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; /*npm i bootstrap*/
import 'react-toastify/dist/ReactToastify.css'; /*npm i react-toastify*/


ReactDOM.render(
    <App/> /*function component, can also use App() instead of <App/>*/,
    document.getElementById('root') /*div in /public/index.html with id = root*/
);

/*If you want to start measuring performance in your app, pass a function
to log results (for example: reportWebVitals(console.log))
or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals*/
reportWebVitals();

/*
    React DOM compares the element (in our case App which is the element passed to root)
    and its children to its previous state and only applies the DOM changes necessary
    to bring the DOM to desired state
*/

