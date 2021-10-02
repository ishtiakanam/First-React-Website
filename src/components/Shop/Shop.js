import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import { Link } from 'react-router-dom';

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
        const exits = card.find(pd => pd.key === product.key)
        let newCard = []
        if(exits){
           const rest = card.filter(pd => pd.key !== product.key)
           exits.quantity = exits.quantity + 1;
           newCard = [...rest,product]
        }
        else{
            product.quantity =1;
            newCard = [...card,product]
        }
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
                <Card card={card}>
                    <Link to='/review'>
                       <button className='btn-regular'>Review your order</button>
                    </Link>
                </Card>
            </div>
          </div>
        </div>
    );
};

export default Shop;