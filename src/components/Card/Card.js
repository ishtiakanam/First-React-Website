import React from 'react';
import './Card.css'
const Card = (props) => {
    const {card} = props;
    let total = 0;
    for(const product of card){
        total = total + product.price;
    }

    
    return (
        <div>
            <h3>Order summery</h3>
            <h5>Item Ordered:{props.card.length}</h5>
            <br />
            <p> Total:{total}</p>
        </div>
    );
};

export default Card;