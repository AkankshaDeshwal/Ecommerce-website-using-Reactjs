import { useCart } from "../context/CartContext";
import Button from "./Button";

const UpdateQuantityButton = ({productId, qty}) => {
    const {updateQuantity} = useCart()
    return ( 
        <div className="flex items-center">
            <Button btnText='-' btnHandler={() => updateQuantity(productId, 'dec', qty)}/>
            <h1 className="px-3 ">{qty}</h1>
            <Button btnText='+' btnHandler={() => updateQuantity(productId, 'inc', qty)}/>
        </div>
     );
}
 
export default UpdateQuantityButton;