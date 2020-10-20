import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://f0.pngfuel.com/png/240/289/company-name-logo-png-clip-art.png" alt=""/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
};

export default Header;