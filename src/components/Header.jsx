import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/brand images/logo.jpg'
import Button from "./Button";
import MobileDropDownMenu from "./MobileDropDownMenu";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import { useAuth } from "../context/AuthContext";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {user, logout} = useAuth()
    const navigate = useNavigate()

    const onClickHandler = () => {
        setIsOpen(prev => !prev)
    }

    return ( 
        <nav className="flex justify-between md:justify-evenly py-4 px-12 bg-surface items-center shadow-sm relative w-full">
            <div className="flex items-center">
                <Link to='/'><img src={Logo} className="w-18" alt='website logo' /></Link>
            </div>

            <div className="flex gap-4 max-md:hidden">
                <Link to='/' ><h1 className="no-underline hover:text-secondary">Home</h1></Link>
                <Link to='/checkout'><h1 className="no-underline hover:text-secondary">Cart</h1></Link>
            </div>

            {!user? <div className="flex gap-4 items-center max-md:hidden">
                <Link to='/auth/login'><h1 className="no-underline hover:text-secondary">Login</h1></Link>
                <Button btnText="Signup" btnHandler={() => navigate('/auth/signup')}/>
            </div>:
            <div className="flex gap-4 items-center max-md:hidden">
                <h2 className="text-secondary capitalize">Welcome, {user.userName}</h2>
                <button onClick={logout} className="py-2 px-4 rounded-sm bg-primary hover:bg-secondary cursor-pointer">Logout</button>
            </div>
            }

            <HamburgerButton isOpen={isOpen} onClickHandler={onClickHandler}/>

            {isOpen && <MobileDropDownMenu />}
        </nav>
     );
}
 
export default Header;