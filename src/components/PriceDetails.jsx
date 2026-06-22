const PriceDetails = ({price, discountPercentage, displayLoc}) => {

    const styling = displayLoc === 'product page'?{sellingPrice:"text-xl", price:"text-sm", discountPercentage:"text-sm font-semibold"}: {sellingPrice:"text-lg", price:"text-xs", discountPercentage:"text-xs"}

    const sellingPrice = (price*(100-discountPercentage)/100).toFixed(2)

    return ( <div className='flex justify-start items-end gap-2'>
                    <div>
                        <h1 className={`${styling.sellingPrice} font-bold`}>$ {sellingPrice}</h1>
                    </div>
                    <div>
                        <h2 className={`${styling.price} font-bold line-through mb-0.5`}>$ {price.toFixed(2)}</h2>
                    </div>
                    <div>
                        <h1 className={`${styling.discountPercentage} font-semibold mb-0.5 text-secondary`}>({discountPercentage}% OFF)</h1>
                    </div>
                </div> );
}
 
export default PriceDetails;