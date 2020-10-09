import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <img className={classes.messageAvatar} src={props.img} alt=""/>
            <NavLink className={classes.name} to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;