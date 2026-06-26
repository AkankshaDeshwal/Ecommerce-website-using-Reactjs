import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import Button from "./Button";

const OrderTotal = ({cartTotal}) => {
    const orderTotal = cartTotal>10?cartTotal:(cartTotal+1.50)
    const navigate = useNavigate()

    if (cartTotal === 0) {
        return <div>Loading...</div>
    }
    return ( 
        <div className="flex flex-col gap-4 bg-surface items-between border rounded-md border-muted p-4">
            <h1 className="font-semibold text-lg">Order Total</h1>
            <div className="grid grid-cols-2 gap-2">
                <h1>Cart Total:</h1>
                <h2>$ {cartTotal}</h2>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <h1>Delivery:</h1>
                <h2>{cartTotal>10?'FREE': '$1.50'}</h2>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <h1>Order Total:</h1>
                <h2>{orderTotal}</h2>
            </div>

            <Button btnText='Proceed To Pay' btnHandler={() => navigate('/paymentpage')} />
        </div>
     );
}
 
export default OrderTotal;