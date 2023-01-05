import React from "react";

import Button from '../../UI/Button/Button';

import classes from './Navigation.module.css';

const Navigation = props => {

  return (
    <React.Fragment>
      <div className={classes.backdrop}></div>

      <nav className={classes.nav}>
        <ul>

          <li>
            <Button value={"Cart"} onClick={props.props.showCart} />
          </li>

          <li>
            <Button value={"Events"} onClick={props.props.showEvent}  />
          </li>

          <li>
            <Button value={"Home"} onClick={props.props.showHome}  />
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;