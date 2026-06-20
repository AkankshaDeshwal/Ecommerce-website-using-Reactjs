import { Star } from 'lucide-react';
import Sample from '../assets/sample.avif'
import Button from './Button';

const ProductCard = ({product}) => {
    const sellingPrice = (product.price*(1-product.discountPercentage)).toFixed(2)
    return ( 
        <div className="flex flex-col rounded-md shadow-sm bg-surface">
            <div className='border-b border-muted/30'>
                <img className="w-full rounded-md" src={product.images} alt={product.title} />
            </div>

            <div className='p-4 flex flex-col gap-2 items-start'>
                <div className='flex justify-between items-start w-full'>
                <div className='text-left'>
                    <h1 className='text-lg font-bold'>{(product.title.length<20)?product.title: `${product.title.slice(0, 20)}...`}</h1>
                    <h2 className='text-[10px]'>{product.brand}</h2>
                </div>

                <div className=' flex gap-1 py-1 px-2 rounded-xl bg-success justify-center items-center text-[12px] mt-1'>
                    <Star size={10}/> {product.rating}
                </div>
            </div>

            <div className='flex justify-start items-end gap-2'>
                <div>
                    <h1 className='text-lg font-bold'>$ {sellingPrice}</h1>
                </div>
                <div>
                    <h2 className='text-xs line-through mb-0.5'>$ {product.price.toFixed(2)}</h2>
                </div>
            </div>

            <div>
                <Button btnText="Add to Cart" />
            </div>
            </div>
        </div>
     );
}
 
export default ProductCard;