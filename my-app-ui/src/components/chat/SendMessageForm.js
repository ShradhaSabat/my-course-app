import React, {useContext, useState} from 'react';
import Button from "reactstrap/lib/Button";
import {Input, InputGroup, InputGroupAddon, Spinner} from 'reactstrap';
import AppContext from "../AppContext";
import {chatdata} from './chatdata';

let chats = [];
const SendMessageForm = () => {

    const myContext = useContext(AppContext);

    const [loader, setLoader] = useState(false);

    const getAnswer = q => {
        for (let i = 0; i < chatdata.length; i++) {
            if (chatdata[i].question.includes(q.toLowerCase())) {
                chats = [...chats, {msg: chatdata[i].answer, incomingMsg: true}];
                // chats.push({msg: chatdata[i].answer, incomingMsg: true})
                myContext.setChatList([...chats]);
                // myContext.setChatList(chats);
                setLoader(false);
                return;
            }
        }

        chats = [
            ...chats,
            {msg: "Sorry! I didn't recognise your question. Please rephrase.", incomingMsg: true},
        ];
        myContext.setChatList([...chats]);
        setLoader(false);
        return;
    };

    const onSendMsg = () => {
        if (myContext.msg.trim().length <= 0)
            return;
        chats = [...chats, {msg: myContext.msg, sentMsg: true}];
        // chats.push({msg: myContext.msg, sentMsg: true})
        myContext.setChatList([...chats]);
        // myContext.setChatList(chats);
        setLoader(true);
        setTimeout(() => {
            getAnswer(myContext.msg);
        }, 1000);
        myContext.setMsg('');
    };


    return (
        <div style={{float: "bottom", position: "absolute", bottom: 5}}>
            {loader == true ? <div>
                <div role="status" className="spinner-grow text-danger" style={{width: '1rem', height: '1rem'}}>
                    <span className="sr-only"></span>
                </div>
                <div role="status" className="spinner-grow text-danger" style={{width: '1rem', height: '1rem'}}>
                    <span className="sr-only"></span>
                </div>
                <div role="status" className="spinner-grow text-danger" style={{width: '1rem', height: '1rem'}}>
                    <span className="sr-only"></span>
                </div>
            </div> : <div></div>
            }
                <form>
                    <InputGroup size="sm">
                        <Input placeholder="Type your message"
                               value={myContext.msg}
                               onChange={e => myContext.setMsg(e.target.value)}/>
                        <InputGroupAddon addonType="append"><Button type="button" color="success"
                                                                    onClick={() => onSendMsg()}>Send</Button></InputGroupAddon>
                    </InputGroup>

                </form>
        </div>);
}

export default SendMessageForm;