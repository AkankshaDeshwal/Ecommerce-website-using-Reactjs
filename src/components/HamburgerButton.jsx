import { Menu, X } from "lucide-react";

const HamburgerButton = ({isOpen, onClickHandler}) => {

    
    return ( 
        <button onClick={onClickHandler} className="md:hidden">
            {isOpen?<X />:<Menu />}
        </button>
     );
}
 
export default HamburgerButton;