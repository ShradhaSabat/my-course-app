import {Button as Button, Container, Link} from "react-floating-action-button";
import {Button as ClassicButton, Popover, PopoverBody} from "reactstrap";
import React, {useContext, useState} from "react";
import {AiFillQuestionCircle} from 'react-icons/ai';
import {FaWindowClose} from 'react-icons/fa';
import AppContext from "../AppContext";
import ChatWindow from "./ChatWindow";

const FloatingHelp = () => {

    const myContext = useContext(AppContext);

    const toggle = () => myContext.setChatActive(!myContext.chatActive);

    return (
        <Container>
            <span id="help">
                <Button>
                    {myContext.chatActive == true ? <FaWindowClose/> : <AiFillQuestionCircle/>}
                </Button>
            </span>
            <Popover placement="top" isOpen={myContext.chatActive} target="help" toggle={toggle} style={{height:"350px", width: "300px"}}>
                <PopoverBody><ChatWindow/></PopoverBody>
            </Popover>
        </Container>);
}

export default FloatingHelp;