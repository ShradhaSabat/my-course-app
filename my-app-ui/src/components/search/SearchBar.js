import React, {useContext} from 'react';
import {Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import AppContext from "../AppContext";

const SearchBar = () => {

    const myContext = useContext(AppContext);

    const handleCheckboxChange = () => {
        myContext.setActiveOnly(!myContext.activeOnly);
    }

    const handleSearchChange = (e) => {
        myContext.setFilterText(e.target.value);
    }

    return (<div>
        <InputGroup>
            <Input type="text" placeholder="Search..." onChange={handleSearchChange}/></InputGroup>
        <InputGroup>
            <InputGroupAddon addonType="append">
                <InputGroupText style={{padding: 5}}><Input type="checkbox" onChange={handleCheckboxChange}/>Only show courses which are active</InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    </div>);
}

export default SearchBar;