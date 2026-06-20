const Button = ({btnText, addStyles=""}) => {
    return ( 
        <button className={`p-2 rounded-sm bg-primary hover:bg-secondary cursor-pointer ${addStyles}`}>{btnText}</button>
     );
}
 
export default Button;