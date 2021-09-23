import React from 'react';
import './Card.css'
const Card = (props) => {
    const {card} = props;
    let total = 0;
    for(const product of card){
        total = total + product.price;
    }
      const shipping = 15;
      const tax = (total + shipping)* 10;
      const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order summery</h3>
            <h5>Item Ordered:{props.card.length}</h5>
            <br />
            <p> Total:{total}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Card;