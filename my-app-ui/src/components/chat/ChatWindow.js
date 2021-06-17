import React, {useRef, useState} from 'react';
import Title from "./Title";
import Messages from "./Messages";
import SendMessageForm from "./SendMessageForm";
import AppContext from "../AppContext";
import myStyle from './Messages.module.css'


const ChatWindow = () => {

    const [msg, setMsg] = useState('');
    const [chatList, setChatList] = useState([
        // {id: 1, incomingMsg: true, sentMsg: false, msg:"hello"},
        // {id: 2, incomingMsg: false, sentMsg: true, msg:"welcome"},
        // {id: 3, incomingMsg: true, sentMsg: false, msg:"how are you"},
        // {id: 4, incomingMsg: false, sentMsg: true, msg:"i am good"},
        // {id: 5, incomingMsg: true, sentMsg: false, msg:"tell me something"},
        // {id: 6, incomingMsg: false, sentMsg: true, msg:"please do ask"},
        // {id: 7, incomingMsg: true, sentMsg: false, msg:"are you real"},
        // {id: 8, incomingMsg: false, sentMsg: true, msg:"no i am a bot"},
    ]);

    const contextData = {
        msg,
        setMsg,
        chatList,
        setChatList
    }

    return (<div>
        {/*For highlighting potential problems in an application. Like Fragment, StrictMode does not
            render any visible UI. It activates additional checks and warnings for its descendants. Checks
            are run in development mode only. Helps with Identifying components with unsafe lifecycles,
            Detecting unexpected side effects etc*/}
        <React.StrictMode>
            <AppContext.Provider value={contextData}>
                <Title/>
                <div className={myStyle.scrollableWindow}>
                    {
                        chatList.length > 0 ? chatList.map((item) =>
                            <Messages incomingMsg={item.incomingMsg} msg={item.msg} sentMsg={item.sentMsg}></Messages>
                        ) : <div></div>
                    }
                </div>
                <SendMessageForm/>
            </AppContext.Provider>
        </React.StrictMode>
    </div>);
}

export default ChatWindow