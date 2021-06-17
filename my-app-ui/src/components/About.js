import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {Doughnut} from "react-chartjs-2";
import base_url from '../constants/boot';
import AppContext from "./AppContext";
import axios from "axios";
import {toast} from "react-toastify";

const About = () => {

    const [labelsList, setLabelsList] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [chartData, setChartData] = useState({});

    //function to call server
    const getAllCourses = () => {
        axios.get(base_url + '/courses').catch((error) => {
            toast.dark('Something went wrong', {position: "bottom-right"});
            console.log('Inside catch');
        }).then((response) => {
            setLabelsList(response.data.map((course) => {
                labelsList.push(course.title)
            }));
            setDataList(response.data.map((course) => {
                dataList.push(course.total_subscriptions)
            }))
            setChartData({
                labels: labelsList,
                datasets: [
                    {
                        label: "Number of subscriptions",
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: "rgba(75,192,192,1)",
                        borderWidth: 2,
                        data: dataList
                    }
                ]
            });
        });
    };

    useEffect(() => {
        document.title = "About";
        getAllCourses();
    }, []);

    return (<div style={{height: "300px", width: "300px"}}><Doughnut data={chartData}/></div>);
}

export default About;