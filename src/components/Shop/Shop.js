import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [card,setCard] = useState([])

   useEffect ( () =>{
       fetch('./products.JSON')
       .then(res => res.json())
       .then(data => setProducts(data))
   },[])

    const handleAddToCard = product =>{
        const newCard =[...card, product]
        setCard(newCard)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
               
                {
                    products.map(product => <Product 
                        key={product.key}
                        product={product}
                        handleAddToCard={handleAddToCard}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;