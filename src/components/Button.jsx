const Button = ({btnText, addStyles=""}) => {
    return ( 
        <button className={`py-2 px-4 rounded-sm bg-primary hover:bg-secondary cursor-pointer ${addStyles}`}>{btnText}</button>
     );
}
 
export default Button;