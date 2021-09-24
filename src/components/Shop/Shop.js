import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [card,setCard] = useState([]);
    const [displyProduct,setDisplayProduct] = useState([])

   useEffect ( () =>{
       fetch('./products.JSON')
       .then(res => res.json())
       .then(data => {
           setProducts(data)
           setDisplayProduct(data)
        })
   },[])

    useEffect( ()=>{
        if(products.length){
            const saveCard = getStoredCart();
            const storeCart  = [];
            for(const key in saveCard){

                const addedProduct = products.find(product => product.key === key)
                if(addedProduct){
                    const quantity = saveCard[key]
                    addedProduct.quantity = quantity;
                    storeCart.push(addedProduct)
                }
            }
            setCard(storeCart)
        }
        
    },[products])

    const handleAddToCard = product =>{
        const newCard =[...card, product]
        setCard(newCard)
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProduct)
    }   

    return (
        <div>
            <div className="search-container">
               <input type="text" placeholder='Search Product'onChange={handleSearch} />
            </div>
          <div className='shop-container'>
              <div className="product-container">
                {
                    displyProduct.map(product => <Product 
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
        </div>
    );
};

export default Shop;