import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
debugger;
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    let newMessageText = state.newMessageText;


    let onAddMessage = () => {
        props.addMessage();

    };

    let onMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
    };


    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.newMessage}>
                    <div>
                        <textarea onChange={onMessageChange} value={newMessageText}
    placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Send Message</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Dialogs;