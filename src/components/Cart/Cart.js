import React from "react";

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Container from '../UI/Container/Container';

import classes from './Cart.module.css';

const Cart = props => {

    return (
        <Container className={classes.update_flex_container} header={props.header}>
            <Card className={classes.cart_card}>
                {/* <div className={classes.cart_card}> */}
                <h1>Product Image</h1>
                {/* </div> */}
            </Card>
            <Card className={classes.cart_card}>
                {/* <div className={classes.cart_card}> */}
                <h1>Cart Details</h1>
                <div className={classes.product_details_list}>
                    <div className={classes.product_details_list_items}>
                        <small>Product Name</small>
                        <h2>FORMULA 1 GRAN PREMIO DE SPAIN 2022</h2>
                    </div>
                    <div className={classes.product_details_list_items}>
                        <small>Product Quantity</small>
                        <h2>2 Tickets</h2>
                    </div>
                    <div className={classes.product_details_list_items}>
                        <small>Product Price</small>
                        <h2>$200</h2>
                    </div>
                </div>
                <Button className={classes.cart_payment_button} value={"Confirm Payment"}></Button>
                {/* </div> */}
            </Card>
        </Container>
    );
};

export default Cart;




// <div className={`${classes.flex_container} ${props.className}`}>
//     <div className={classes.container} >
//         <h1 className={classes.header}>{props.header}</h1>
//         <div className={`${classes.card} ${props.className}`}>
//             <div className={`${classes.update_cart_card} ${classes.cart_card}`}>
//                 <h1>Product Image</h1>
//             </div>
//             <div className={`${classes.update_cart_card} ${classes.cart_card}`}>
//                 <h1>Product Details</h1>
//                 <div className={classes.update_cart_card}>
//                     <h3>Product Name</h3>
//                     <h3>Product Price</h3>
//                     <h3>Product Quantity</h3>
//                 </div>
//                 <Button className={classes.cart_payment_button} value={"Pay"}></Button>
//             </div>
//         </div>
//     </div>
// </div>


