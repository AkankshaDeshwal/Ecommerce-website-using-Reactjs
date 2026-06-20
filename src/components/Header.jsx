import { Link } from "react-router-dom";
import Logo from '../assets/brand images/logo.jpg'
import Button from "./Button";
import MobileDropDownMenu from "./MobileDropDownMenu";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onClickHandler = () => {
        setIsOpen(prev => !prev)
    }

    return ( 
        <nav className="flex justify-between md:justify-evenly py-4 px-12 bg-surface items-center shadow-sm relative w-full">
            <div className="flex items-center">
                <Link to='/'><img src={Logo} className="w-15" alt='website logo' /></Link>
            </div>

            <div className="flex gap-4 max-md:hidden">
                <Link to='/' ><h1 className="no-underline hover:text-secondary">Home</h1></Link>
                <Link to='/checkout'><h1 className="no-underline hover:text-secondary">Cart</h1></Link>
            </div>

            <div className="flex gap-4 items-center max-md:hidden">
                <Link to='/auth'><h1 className="no-underline hover:text-secondary">Login</h1></Link>
                <Link to='/auth'><Button btnText="Signup" /></Link>
            </div>

            <HamburgerButton isOpen={isOpen} onClickHandler={onClickHandler}/>

            {isOpen && <MobileDropDownMenu />}
        </nav>
     );
}
 
export default Header;