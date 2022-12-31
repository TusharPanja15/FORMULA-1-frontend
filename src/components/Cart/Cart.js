import React from "react";

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Container from '../UI/Container/Container';

import classes from './Cart.module.css';

const Cart = props => {

    return (
        <Container className={classes.update_container} header={props.header}>
            <div className={classes.flex_container}>
                <Card className={classes.update_cart_card}>
                    <h1>Product Image</h1>
                </Card>
                <Card className={classes.update_cart_card}>
                    <h1>Product Details</h1>
                    <Card className={classes.update_cart_card}>
                        <h3>Product Name</h3>
                        <h3>Product Price</h3>
                        <h3>Product Quantity</h3>
                    </Card>
                    <Button className={classes.cart_payment_button} value={"Pay"}></Button>
                </Card>
            </div>
        </Container>
    );
};

export default Cart;