import React from "react";

import Button from '../../UI/Button/Button';

import classes from './Navigation.module.css';

const NavigationBar = props => {

    return (
        <React.Fragment>
            <div className={classes.backdrop}></div>
            
            <nav className={classes.nav}>
      <ul>
        
          <li>
            <a href="/">Users</a>
          </li>
        
          <li>
            <a href="/">Admin</a>
          </li>
        
          <li>
            <button>Logout</button>
          </li>
      </ul>
    </nav>
        </React.Fragment>
    );
};

export default NavigationBar;