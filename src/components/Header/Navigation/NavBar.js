import React, { useState } from "react";

import Button from '../../UI/Button/Button';
import Modal from "../../UI/Modal";

import classes from './NavBar.module.css';

const NavigationBar = props => {

    const [error, setError] = useState();

    const checkButtonEvent = (event) => {
        event.preventDefault();

        console.log(event.target);
        setError({
            title: "Invalid age",
            message: "Please enter a valid age (> 0)."
        });
    };


    return (
        <React.Fragment>
            {/* {error && <Modal
                title={error.}
            >
            </Modal>} */}
            <div className={classes.backdrop}></div>
            <header className={classes.main_header}>
                <button className={classes.side_menu_toggle}>Menu</button>

                <form onSubmit={checkButtonEvent}>
                    <Button
                        className={classes.button}
                        type="button"
                        value="Sign Up"
                    // onSubmit={checkButtonEvent}
                    />
                </form>

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