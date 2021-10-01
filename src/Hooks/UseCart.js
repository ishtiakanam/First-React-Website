import { useEffect } from "react"
import { useState } from "react"
import Product from "../components/Product/Product"
import { getStoredCart } from "../utilities/fakedb"

const useCart = products => {
    const [cart,setCart] = useState([])

    useEffect( ()=>{
        if(products.length){
            const saveCart = getStoredCart()
            const storedCart = [];
            for(const key in saveCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quentity = saveCart[key];
                    addedProduct.quentity= quentity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    },[products])
    return [cart,setCart]
}
export default useCart;