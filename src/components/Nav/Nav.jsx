import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><NavLink activeClassName={classes.active} to="/profile">Profile</NavLink></li>
                <li className={classes.item}><NavLink activeClassName={classes.active} to="/dialogs">Messages</NavLink></li>
                <li className={classes.item}><NavLink activeClassName={classes.active} to="/news">News</NavLink></li>
                <li className={classes.item}><NavLink activeClassName={classes.active} to="/music">Music</NavLink></li>
                <li className={classes.item}><NavLink activeClassName={classes.active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;

