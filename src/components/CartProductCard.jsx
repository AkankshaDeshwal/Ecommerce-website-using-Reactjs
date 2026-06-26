import { useCart } from "../context/CartContext";
import Button from "./Button";
import UpdateQuantityButton from "./UpdateQuantityButton";

const CartProductCard = ({product, qty}) => {
    const {removeItem} = useCart()
    const sellingPrice = (product.price*(100-product.discountPercentage)/100).toFixed(2)
    // const qty = (cartItems.find(prod => prod.id === product.id)).quantity
    
    return ( 
        <div className="w-full flex justify-between shadow-md">
            <img src={product.images} alt={product.title} className="h-25"/>
            <div>
                <h1>{product.title}</h1>
                <h2>${sellingPrice}/piece</h2>
            </div>

            <div className="p-2  flex flex-col gap-2">
                <UpdateQuantityButton qty={qty} productId={product.id}/>
                <h2>${(sellingPrice*qty).toFixed(2)}</h2>
                <Button btnText="Remove" btnHandler={() => removeItem(product.id)} />
            </div> 
        </div>
     );
}
 
export default CartProductCard;