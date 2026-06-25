import { Children, useContext, useState } from "react";
import { createContext } from "react";
import { fetchProductById } from "../api/DummyJson";

 export const CartContext = createContext(null)

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (id) => {
        const existing = cartItems.find(product => product.id === id )

        if (existing) {
            const currentQty = existing.quantity 

            const updatedCartItems = cartItems.map(product => (product.id === existing.id? {id:existing.id, quantity:(currentQty+1)} :product))

            setCartItems(updatedCartItems)
        }
        else {
            setCartItems([...cartItems, {id:id, quantity:1}])
        }

        console.log(cartItems)
    }

    const removeItem = (id) => {
        const newCart = cartItems.filter(item => item.id !== id)
        setCartItems(newCart)
        console.log('Remove item function invoked')
        console.log('new cart', newCart)

    }

    const loadCartItems = async () => {
        try {
            const promises = [];
            for (let i = 0; i < cartItems.length; i++) {
                promises.push(fetchProductById(cartItems[i].id));
            }

            let itemDetails = await Promise.all(promises);
            
            return itemDetails;
        } catch (err) {
            console.log(err);
        }
    };
    

    return (
        <CartContext.Provider value={{cartItems, addToCart, loadCartItems, removeItem}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => {
    const context = useContext(CartContext) 

    return context ;
}

