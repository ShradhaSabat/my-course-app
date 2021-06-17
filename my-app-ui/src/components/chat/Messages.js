import React, {Fragment, useContext} from 'react';
import AppContext from "../AppContext";
import styles from './Messages.module.css';

const Messages = (props) => {

    const myContext = useContext(AppContext);

    return (<Fragment>
        {
            props.incomingMsg &&
            (<div className={styles.incomingMsgBox}>
                {props.msg}
        </div>)}
        {
            props.sentMsg &&(
        <div className={styles.sentMsgBox}>
            {props.msg}
        </div>)}
    </Fragment>);
}

export default Messages;