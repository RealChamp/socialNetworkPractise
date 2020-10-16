import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem
        name={dialog.name} key={dialog.id} id={dialog.id} img={dialog.img}/>);

    let messagesElements = state.messages.map(message => <Message
        message={message.message} key={message.id} id={message.id}/>);

    let newMessageText = state.newMessageText;


    let onAddMessage = (event) => {
        event.preventDefault();
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
                    <form className={classes.form}>
                        <input className={classes.formInput} type='text' onChange={onMessageChange}
                                  value={newMessageText}
                                  placeholder='Enter your message'/>
                        <button type="submit" onClick={onAddMessage}>Send Message</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Dialogs;