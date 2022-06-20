
import React from "react";
import classes from './NavBar.module.css';

const Navbar=(props)=> {

    const title= classes.navbar__title + " "+ classes.navbar__item;

    return (
            <header className={classes.navbar}>
                <div onClick={props.clickforHomepage} className={title}>George Mason University</div>
                <div onClick={props.clickforHomepage} className={classes.navbar__item}>Home Page</div>
                <div onClick={props.clickforSurveypage} className={classes.navbar__item}>Survey Page</div>
                <div onClick={props.clickforGetSurveypage} className={classes.navbar__item}>See Survey</div>        
            </header>
        );
}

export default Navbar;