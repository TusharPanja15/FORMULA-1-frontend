import React from "react";

import classes from './CartDetails.module.css';

const CartDetails = props => {

    return (
        <React.Fragment>
            <h1>Cart Details</h1>
            <div className={classes.product_details_list}>
                <div className={classes.product_details_list_items}>
                    <small>Event</small>
                    <h2>FORMULA 1 GRAN PREMIO DE SPAIN 2022</h2>
                </div>
                <div className={classes.product_details_list_items}>
                    <small>Total Tickets</small>
                    <h2>2 Tickets</h2>
                </div>
                <div className={classes.product_details_list_items}>
                    <small>Total Amount</small>
                    <h2>$200</h2>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartDetails;