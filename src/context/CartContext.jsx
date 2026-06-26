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
        setCartItems(prev => prev.filter(item => item.id !== id))

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

    const updateQuantity = (id, ops, qty) => {
        if (ops === 'dec' && qty === 1) {
            removeItem(id)
            return
        }

        setCartItems(prev => prev.map(product => {

            if (product.id !== id){
                return product
            }

                return {
                    ...product,
                    quantity: (ops === 'inc' ? product.quantity + 1 : product.quantity-1)
                }
            }))

        // if (ops === 'inc') {

        //     newCart = cartItems.map(product => {
        //         return {
        //             ...product,
        //             quantity: (product.id === id ? product.quantity + 1 : product.quantity)
        //         }
        //     })

        // } else if (ops === 'dec') {
        //     if (qty === 1) {
        //         removeItem(id)
        //     }
        //     else {
        //         newCart = cartItems.map(product => {

        //             return {

        //                 ...product,
        //                 quantity: (product.id === id ? product.quantity - 1 : product.quantity)
        //             }
        //         })
        //     }
        // }

        // setCartItems(newCart)
    }


    return (
        <CartContext.Provider value={{cartItems, addToCart, loadCartItems, removeItem, updateQuantity}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => {
    const context = useContext(CartContext) 

    return context ;
}

