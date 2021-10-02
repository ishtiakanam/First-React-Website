import React from 'react';
import './Card.css'
const Card = (props) => {
    const {card} = props;
    console.log(props.children)
    let totalQuantity = 0;
    let total = 0;
    for(const product of card){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
      const shipping = total > 0 ? 15 : 0;
      const tax = (total + shipping)* 0.10;
      const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order summery</h3>
            <h5>Item Ordered:{totalQuantity}</h5>
            <br />
            <p> Total:{total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand total:{grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Card;