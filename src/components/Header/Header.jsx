import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://f0.pngfuel.com/png/240/289/company-name-logo-png-clip-art.png" alt=""/>
        </header>
    );
};

export default Header;