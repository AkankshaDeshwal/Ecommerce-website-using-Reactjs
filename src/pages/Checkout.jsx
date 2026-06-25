import { useEffect, useState } from "react";
import CartProductCard from "../components/CartProductCard";
import { useCart } from "../context/CartContext";

const Checkout = () => {
    const {cartItems, removeItem, loadCartItems} = useCart()
    const [cartProductDetails, setCartProductDetails] = useState([])
   
    const getCartItems = async () => {
        const data = await loadCartItems()
        setCartProductDetails(data)
    }


    useEffect(() => {
        getCartItems()
    }, [cartItems])

    if (cartItems.length === 0) {
        return (
            <div className="w-full p-6 bg-surface shadow">
                <h1>Cart is empty</h1>
            </div>
        )
    }
    
    return ( 
        <div className="w-full p-6 bg-surface shadow">
            <h1 className="text-lg font-semibold p-4">Your Cart:</h1>
            <div className="grid grid-cols-3 ">
                {/* Cart products */}
                <div className="col-span-2">
                    <div className="flex flex-col gap-4">
                        {cartProductDetails.map(product => <CartProductCard product={product} />)}
                    </div>
                </div>

                {/* Order Summary */}
                <div>

                </div>
            </div>
        </div>
     );
}
 
export default Checkout;