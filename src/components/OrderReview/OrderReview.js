import React from 'react';
import useProducts from '../../Hooks/UseProducts';
import useCart from '../../Hooks/UseCart'
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const [products] = useProducts();
    const [card,setCart] = useCart(products)
    const handleRemove = key =>{
        const newCard = card.filter(product => product.key !== key)
        setCart(newCard);
        removeFromDb(key)
    }
    return (
        <div className='shop-container'>
          <div className="product-container">
            {
                card.map(product => <ReviewItem key={product.key} handleRemove={handleRemove} product={product}></ReviewItem>)
            }
          </div>
          <div className="card-container">
            <Card card={card}></Card>
          </div>
            
        </div>
    );
};

export default OrderReview;