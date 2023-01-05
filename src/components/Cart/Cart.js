import React from "react";

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Container from '../UI/Container/Container';
import CartImage from './CartData/Image/CartImage';
import CartDetails from './CartData/Data/CartDetails';

import classes from './Cart.module.css';

const Cart = props => {

    return (
        <Container
            className={classes.update_flex_container}
            classNameBorder={classes.update_border}
            header={props.header}
        >
            <Card className={classes.cart_card}>
                <CartImage />
            </Card>
            <Card className={classes.cart_card}>
                <CartDetails />
                <Button
                    className={classes.cart_payment_button}
                    value={"Pay - $200"}
                />
            </Card>
        </Container>
    );
};

export default Cart;
