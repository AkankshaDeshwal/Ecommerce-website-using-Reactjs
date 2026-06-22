const Button = ({btnText, addStyles="", btnHandler}) => {
    return ( 
        <button className={`py-2 px-4 rounded-sm bg-primary hover:bg-secondary cursor-pointer ${addStyles}`} onClick={btnHandler}>{btnText}</button>
     );
}
 
export default Button;