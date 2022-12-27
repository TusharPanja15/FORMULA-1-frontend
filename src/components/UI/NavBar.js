import React from "react";

import classes from './NavBar.module.css';

const NavigationBar = props => {
    return (
        <React.Fragment>
            <div className={classes.backdrop}></div>
            <header className={classes.main_header}>
                <button className={classes.side_menu_toggle}>Menu</button>
                <nav className={classes.main_header__nav}>
                    <ul className={classes.main_header__item_list}>
                        <li className={classes.main_header__item}>
                            <a href="#2">Shop</a>
                        </li>
                        <li className={classes.main_header__item}>
                            <a href="#2">Products</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <nav className={classes.mobile_nav}>
                <ul className={classes.mobile_nav__item_list}>
                    <li className={classes.mobile_nav__item}>
                        <a href="#2">Shop</a>
                    </li>
                    <li className={classes.mobile_nav__item}>
                        <a href="#2">Products</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default NavigationBar;