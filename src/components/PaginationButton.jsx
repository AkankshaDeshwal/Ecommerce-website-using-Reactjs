const PaginationButton = ({pageHandler, disableButton, children}) => {
    return ( <button className="bg-secondary p-2 cursor-pointer hover:bg-primary disabled:bg-gray-400 disabled:cursor-not-allowed" disabled={disableButton} onClick={pageHandler}>
        {children}
    </button> );
}
 
export default PaginationButton;