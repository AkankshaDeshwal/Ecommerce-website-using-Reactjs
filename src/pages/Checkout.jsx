import { useEffect, useState } from "react";
import CartProductCard from "../components/CartProductCard";
import { useCart } from "../context/CartContext";
import OrderTotal from "../components/OrderTotal";

const Checkout = () => {
    const {cartItems, removeItem, loadCartItems} = useCart()
    const [normalizedMap, setNormalizedMap] = useState({})
   
    const getCartItems = async () => {
        const data = await loadCartItems()

        const normalizedData = {}

        data.forEach(product => {
            if (product) {
                normalizedData[product.id] = product
            }
        })
        setNormalizedMap(normalizedData)
    }

    const cartTotal = Number((cartItems.reduce((acc, item) => {
        const product =normalizedMap[item.id]

        if (!product) return acc

        const sellingPrice = product.price*(100-product.discountPercentage)/100

        return acc + (sellingPrice*item.quantity)
    }, 0)).toFixed(2))

    


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
            <div className="grid grid-cols-3 p-4">
                {/* Cart products */}
                <div className="col-span-2">
                    <div className="flex flex-col gap-4">
                        {cartItems.map(item => {
                            const details = normalizedMap[item.id]

                            if (!details) return null

                            return (<CartProductCard product={details} qty = {item.quantity}/>)
                        })}
                    </div>
                </div>

                {/* Order Summary */}
                <div className=" px-4">
                        <OrderTotal cartTotal={cartTotal} />
                </div>
            </div>
        </div>
     );
}
 
export default Checkout;