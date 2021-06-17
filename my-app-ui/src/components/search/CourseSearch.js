import React, {useContext, useState} from 'react';
import SearchBar from "./SearchBar";
import CourseList from "./CourseList";
import AppContext from "../AppContext";

const CourseSearch = () => {

    const data = [
        {category: 'Database', total_subscriptions: 35, active: true, title: 'SQL'},
        {category: 'Database', total_subscriptions: 100, active: false, title: 'Mongo'},
        {category: 'Database', total_subscriptions: 150, active: false, title: 'Cassandra'},
        {category: 'Backend', total_subscriptions: 16, active: true, title: 'Python'},
        {category: 'Backend', total_subscriptions: 150, active: false, title: 'Java'},
        {category: 'Backend', total_subscriptions: 50, active: true, title: 'NodeJs'}
    ];

    const [filterText, setFilterText] = useState('');
    const [activeOnly, setActiveOnly] = useState(false);

    const contextData = {filterText, setFilterText, activeOnly, setActiveOnly};

    return (
        <AppContext.Provider value={contextData}>
            <div>
                <SearchBar data={data}/>
                <CourseList data={data}/>
            </div>
        </AppContext.Provider>);
}

export default CourseSearch;