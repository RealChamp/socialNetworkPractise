import React from 'react';
import {
    addMessageCreator,
    updateNewMessageTextCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (message) => {
            dispatch(updateNewMessageTextCreator(message));
        },
        addMessage: () => {
            dispatch(addMessageCreator());
        },
    }
};


const superDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default superDialogsContainer;