import React from "react";

import Card from '../../../UI/Card/Card';

import formula1 from "../../../../images/formula1.png";
import fia_road_safety from "../../../../images/fia-road-safety.png";

import classes from './CartImage.module.css';

const CartImage = props => {

    return (
        <Card className={classes.cart_image_container}>
            <img src={formula1} className={classes.cart_image} alt={"cartImage"}></img>
            <img src={fia_road_safety} className={classes.cart_image} alt={"cartImage"}></img>
        </Card>
    );
};

export default CartImage;