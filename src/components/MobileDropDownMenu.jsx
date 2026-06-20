import { Link } from "react-router-dom";
import Button from "./Button";

const MobileDropDownMenu = () => {
    return ( 
        <div className="w-full py-2 absolute left-0 top-full bg-surface md:hidden">
            <ul className="flex flex-col border-b-2 w-full">
                <li className="p-1 w-full text-center"><Link to='/'>Home</Link></li>
                <li className="p-1 w-full text-center"><Link to='/'>Cart</Link></li>
                <li className="p-1 w-full text-center "><Link to='/'>Login</Link></li>
                <li className="p-1  text-center"><Link to='/'><Button btnText="Signup" addStyles="w-full" /></Link></li>
            </ul>

        </div>
     );
}
 
export default MobileDropDownMenu;