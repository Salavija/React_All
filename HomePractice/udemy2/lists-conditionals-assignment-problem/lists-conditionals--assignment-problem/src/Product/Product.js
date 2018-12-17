import React from 'react';

const product = (props) => {
    return (
        <div classname="Product">
        <p>Product {props.name} price is {props.price} EUR </p>
        </div>
    )
}

export default product;