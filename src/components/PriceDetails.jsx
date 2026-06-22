const PriceDetails = ({price, discountPercentage}) => {

    const sellingPrice = (price*(100-discountPercentage)/100).toFixed(2)

    return ( <div className='flex justify-start items-end gap-2'>
                    <div>
                        <h1 className='text-lg font-bold'>$ {sellingPrice}</h1>
                    </div>
                    <div>
                        <h2 className='text-xs line-through mb-0.5'>$ {price.toFixed(2)}</h2>
                    </div>
                    <div>
                        <h1 className='text-xs text-secondary mb-0.5 font-semibold'>({discountPercentage}% OFF)</h1>
                    </div>
                </div> );
}
 
export default PriceDetails;