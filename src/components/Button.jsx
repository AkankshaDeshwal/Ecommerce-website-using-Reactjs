const Button = ({btnText}) => {
    return ( 
        <button className="p-2 rounded-sm bg-primary hover:bg-secondary cursor-pointer">{btnText}</button>
     );
}
 
export default Button;