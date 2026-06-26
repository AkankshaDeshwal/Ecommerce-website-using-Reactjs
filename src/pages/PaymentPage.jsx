import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

const PaymentPage = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    if (!user) {
        return (
            <div className="flex flex-col gap-4 p-4 justify-center">
                <h1 className="text-2xl font-semibold">Payment Page</h1>
                <h1>Please login to place the order.</h1>
                <Button btnText="Go to Login Page" btnHandler={() => navigate("/auth/login", { state: { from: location } }) }/> 
            </div>
        )
    }

    return ( 
        <div className="flex flex-col gap-4 p-4 justify-center">
            <h1 className="text-2xl font-semibold">Payment Page</h1>
            <h1 className="text-lg font-semibold">Your order is placed.</h1>
        </div>
     );
}
 
export default PaymentPage;