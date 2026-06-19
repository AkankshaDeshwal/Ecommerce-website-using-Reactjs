import { Link } from "react-router-dom";
import Logo from '../assets/brand images/logo.jpg'
import Button from "./Button";

const Header = () => {
    return ( 
        <nav className="flex justify-evenly py-4 px-8 bg-surface items-center">
            <div>
                <Link to='/'><img src={Logo} className="w-15" alt='website logo' /></Link>
            </div>

            <div className="flex gap-4">
                <Link to='/' ><h1 className="no-underline hover:text-secondary">Home</h1></Link>
                <Link to='/checkout'><h1 className="no-underline hover:text-secondary">Cart</h1></Link>
            </div>

            <div className="flex gap-4 items-center">
                <Link to='/auth'><h1 className="no-underline hover:text-secondary">Login</h1></Link>
                <Link to='/auth'><Button btnText="Signup" /></Link>
            </div>
        </nav>
     );
}
 
export default Header;