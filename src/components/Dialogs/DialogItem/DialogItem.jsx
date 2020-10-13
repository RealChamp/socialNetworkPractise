import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = ({id,img,name}) => {

    let path = "/dialogs/" + id;

    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <img className={classes.messageAvatar} src={img} alt=""/>
            <NavLink className={classes.name} to={path}>{name}</NavLink>
        </div>
    );
};

export default DialogItem;