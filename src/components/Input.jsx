const Input = ({inputLabel, inputType, inputId, inputPlaceholder, onChangeHandler, inputValue, error}) => {
    return ( 
        <div className="flex flex-col items-start gap-2 ">
            <label htmlFor={inputId}>{inputLabel}</label>
            <input type={inputType} id={inputId} placeholder={inputPlaceholder} onChange={(e) => onChangeHandler(e, inputId)} className="outline-1 outline-input-outline focus:outline-input-focus px-4 py-2 rounded-sm w-full" value={inputValue}/>
            <p className="text-sm text-red-700">{error}</p>
        </div>
     );
}
 
export default Input;